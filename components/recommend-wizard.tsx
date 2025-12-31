"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { Check, ChevronRight, RotateCcw } from "lucide-react"

type Concern = "face" | "scalp" | "body"
type Priority = "result" | "relax"
type Budget = "standard" | "premium"

export function RecommendWizard() {
  const [step, setStep] = useState(1)
  const [concern, setConcern] = useState<Concern | null>(null)
  const [priority, setPriority] = useState<Priority | null>(null)
  const [budget, setBudget] = useState<Budget | null>(null)

  const canNext = useMemo(() => {
    if (step === 1) return !!concern
    if (step === 2) return !!priority
    if (step === 3) return !!budget
    return true
  }, [step, concern, priority, budget])

  const result = useMemo(() => {
    if (!concern || !priority || !budget) return null
    // 非厳密: 参考サイトの主力メニューを想定
    if (concern === "face") {
      if (priority === "result") {
        return {
          title: "ヒト幹細胞培養上清液フェイシャル",
          reason: "再生医療技術で、肌の奥深くからハリと潤いを呼び覚まします。",
          price: "¥12,000",
          tag: "Result Oriented"
        }
      }
      return {
        title: "GOMARICOオイル フェイシャル",
        reason: "抗酸化作用の高いオイルで、心身の疲れを解き放つ至福の時間。",
        price: "¥8,000",
        tag: "Relaxation"
      }
    }
    if (concern === "scalp") {
      return {
        title: "ヒト幹細胞培養上清液スカルプ",
        reason: "頭皮環境を整え、健やかな髪を育む土台を作ります。",
        price: "¥10,000",
        tag: "Scalp Care"
      }
    }
    // body
    if (priority === "result") {
      return {
        title: "最新エステ機器 GROTTYPRO",
        reason: "近赤外線と音響振動で、深層筋肉までアプローチし凝りを解消。",
        price: "¥15,000",
        tag: "Body Care"
      }
    }
    return {
      title: "オイルトリートメント",
      reason: "オールハンドの温もりで、全身の巡りを整え深いリラクゼーションへ。",
      price: "¥9,000",
      tag: "Healing"
    }
  }, [concern, priority, budget])

  const handleNext = () => {
    if (canNext) {
      setStep((s) => Math.min(3, s + 1))
    }
  }

  const handleBack = () => {
    setStep((s) => Math.max(1, s - 1))
  }

  const handleReset = () => {
    setStep(1)
    setConcern(null)
    setPriority(null)
    setBudget(null)
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* ステップインジケーター */}
      <div className="mb-12">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -z-10"></div>
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex flex-col items-center bg-white px-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-serif transition-all duration-500 ${
                  step >= n
                    ? "bg-[var(--salon-gold)] text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {step > n ? <Check className="w-4 h-4" /> : n}
              </div>
              <span className={`text-[10px] tracking-widest mt-2 uppercase ${step >= n ? "text-[var(--salon-gold)]" : "text-gray-300"}`}>
                Step {n}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 質問エリア */}
      <div className="min-h-[400px] flex flex-col justify-between">
        <div className="animate-fade-in-up">
          {step === 1 && (
            <section className="space-y-8 text-center">
              <h3 className="text-2xl font-serif text-gray-800">Q1. 気になる部位はどこですか？</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { id: 'face', label: 'お肌', sub: 'Facial', icon: '✨' },
                  { id: 'scalp', label: '髪・頭皮', sub: 'Scalp', icon: '💆‍♀️' },
                  { id: 'body', label: 'からだ', sub: 'Body', icon: '🌿' },
                ].map((item) => (
                  <button
                    key={item.id}
                    className={`group relative p-8 border transition-all duration-300 hover:shadow-lg text-left ${
                      concern === item.id
                        ? "border-[var(--salon-gold)] bg-[var(--salon-bg)]"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                    onClick={() => setConcern(item.id as Concern)}
                  >
                    <span className="text-4xl mb-4 block">{item.icon}</span>
                    <span className="block text-lg font-serif text-gray-800 mb-1">{item.label}</span>
                    <span className="block text-xs text-gray-400 tracking-widest uppercase">{item.sub}</span>
                    {concern === item.id && (
                      <div className="absolute top-4 right-4 text-[var(--salon-gold)]">
                        <Check className="w-5 h-5" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </section>
          )}

          {step === 2 && (
            <section className="space-y-8 text-center">
              <h3 className="text-2xl font-serif text-gray-800">Q2. 何を重視しますか？</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: 'result', label: '結果・即効性', sub: 'Result Oriented', desc: '悩みを根本から解決したい' },
                  { id: 'relax', label: '癒し・心地よさ', sub: 'Relaxation', desc: '心身ともにリラックスしたい' },
                ].map((item) => (
                  <button
                    key={item.id}
                    className={`group relative p-8 border transition-all duration-300 hover:shadow-lg text-left ${
                      priority === item.id
                        ? "border-[var(--salon-gold)] bg-[var(--salon-bg)]"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                    onClick={() => setPriority(item.id as Priority)}
                  >
                    <span className="block text-lg font-serif text-gray-800 mb-1">{item.label}</span>
                    <span className="block text-xs text-[var(--salon-gold)] tracking-widest uppercase mb-4">{item.sub}</span>
                    <span className="block text-sm text-gray-500">{item.desc}</span>
                    {priority === item.id && (
                      <div className="absolute top-4 right-4 text-[var(--salon-gold)]">
                        <Check className="w-5 h-5" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </section>
          )}

          {step === 3 && (
            <section className="space-y-8 text-center">
              <h3 className="text-2xl font-serif text-gray-800">Q3. ご予算の目安は？</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { id: 'standard', label: 'スタンダード', sub: 'Standard', desc: 'まずは気軽に体験したい' },
                  { id: 'premium', label: 'プレミアム', sub: 'Premium', desc: '自分へのご褒美に贅沢を' },
                ].map((item) => (
                  <button
                    key={item.id}
                    className={`group relative p-8 border transition-all duration-300 hover:shadow-lg text-left ${
                      budget === item.id
                        ? "border-[var(--salon-gold)] bg-[var(--salon-bg)]"
                        : "border-gray-200 bg-white hover:border-gray-300"
                    }`}
                    onClick={() => setBudget(item.id as Budget)}
                  >
                    <span className="block text-lg font-serif text-gray-800 mb-1">{item.label}</span>
                    <span className="block text-xs text-[var(--salon-gold)] tracking-widest uppercase mb-4">{item.sub}</span>
                    <span className="block text-sm text-gray-500">{item.desc}</span>
                    {budget === item.id && (
                      <div className="absolute top-4 right-4 text-[var(--salon-gold)]">
                        <Check className="w-5 h-5" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </section>
          )}

          {step === 4 && result && (
            <section className="text-center animate-fade-in-up">
              <div className="inline-block mb-6">
                <span className="text-xs tracking-[0.3em] text-[var(--salon-gold)] uppercase border-b border-[var(--salon-gold)] pb-1">
                  Your Best Menu
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-serif text-gray-800 mb-8">あなたへのおすすめ</h3>
              
              <div className="bg-[var(--salon-bg)] p-8 md:p-12 border border-[var(--salon-border)] relative max-w-xl mx-auto">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--salon-gold)] text-white text-[10px] tracking-widest px-4 py-1 uppercase">
                  {result.tag}
                </div>
                
                <h4 className="text-xl md:text-2xl font-serif text-gray-800 mb-4">{result.title}</h4>
                <p className="text-gray-600 leading-loose mb-8 text-sm md:text-base">
                  {result.reason}
                </p>
                <p className="text-2xl font-serif text-[var(--salon-gold)] mb-8">{result.price}</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="inline-block bg-[var(--salon-text)] text-white px-8 py-3 text-sm tracking-widest hover:bg-[var(--salon-gold)] transition-colors"
                  >
                    このメニューを予約する
                  </Link>
                  <Link 
                    href="/menu" 
                    className="inline-block border border-gray-300 text-gray-600 px-8 py-3 text-sm tracking-widest hover:border-[var(--salon-gold)] hover:text-[var(--salon-gold)] transition-colors"
                  >
                    メニュー詳細を見る
                  </Link>
                </div>
              </div>

              <button 
                onClick={handleReset}
                className="mt-12 text-gray-400 hover:text-gray-600 flex items-center justify-center gap-2 mx-auto text-sm tracking-widest transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                もう一度診断する
              </button>
            </section>
          )}
        </div>

        {/* ナビゲーションボタン */}
        {step < 4 && (
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-100">
            <button 
              className={`text-sm tracking-widest text-gray-400 hover:text-gray-600 transition-colors ${step === 1 ? 'invisible' : ''}`}
              onClick={handleBack}
            >
              BACK
            </button>
            
            {step < 3 ? (
              <button 
                className="flex items-center gap-2 bg-[var(--salon-text)] text-white px-8 py-3 text-sm tracking-widest hover:bg-[var(--salon-gold)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleNext}
                disabled={!canNext}
              >
                NEXT <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button 
                className="flex items-center gap-2 bg-[var(--salon-gold)] text-white px-8 py-3 text-sm tracking-widest hover:bg-[#a38d68] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={() => setStep(4)}
                disabled={!canNext}
              >
                DIAGNOSE <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}


