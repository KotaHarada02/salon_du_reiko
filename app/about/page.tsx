import { PageHeader } from "@/components/page-header"
import { DiagnosisCta } from "@/components/diagnosis-cta"
import { LockIcon, FlaskIcon, SealCheckIcon } from "@phosphor-icons/react/dist/ssr"
import { OWNER, SALON } from "@/lib/salon"

export const metadata = {
  title: "サロンについて | Salon du Reiko",
  description: "看護師でもあるオーナー麗子がひとりで営む、甲賀市水口町のログハウスサロン。サロンを開いた理由と、大切にしていること。",
}

const FEATURES = [
  {
    title: "オーナーひとりのサロン",
    desc: `ログハウスを貸切にして、看護師でもあるオーナー${OWNER.name}が最初から最後まで担当します。ほかのお客様と顔を合わせることはありません。`,
    Icon: LockIcon,
  },
  {
    title: "ヒト幹細胞培養上清液",
    desc: "再生医療の分野でも研究が進む美容成分を、導入機器 GROTTY PRO（近赤外線・音響振動）で肌に届けます。",
    Icon: FlaskIcon,
  },
  {
    title: "肌にふれるものを選ぶ",
    desc: "オイルからタオルまで、肌に直接ふれるものは品質を確かめて選んでいます。",
    Icon: SealCheckIcon,
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen pb-32">
      <PageHeader title="About Salon" subtitle="サロンについて" />

      <div className="container">
        <section className="grid grid-cols-1 gap-12 pb-20 md:grid-cols-[1fr_1.1fr] md:gap-20 md:pb-28">
          <div className="relative aspect-[4/3] w-full overflow-hidden md:order-2 md:aspect-[4/5]">
            <img src="/img/outside.jpg" alt="岩谷医院敷地内にあるログハウスの外観" className="h-full w-full object-cover object-top" />
          </div>

          <div className="flex flex-col justify-center md:order-1">
            <h2 className="text-2xl leading-relaxed text-stone-800 md:text-3xl">
              心も体も、
              <br />
              ほどける場所に。
            </h2>
            <div className="my-8 h-px w-12 bg-[var(--salon-gold)]" />
            <div className="space-y-6 text-sm md:text-base">
              <p>
                {SALON.name}は、{SALON.area}水口町の{SALON.building}にある、完全予約制のサロンです。
              </p>
              <p>
                日々の忙しさを忘れて、自分のためだけに使う時間。ヒト幹細胞培養上清液や厳選したオイルを使い、肌と心の両方を整えます。
              </p>
              <p>施術を終えて鏡を見たとき、自分が少し好きになる。そんな時間をお届けします。</p>
            </div>
          </div>
        </section>

        <section className="grid items-center gap-10 border-t border-[var(--salon-border)] py-20 md:grid-cols-[1.1fr_0.9fr] md:gap-20 md:py-28">
          <div className="aspect-[4/3] overflow-hidden">
            <img src="/img/room.jpg" alt="ベッドとソファのある施術室" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="block font-sans text-xs tracking-[0.25em] text-[var(--salon-gold)]">ROOM</span>
            <h2 className="mt-3 text-2xl text-stone-800">施術室</h2>
            <p className="mt-5 text-sm leading-loose">
              木のぬくもりとランプの灯りに包まれた一室です。施術の前後には、ソファでお茶を飲みながらゆっくりお過ごしいただけます。
            </p>
          </div>
        </section>

        <section id="owner" className="scroll-mt-24 border-t border-[var(--salon-border)] py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <div>
              <div className="mx-auto aspect-[2/3] w-full max-w-[320px] overflow-hidden md:sticky md:top-28 md:max-w-none">
                <img src="/img/owner1.jpg" alt={`オーナーの${OWNER.name}`} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>

            <div>
              <span className="block font-sans text-xs tracking-[0.25em] text-[var(--salon-gold)]">OWNER</span>
              <h2 className="mt-3 text-2xl leading-relaxed text-stone-800 md:text-3xl">
                「{OWNER.quote}」を、
                <br />
                あなたにも。
              </h2>
              <p className="mt-3 text-sm text-stone-500">
                オーナー {OWNER.name}（{OWNER.career}）
              </p>

              {/* 本人のインタビュー（docs/OwnerInerview.md）をもとにした文章。公開前に本人確認が必要 */}
              <div className="mt-8 space-y-5 text-sm leading-loose md:text-[15px]">
                <p>はじめまして。オーナーの{OWNER.name}です。現在、看護師として働いています。</p>
                <p>
                  48歳のとき、脳梗塞になりました。退院してからは筋力が落ち、不安や体調の変化で、一気に老け込んでしまいました。母に「老けたね」と言われたことも、忘れられません。
                </p>
                <p>
                  そんなときに出会ったのが、ヒト幹細胞のエステです。お肌が変わると、気持ちまで前向きになれました。「{OWNER.quote}」になれたこの体験を、年齢や体の変化に悩む方に届けたい。そう思い、{OWNER.opened}、以前勤めていた医院の敷地内のログハウスでサロンを開きました。
                </p>
              </div>

              <dl className="mt-10 grid gap-6 border-t border-[var(--salon-border)] pt-8 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <dt className="text-xs tracking-wider text-[var(--salon-gold)]">大切にしていること</dt>
                  <dd className="mt-2 font-serif text-lg text-[var(--salon-text)]">{OWNER.motto}</dd>
                  <dd className="mt-2 text-sm">
                    お顔だけでなく、首・肩・デコルテ・ヘッドまで、疲れがたまりやすいところをまとめてケアします。高級感がありながら、温かく親しみやすいサロンでありたいと思っています。
                  </dd>
                </div>
                <div>
                  <dt className="text-xs tracking-wider text-[var(--salon-gold)]">こんな方に来てほしい</dt>
                  <dd className="mt-2 text-sm">{OWNER.forWhom.join("・")}</dd>
                </div>
                <div>
                  <dt className="text-xs tracking-wider text-[var(--salon-gold)]">好きなもの</dt>
                  <dd className="mt-2 text-sm">{OWNER.likes.join("・")}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--salon-border)] py-20 md:py-28">
          <div className="mb-14 flex items-baseline justify-between">
            <h2 className="text-2xl text-stone-800 md:text-3xl">3つのこだわり</h2>
            <span className="hidden font-sans text-xs tracking-[0.25em] text-[var(--salon-gold)] md:block">FEATURES</span>
          </div>

          <div className="divide-y divide-[var(--salon-border)] border-t border-[var(--salon-border)]">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="grid grid-cols-1 gap-4 py-10 md:grid-cols-[auto_1fr_2fr] md:items-center md:gap-12">
                <span className="font-serif text-sm text-stone-300">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex items-center gap-4">
                  <f.Icon className="h-6 w-6 shrink-0 text-[var(--salon-gold)]" weight="light" />
                  <h3 className="text-xl">{f.title}</h3>
                </div>
                <p className="text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <DiagnosisCta lead="サロンの雰囲気が気に入ったら" />
    </main>
  )
}
