// 30秒診断のロジック。質問・点数・部位・文面は lib/data/diagnosis.json で管理する
import data from "@/lib/data/diagnosis.json"
import { MENUS, OPTIONS, duration, type Menu, type MenuId } from "@/lib/salon"

type Table = Record<string, Record<string, number>>
type Labels = Record<string, string>

export type QuestionId = "age" | "concerns" | "parts" | "purpose"
export type Option = { id: string; label: string; sub?: string }
export type Question = { id: QuestionId; title: string; sub?: string; type: "single" | "multi"; options: Option[] }

export const QUESTIONS = data.questions as Question[]

export type Answers = { age: string; concerns: string[]; parts: string[]; purpose: string }

/** 結果に並べる1コース分 */
export type Choice = {
  menu: Menu
  withBack: boolean
  minutes: number
  /** 通常価格（背中ほぐし込み） */
  price: number
  reasons: string[]
  notices: string[]
}

export type DiagnosisResult = {
  /** [0] がいちばんのおすすめ。以降が「こちらもおすすめ」 */
  choices: Choice[]
  intro: string
  /** 顔とからだ全体を両方選んだときなど、全体にかかる注意書き */
  notices: string[]
  highlightFirst: boolean
}

const { scoring, rules, coverage, result_copy: copy } = data
const menuParts = coverage.menus as Record<string, string[]>
const noMain = Object.fromEntries(Object.entries(rules.no_main).filter(([k]) => k !== "note")) as Record<string, string[]>

const add = (total: Map<string, number>, table?: Record<string, number>) => {
  for (const [menu, point] of Object.entries(table ?? {})) total.set(menu, (total.get(menu) ?? 0) + point)
}

/** 選んだ部位をすべてカバーするメニュー。背中は「背中ほぐし」を足してカバーできるものもある */
function coveringMenus(selected: string[]) {
  const { menus: backMenus, part: backPart } = coverage.back_option
  const result: { id: string; withBack: boolean; extra: number }[] = []
  for (const [id, parts] of Object.entries(menuParts)) {
    const covered = new Set(parts)
    let withBack = false
    if (backMenus.includes(id) && selected.includes(backPart) && !covered.has(backPart)) {
      covered.add(backPart)
      withBack = true
    }
    if (selected.every((p) => covered.has(p))) {
      result.push({ id, withBack, extra: parts.filter((p) => !selected.includes(p)).length })
    }
  }
  return result
}

export function diagnose(answers: Answers): DiagnosisResult {
  const total = new Map<string, number>()
  add(total, (scoring.age as Table)[answers.age])
  answers.concerns.forEach((c) => add(total, (scoring.concerns as Table)[c]))
  add(total, (scoring.purpose as Table)[answers.purpose])

  // 部位をカバーできる候補。なければ fallback（顔とからだ全体を両方選んだとき）
  let candidates = coveringMenus(answers.parts)
  const isFallback = candidates.length === 0
  if (isFallback) candidates = coverage.fallback.candidates.map((id) => ({ id, withBack: false, extra: 0 }))

  // 選んでいない部位まで含む大きなコースは、余分な部位ごとに減点する
  const score = (id: string) => {
    const c = candidates.find((x) => x.id === id)
    return (total.get(id) ?? 0) - (c ? c.extra * coverage.extra_part_penalty : 0)
  }
  const order = scoring.tie_break
  const rank = <T extends { id: string }>(list: T[]) =>
    [...list].sort((a, b) => score(b.id) - score(a.id) || order.indexOf(a.id) - order.indexOf(b.id))

  const pool = candidates.filter((c) => !noMain[c.id]?.includes(answers.purpose))
  const best = rank(pool.length ? pool : candidates)[0]

  // 「こちらもおすすめ」：部位をカバーするメニューを優先し、足りなければ点数順に足す
  const { count, ensure_cheaper } = rules.alternatives
  const others = [
    ...rank(candidates.filter((c) => c.id !== best.id)),
    ...rank(order.filter((id) => !candidates.some((c) => c.id === id)).map((id) => ({ id, withBack: false, extra: 0 }))),
  ]
  const alternatives = others.slice(0, count)

  const backOption = OPTIONS[0]
  const toChoice = (c: { id: string; withBack: boolean }): Choice => {
    const menu = MENUS[c.id as MenuId]
    const menuCopy = (copy.menus as Record<string, { reason: string; matched?: Labels }>)[c.id]
    return {
      menu,
      withBack: c.withBack,
      minutes: menu.minutes + (c.withBack ? backOption.minutes : 0),
      price: menu.price + (c.withBack ? backOption.price : 0),
      reasons: [
        menuCopy.reason,
        ...answers.concerns.map((k) => menuCopy.matched?.[k]),
        (copy.age_note as Labels)[answers.age],
      ].filter(Boolean) as string[],
      notices: [(rules.notices as Labels)[c.id]].filter(Boolean),
    }
  }

  const bestChoice = toChoice(best)
  let altChoices = alternatives.map(toChoice)
  // 高いコースばかり並ばないよう、1位より安いコースを必ず1つ入れる
  if (ensure_cheaper && !altChoices.some((c) => c.price < bestChoice.price)) {
    const cheaper = others.map(toChoice).find((c) => c.price < bestChoice.price)
    if (cheaper) altChoices = [...altChoices.slice(0, count - 1), cheaper]
  }

  const concernText = answers.concerns.map((c) => (copy.concern_label as Labels)[c])
  const partText = answers.parts.map((p) => (copy.part_label as Labels)[p])
  const ageText = (copy.age_label as Labels)[answers.age]

  return {
    choices: [bestChoice, ...altChoices],
    intro: `「${concernText.join("」「")}」が気になる${ageText}のあなた。${partText.join("・")}をケアするなら`,
    notices: [isFallback ? coverage.fallback.notice : undefined, copy.foot_note].filter(Boolean) as string[],
    highlightFirst: rules.highlight_first_price.purposes.includes(answers.purpose),
  }
}

/** LINE に貼ってもらう文面 */
export function lineMessage(answers: Answers, choice: Choice) {
  const label = (table: unknown, ids: string[]) => ids.map((id) => (table as Labels)[id]).join("、")
  return copy.line_message
    .map((line) =>
      line
        .replace("{menu}", choice.menu.name)
        .replace("{duration}", duration(choice.minutes))
        .replace("{option}", choice.withBack ? `＋${OPTIONS[0].name}` : "")
        .replace("{age}", label(copy.age_label, [answers.age]))
        .replace("{concerns}", label(copy.concern_label, answers.concerns))
        .replace("{parts}", label(copy.part_label, answers.parts))
        .replace("{purpose}", label(copy.purpose_label, [answers.purpose])),
    )
    .join("\n")
}
