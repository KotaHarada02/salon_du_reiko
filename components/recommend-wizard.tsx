"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
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
  const reduced = useReducedMotion()

  const total = QUESTIONS.length
  const done = step >= total

  const next = () => {
    if (advancing.current) return
    advancing.current = true
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
    <div
      className={cn(
        "w-full",
        tone === "card" &&
          "rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[0_16px_40px_-20px_rgba(29,36,32,0.1)] md:p-8",
      )}
    >
      {/* 進捗 */}
      <div className="mb-6 flex items-center gap-4">
        <span className="shrink-0 rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-accent)] tabular-nums">
          {done ? "診断結果" : `質問 ${step + 1} / ${total}`}
        </span>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--color-surface-muted)]">
          <motion.div
            className="h-full rounded-full bg-[var(--color-accent)]"
            animate={{ width: `${(Math.min(step, total) / total) * 100}%` }}
            transition={reduced ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        {step > 0 && !done && (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="flex min-h-[36px] shrink-0 items-center gap-1 rounded-full px-2.5 text-xs font-medium text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-ink)]"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5" />
            戻る
          </button>
        )}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        {!done ? (
          <motion.div
            key={step}
            initial={reduced ? false : { opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduced ? undefined : { opacity: 0, transition: { duration: 0.08 } }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <QuestionView
              question={QUESTIONS[step]}
              answers={answers}
              isLast={step === total - 1}
              onChoose={(id) => chooseSingle(QUESTIONS[step], id)}
              onToggle={(id) => toggleMulti(QUESTIONS[step], id)}
              onNext={next}
            />
          </motion.div>
        ) : (
          <motion.div
            key="result"
            initial={reduced ? false : { opacity: 0, y: 8 }}
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
  isLast,
  onChoose,
  onToggle,
  onNext,
}: {
  question: Question
  answers: Draft
  isLast: boolean
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
      <legend className="font-serif text-lg font-medium text-[var(--color-ink)] md:text-2xl">
        {question.title}
      </legend>
      {question.sub && <p className="mt-1 text-xs text-[var(--color-ink-muted)]">{question.sub}</p>}

      <div className={cn("mt-4 grid gap-2.5 sm:gap-3", grid)}>
        {question.options.map((opt) => {
          const active = selected.includes(opt.id)
          return (
            <button
              key={opt.id}
              type="button"
              aria-pressed={multi ? active : undefined}
              onClick={() => (multi ? onToggle(opt.id) : onChoose(opt.id))}
              className={cn(
                "relative flex min-h-[64px] touch-manipulation flex-col items-start justify-center rounded-2xl border px-3.5 py-3 text-left transition-[background-color,border-color,transform] duration-150 sm:min-h-[68px] sm:px-4 sm:py-3.5",
                "hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-soft)]/50 active:scale-[0.99]",
                active
                  ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]"
                  : "border-[var(--color-border)] bg-[var(--color-surface)]",
              )}
            >
              {multi && (
                <span
                  className={cn(
                    "absolute right-2.5 top-2.5 flex h-4 w-4 items-center justify-center rounded-full border transition-colors sm:right-3.5 sm:top-3.5 sm:h-5 sm:w-5",
                    active
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                      : "border-[var(--color-border)] bg-white",
                  )}
                >
                  {active && <CheckIcon className="h-2.5 w-2.5 sm:h-3 sm:w-3" weight="bold" />}
                </span>
              )}
              <span className={cn("block text-sm font-medium leading-snug text-[var(--color-ink)] sm:text-[15px]", multi && "pr-5")}>
                {opt.label}
              </span>
              {opt.sub && (
                <span className="mt-0.5 block text-[11px] leading-snug text-[var(--color-ink-muted)] sm:mt-1 sm:text-xs">
                  {opt.sub}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {multi && (
        <button
          type="button"
          onClick={onNext}
          disabled={selected.length === 0}
          className="mt-6 flex min-h-[48px] w-full touch-manipulation items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <span>{isLast ? "診断結果を見る" : "次へ"}</span>
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      )}
    </fieldset>
  )
}

function Result({ answers, onReset }: { answers: Answers; onReset: () => void }) {
  const r = diagnose(answers)
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
      <p className="text-sm leading-relaxed text-[var(--color-ink-muted)]">{r.intro}</p>

      <MainCard choice={chosen} isBest={picked === 0} highlightFirst={r.highlightFirst} />

      {/* ほかのおすすめ */}
      <div className="mt-6">
        <p className="text-sm font-medium text-[var(--color-ink)]">
          {picked === 0 ? "こちらもおすすめです" : "ほかのおすすめ"}
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {others.map(({ c, i }) => (
            <AltCard
              key={c.menu.id}
              choice={c}
              isBest={i === 0}
              cheaper={c.price < r.choices[0].price}
              onChoose={() => choose(i)}
            />
          ))}
        </div>
      </div>

      {[...chosen.notices, ...r.notices].map((n) => (
        <p
          key={n}
          className="mt-4 rounded-xl bg-[var(--color-surface-muted)]/70 px-4 py-3 text-xs leading-relaxed text-[var(--color-ink-muted)]"
        >
          {n}
        </p>
      ))}

      <div className="mt-7 border-t border-[var(--color-border)] pt-6">
        <p className="mb-3 text-xs text-[var(--color-ink-muted)]">
          ご予約対象のメニュー：
          <span className="font-medium text-[var(--color-ink)]">
            {chosen.menu.name}
            {chosen.withBack && "＋背中ほぐし"}
          </span>
        </p>
        <SquareBookButtons menu={chosen.menu} withBack={chosen.withBack} />

        <p className="mt-6 text-xs text-[var(--color-ink-muted)]">
          相談してから決めたい方は、公式LINEからもご予約いただけます。
        </p>
        <LineButton className="mt-2.5 w-full" label="LINEで相談して予約" copyText={lineMessage(answers, chosen)} />
      </div>
      <SubBookingLinks className="mt-4" />

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--color-border)] pt-4">
        <Link
          href="/menu"
          className="text-xs font-medium text-[var(--color-accent)] underline underline-offset-4 hover:text-[var(--color-accent-hover)]"
        >
          すべてのメニューを見る
        </Link>
        <button
          type="button"
          onClick={onReset}
          className="flex min-h-[36px] items-center gap-1.5 rounded-full px-3 text-xs font-medium text-[var(--color-ink-muted)] transition-colors hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-ink)]"
        >
          <ArrowCounterClockwiseIcon className="h-3.5 w-3.5" />
          もう一度診断する
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
    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1 tabular-nums">
      {menu.firstPrice ? (
        <>
          <span className="text-xs text-[var(--color-ink-muted)] line-through">{yen(menu.price)}</span>
          <span className={cn("font-serif font-medium text-[var(--color-ink)]", large ? "text-3xl" : "text-lg")}>
            初回 {yen(menu.firstPrice)}
          </span>
        </>
      ) : (
        <>
          <span className={cn("font-serif font-medium text-[var(--color-ink)]", large ? "text-2xl" : "text-lg")}>
            {priceText(menu)}
          </span>
          {first && (
            <span className="rounded-full bg-[var(--color-warm-soft)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--color-warm)]">
              {first}
            </span>
          )}
          {weekday && (
            <span className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--color-accent)]">
              {weekday}
            </span>
          )}
        </>
      )}
      {choice.withBack && (
        <span className="text-xs text-[var(--color-ink-muted)]">＋背中ほぐし {yen(OPTIONS[0].price)}</span>
      )}
    </div>
  )
}

function MainCard({ choice, isBest, highlightFirst }: { choice: Choice; isBest: boolean; highlightFirst: boolean }) {
  const { menu } = choice
  const category = categoryOf(menu)
  return (
    <div className="mt-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-5 md:p-6">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-[var(--color-accent)] px-3 py-0.5 font-medium text-white">
          {isBest ? "いちばんのおすすめ" : "選択中のメニュー"}
        </span>
        <span style={{ color: category.color }} className="font-medium">
          {category.short}
        </span>
        {menu.popular && (
          <span className="rounded-full bg-[var(--color-warm-soft)] px-2.5 py-0.5 font-medium text-[var(--color-warm)]">
            {menu.popular}
          </span>
        )}
      </div>

      <h3 className="mt-3 font-serif text-xl font-medium leading-snug text-[var(--color-ink)] md:text-2xl">
        {menu.name}
      </h3>
      {choice.withBack && (
        <p className="mt-1 text-sm font-medium text-[var(--color-accent)]">
          ＋ {OPTIONS[0].name}（{OPTIONS[0].minutes}分 {yen(OPTIONS[0].price)}）
        </p>
      )}

      <div className="mt-3 space-y-1.5 text-sm leading-relaxed text-[var(--color-ink-muted)]">
        {choice.reasons.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <p className="mt-3 text-xs text-[var(--color-ink-muted)]">
        {duration(choice.minutes)}
        {menu.parts && ` ／ ${menu.parts}`}
      </p>

      <div className="mt-4 border-t border-[var(--color-border)] pt-4">
        <PriceLine choice={choice} large={highlightFirst || !menu.firstPrice} />
        <p className="mt-1 text-xs text-[var(--color-ink-muted)]">
          税込{(menu.firstPrice || menu.firstLabel) && `。${FIRST_NOTE}`}
        </p>
      </div>
    </div>
  )
}

function AltCard({ choice, isBest, cheaper, onChoose }: { choice: Choice; isBest: boolean; cheaper: boolean; onChoose: () => void }) {
  const { menu } = choice
  return (
    <div className="flex flex-col justify-between rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
      <div>
        <div className="flex flex-wrap gap-1.5">
          {isBest && (
            <span className="rounded-full bg-[var(--color-accent)] px-2.5 py-0.5 text-[11px] font-medium text-white">
              いちばんのおすすめ
            </span>
          )}
          {cheaper && (
            <span className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--color-accent)]">
              お手頃
            </span>
          )}
          {menu.firstPrice && !cheaper && (
            <span className="rounded-full bg-[var(--color-warm-soft)] px-2.5 py-0.5 text-[11px] font-medium text-[var(--color-warm)]">
              初回価格あり
            </span>
          )}
        </div>
        <p className="mt-2.5 text-[15px] font-medium leading-snug text-[var(--color-ink)]">
          {menu.name}
          {choice.withBack && <span className="text-xs font-normal text-[var(--color-ink-muted)]">＋背中ほぐし</span>}
        </p>
        <p className="mt-1 text-xs text-[var(--color-ink-muted)]">
          {duration(choice.minutes)}
          {menu.parts && ` ／ ${menu.parts}`}
        </p>
        <div className="mt-2.5">
          <PriceLine choice={choice} />
        </div>
      </div>
      <button
        type="button"
        onClick={onChoose}
        className="mt-4 inline-flex min-h-[36px] items-center self-start rounded-full border border-[var(--color-border)] px-3.5 py-1.5 text-xs font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      >
        このコースにする
      </button>
    </div>
  )
}
