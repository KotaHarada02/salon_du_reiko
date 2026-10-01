"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowCounterClockwiseIcon, ArrowLeftIcon, ArrowRightIcon, CheckIcon } from "@phosphor-icons/react"
import { LineButton, SquareBookButtons, SubBookingLinks } from "@/components/booking-buttons"
import { QUESTIONS, diagnose, lineMessage, type Answers, type Choice, type Question } from "@/lib/diagnosis"
import { FIRST_NOTE, categoryOf, OPTIONS, firstText, priceText, weekdayText, yen, duration } from "@/lib/salon"
import { cn } from "@/lib/utils"

type Draft = Partial<Answers>

export function RecommendWizard({ tone = "light" }: { tone?: "light" | "card" }) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Draft>({})
  const advancing = useRef(false)

  const total = QUESTIONS.length
  const done = step >= total

  const next = () => {
    if (advancing.current) return
    advancing.current = true
    // 選んだことが見えるよう少し待ってから次へ
    window.setTimeout(() => {
      setStep((s) => s + 1)
      advancing.current = false
    }, 120)
  }

  const chooseSingle = (q: Question, id: string) => {
    setAnswers((a) => ({ ...a, [q.id]: id }))
    next()
  }

  const toggleMulti = (q: Question, id: string) => {
    setAnswers((a) => {
      const current = (a[q.id] as string[] | undefined) ?? []
      return { ...a, [q.id]: current.includes(id) ? current.filter((c) => c !== id) : [...current, id] }
    })
  }

  const reset = () => {
    setAnswers({})
    setStep(0)
  }

  return (
    <div className={cn("w-full", tone === "card" && "bg-white p-6 shadow-[0_20px_60px_-30px_rgba(58,58,58,0.35)] md:p-8")}>
      {/* 進捗 */}
      <div className="mb-6 flex items-center gap-4">
        <span className="shrink-0 font-sans text-[11px] tracking-[0.2em] text-[var(--salon-gold)]">
          {done ? "RESULT" : `Q${step + 1} / ${total}`}
        </span>
        <div className="h-px flex-1 bg-[var(--salon-border)]">
          <motion.div
            className="h-px bg-[var(--salon-gold)]"
            animate={{ width: `${(Math.min(step, total) / total) * 100}%` }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        {step > 0 && !done && (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="flex shrink-0 items-center gap-1 text-xs text-stone-400 transition-colors hover:text-[var(--salon-text)]"
          >
            <ArrowLeftIcon className="h-3 w-3" />
            戻る
          </button>
        )}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {!done ? (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.08 } }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <QuestionView
              question={QUESTIONS[step]}
              answers={answers}
              onChoose={(id) => chooseSingle(QUESTIONS[step], id)}
              onToggle={(id) => toggleMulti(QUESTIONS[step], id)}
              onNext={next}
            />
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <Result answers={answers as Answers} onReset={reset} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function QuestionView({
  question,
  answers,
  onChoose,
  onToggle,
  onNext,
}: {
  question: Question
  answers: Draft
  onChoose: (id: string) => void
  onToggle: (id: string) => void
  onNext: () => void
}) {
  const multi = question.type === "multi"
  const value = answers[question.id]
  const selected = (Array.isArray(value) ? value : [value]).filter(Boolean) as string[]
  const grid = question.options.length >= 5 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"

  return (
    <fieldset>
      <legend className="font-serif text-lg text-[var(--salon-text)] md:text-xl">{question.title}</legend>
      {question.sub && <p className="mt-1 text-xs text-stone-400">{question.sub}</p>}

      <div className={cn("mt-5 grid gap-3", grid)}>
        {question.options.map((opt) => {
          const active = selected.includes(opt.id)
          return (
            <button
              key={opt.id}
              type="button"
              aria-pressed={multi ? active : undefined}
              onClick={() => (multi ? onToggle(opt.id) : onChoose(opt.id))}
              className={cn(
                "relative flex min-h-[72px] flex-col items-start justify-center border px-4 py-3 text-left transition-all duration-200",
                "hover:-translate-y-0.5 hover:border-[var(--salon-gold)] hover:bg-[var(--salon-bg)] active:translate-y-0",
                active ? "border-[var(--salon-gold)] bg-[var(--salon-bg)]" : "border-[var(--salon-border)] bg-white",
              )}
            >
              {multi && (
                <span
                  className={cn(
                    "absolute right-3 top-3 flex h-4 w-4 items-center justify-center border",
                    active ? "border-[var(--salon-gold)] bg-[var(--salon-gold)] text-white" : "border-stone-300",
                  )}
                >
                  {active && <CheckIcon className="h-3 w-3" weight="bold" />}
                </span>
              )}
              <span className="block pr-5 text-[15px] font-medium leading-snug text-[var(--salon-text)]">{opt.label}</span>
              {opt.sub && <span className="mt-1 block text-xs leading-snug text-stone-400">{opt.sub}</span>}
            </button>
          )
        })}
      </div>

      {multi && (
        <button
          type="button"
          onClick={onNext}
          disabled={selected.length === 0}
          className="mt-5 flex w-full items-center justify-center gap-2 bg-[var(--salon-text)] py-3.5 text-sm tracking-wider text-white transition-colors hover:bg-[var(--salon-gold)] disabled:cursor-not-allowed disabled:opacity-30"
        >
          次へ
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      )}
    </fieldset>
  )
}

function Result({ answers, onReset }: { answers: Answers; onReset: () => void }) {
  const r = diagnose(answers)
  // 「このコースにする」で選び直したコース。0 がいちばんのおすすめ
  const [picked, setPicked] = useState(0)
  const chosen = r.choices[picked]
  const others = r.choices.map((c, i) => ({ c, i })).filter(({ i }) => i !== picked)
  const topRef = useRef<HTMLDivElement>(null)

  const choose = (i: number) => {
    setPicked(i)
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div ref={topRef} className="scroll-mt-28">
      <p className="text-xs leading-relaxed text-stone-500">{r.intro}</p>

      <MainCard choice={chosen} isBest={picked === 0} highlightFirst={r.highlightFirst} />

      {/* ほかのおすすめ。高いコースだけにならないよう、安いコースを必ず1つ含む */}
      <div className="mt-5">
        <p className="text-sm text-[var(--salon-text)]">{picked === 0 ? "こちらもおすすめ" : "ほかのおすすめ"}</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {others.map(({ c, i }) => (
            <AltCard key={c.menu.id} choice={c} isBest={i === 0} cheaper={c.price < r.choices[0].price} onChoose={() => choose(i)} />
          ))}
        </div>
      </div>

      {[...chosen.notices, ...r.notices].map((n) => (
        <p key={n} className="mt-3 border-l-2 border-[var(--salon-gold)] pl-3 text-xs leading-relaxed text-stone-500">
          {n}
        </p>
      ))}

      <div className="mt-6 border-t border-[var(--salon-border)] pt-5">
        <p className="mb-3 text-xs text-stone-500">
          予約するメニュー：<span className="text-[var(--salon-text)]">{chosen.menu.name}{chosen.withBack && "＋背中ほぐし"}</span>
        </p>
        <SquareBookButtons menu={chosen.menu} withBack={chosen.withBack} />

        <p className="mt-6 text-xs text-stone-500">相談してから決めたい方は、LINEでもご予約いただけます。</p>
        <LineButton className="mt-2 w-full" label="LINEで相談して予約" copyText={lineMessage(answers, chosen)} />
      </div>
      <SubBookingLinks className="mt-3" />

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--salon-border)] pt-4">
        <Link href="/menu" className="text-xs text-stone-500 underline-offset-4 hover:text-[var(--salon-gold)] hover:underline">
          すべてのメニューを見る
        </Link>
        <button onClick={onReset} className="flex items-center gap-1 text-xs text-stone-400 transition-colors hover:text-[var(--salon-text)]">
          <ArrowCounterClockwiseIcon className="h-3 w-3" />
          もう一度
        </button>
      </div>
    </div>
  )
}

function PriceLine({ choice, large }: { choice: Choice; large?: boolean }) {
  const { menu } = choice
  const first = firstText(menu)
  const weekday = weekdayText(menu)
  return (
    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
      {menu.firstPrice ? (
        <>
          <span className="text-xs text-stone-400 line-through">{yen(menu.price)}</span>
          <span className={cn("font-serif text-[var(--salon-text)]", large ? "text-3xl" : "text-lg")}>初回 {yen(menu.firstPrice)}</span>
        </>
      ) : (
        <>
          <span className={cn("font-serif text-[var(--salon-text)]", large ? "text-2xl" : "text-lg")}>{priceText(menu)}</span>
          {first && <span className="bg-[var(--salon-gold)] px-1.5 py-0.5 text-[11px] text-white">{first}</span>}
          {weekday && <span className="bg-[var(--salon-gold)] px-1.5 py-0.5 text-[11px] text-white">{weekday}</span>}
        </>
      )}
      {choice.withBack && <span className="text-[11px] text-stone-400">＋背中ほぐし {yen(OPTIONS[0].price)}</span>}
    </div>
  )
}

function MainCard({ choice, isBest, highlightFirst }: { choice: Choice; isBest: boolean; highlightFirst: boolean }) {
  const { menu } = choice
  const category = categoryOf(menu)
  return (
    <motion.div
      key={menu.id}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{ borderTopColor: category.color }}
      className="mt-4 border border-t-4 border-[var(--salon-gold)] bg-[var(--salon-bg)] p-5 md:p-6"
    >
      <div className="flex flex-wrap items-center gap-2 font-sans text-[11px] tracking-[0.2em] text-[var(--salon-gold)]">
        <span>
          {isBest ? "YOUR BEST MENU" : "SELECTED"} · <span style={{ color: category.color }}>{category.en}</span>
        </span>
        {menu.popular && (
          <span style={{ background: category.color }} className="whitespace-nowrap px-1.5 py-0.5 tracking-normal text-white">
            {menu.popular}
          </span>
        )}
      </div>
      <h3 className="mt-2 text-xl leading-snug text-[var(--salon-text)] md:text-2xl">{menu.name}</h3>
      {choice.withBack && (
        <p className="mt-1 text-sm text-[var(--salon-gold)]">
          ＋ {OPTIONS[0].name}（{OPTIONS[0].minutes}分 {yen(OPTIONS[0].price)}）
        </p>
      )}

      <div className="mt-3 space-y-1.5 text-sm leading-relaxed">
        {choice.reasons.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <p className="mt-3 text-xs text-stone-400">
        {duration(choice.minutes)}{menu.parts && ` ／ ${menu.parts}`}
      </p>

      <div className="mt-4">
        <PriceLine choice={choice} large={highlightFirst || !menu.firstPrice} />
        <p className="mt-1 text-[11px] text-stone-400">税込{(menu.firstPrice || menu.firstLabel) && `。${FIRST_NOTE}`}</p>
      </div>
    </motion.div>
  )
}

function AltCard({ choice, isBest, cheaper, onChoose }: { choice: Choice; isBest: boolean; cheaper: boolean; onChoose: () => void }) {
  const { menu } = choice
  return (
    <div className="flex flex-col border border-[var(--salon-border)] bg-white p-4">
      <div className="flex flex-wrap gap-1.5">
        {isBest && <span className="bg-[var(--salon-gold)] px-1.5 py-0.5 text-[10px] text-white">いちばんのおすすめ</span>}
        {cheaper && <span className="border border-[var(--salon-gold)] px-1.5 py-0.5 text-[10px] text-[var(--salon-gold)]">お手頃</span>}
        {menu.firstPrice && !cheaper && (
          <span className="border border-[var(--salon-gold)] px-1.5 py-0.5 text-[10px] text-[var(--salon-gold)]">初回価格あり</span>
        )}
      </div>
      <p className="mt-2 text-[15px] leading-snug text-[var(--salon-text)]">
        {menu.name}
        {choice.withBack && <span className="text-xs text-stone-500">＋背中ほぐし</span>}
      </p>
      <p className="mt-1 text-xs text-stone-400">
        {duration(choice.minutes)}{menu.parts && ` ／ ${menu.parts}`}
      </p>
      <div className="mt-2">
        <PriceLine choice={choice} />
      </div>
      <button
        type="button"
        onClick={onChoose}
        className="mt-3 self-start border-b border-[var(--salon-gold)] pb-0.5 text-xs text-[var(--salon-text)] transition-colors hover:text-[var(--salon-gold)]"
      >
        このコースにする
      </button>
    </div>
  )
}
