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
      <PageHeader
        subtitle="サロンについて"
        description="木立に囲まれたログハウスの貸切空間で、心と体の両方をほどくプライベートサロンです。"
      />

      <div className="container pt-12 md:pt-16">
        <section className="grid grid-cols-1 items-center gap-10 pb-16 md:grid-cols-[1fr_1.05fr] md:gap-16 md:pb-24">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] md:order-2 md:aspect-[4/5]">
            <img src="/img/outside.jpg" alt="岩谷医院敷地内にあるログハウスの外観" className="h-full w-full object-cover object-top" />
          </div>

          <div className="md:order-1">
            <h2 className="font-serif text-2xl font-medium leading-snug text-[var(--color-ink)] md:text-3xl">
              心も体も、
              <br />
              ほどける場所に。
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--color-ink-muted)] md:text-base">
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

        <section className="grid items-center gap-10 border-t border-[var(--color-border)] py-16 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:py-24">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-muted)]">
            <img src="/img/room.jpg" alt="ベッドとソファのある施術室" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)] md:text-3xl">施術室</h2>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-ink-muted)] md:text-base">
              木のぬくもりとランプの灯りに包まれた一室です。施術の前後には、ソファでお茶を飲みながらゆっくりお過ごしいただけます。
            </p>
          </div>
        </section>

        <section id="owner" className="scroll-mt-24 border-t border-[var(--color-border)] py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <div>
              <div className="mx-auto aspect-[3/4] w-full max-w-[340px] overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-muted)] md:sticky md:top-28 md:max-w-none">
                <img src="/img/owner1.jpg" alt={`オーナーの${OWNER.name}`} className="h-full w-full object-cover" loading="lazy" />
              </div>
            </div>

            <div>
              <span className="inline-block rounded-full bg-[var(--color-accent-soft)] px-3.5 py-1 text-xs font-medium text-[var(--color-accent)]">
                オーナー {OWNER.name}（{OWNER.career}）
              </span>
              <h2 className="mt-4 font-serif text-2xl font-medium leading-snug text-[var(--color-ink)] md:text-3xl">
                「{OWNER.quote}」を、
                <br />
                あなたにも。
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-relaxed text-[var(--color-ink-muted)] md:text-[15px]">
                <p>はじめまして。オーナーの{OWNER.name}です。現在、看護師として働いています。</p>
                <p>
                  48歳のとき、脳梗塞になりました。退院してからは筋力が落ち、不安や体調の変化で、一気に老け込んでしまいました。母に「老けたね」と言われたことも、忘れられません。
                </p>
                <p>
                  そんなときに出会ったのが、ヒト幹細胞のエステです。お肌が変わると、気持ちまで前向きになれました。「{OWNER.quote}」になれたこの体験を、年齢や体の変化に悩む方に届けたい。そう思い、{OWNER.opened}、以前勤めていた医院の敷地内のログハウスでサロンを開きました。
                </p>
              </div>

              <dl className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:col-span-2">
                  <dt className="text-xs font-medium text-[var(--color-accent)]">大切にしていること</dt>
                  <dd className="mt-2 font-serif text-lg font-medium text-[var(--color-ink)]">{OWNER.motto}</dd>
                  <dd className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">
                    お顔だけでなく、首・肩・デコルテ・ヘッドまで、疲れがたまりやすいところをまとめてケアします。高級感がありながら、温かく親しみやすいサロンでありたいと思っています。
                  </dd>
                </div>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                  <dt className="text-xs font-medium text-[var(--color-accent)]">こんな方に来てほしい</dt>
                  <dd className="mt-2 text-sm text-[var(--color-ink)]">{OWNER.forWhom.join("・")}</dd>
                </div>
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
                  <dt className="text-xs font-medium text-[var(--color-accent)]">好きなもの</dt>
                  <dd className="mt-2 text-sm text-[var(--color-ink)]">{OWNER.likes.join("・")}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--color-border)] py-16 md:py-24">
          <h2 className="font-serif text-2xl font-medium text-[var(--color-ink)] md:text-3xl">
            3つのこだわり
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <f.Icon className="h-5 w-5" weight="regular" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-medium text-[var(--color-ink)]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-muted)]">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <DiagnosisCta lead="サロンの雰囲気が気に入ったら" />
    </main>
  )
}
