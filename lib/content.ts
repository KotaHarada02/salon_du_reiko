// お客様の声とFAQ。トップと各ページで共有する。
// サイトに載せる口コミ。医療的な効果と受け取られる体験談は入れない
import reviews from "@/lib/data/reviews.json"

type RawReview = {
  customer: { location: string | null; name: string }
  menu: string
  summary: string
  comment: string
}

export type Voice = { name: string; location: string | null; menu: string; text: string }

// お客様の言葉は書き換えずに載せる。頭痛・更年期など、医療的な効果と受け取られる体験談は掲載しない（docs/確認事項.md 3章）
const isMedicalClaim = (r: RawReview) => /頭痛|更年期/.test(r.comment)

export const VOICES: Voice[] = (reviews as RawReview[])
  .filter((r) => !isMedicalClaim(r))
  .map((r) => ({
    name: r.customer.name,
    location: r.customer.location,
    menu: r.menu,
    text: r.comment,
  }))

// トップに出す3件。はじめての方が気にする「雰囲気・接客」が伝わる声を選ぶ
export const PICKUP_VOICES = VOICES.filter((v) => /笑顔|雰囲気|ティータイム/.test(v.text)).slice(0, 3)

export type Faq = { q: string; a: string }

// 先頭5件をトップに表示する。初見の不安に近い順に並べる
export const FAQS: Faq[] = [
  {
    q: "痛みはありますか？",
    a: "ありません。導入機器（GROTTY PRO）は近赤外線と音響振動を使うため、針も使いません。心地よさに眠ってしまう方もいらっしゃいます。",
  },
  {
    q: "回数券や化粧品をすすめられませんか？",
    a: "無理な勧誘はいたしません。次回のご予約も、ご自身のペースで決めていただけます。",
  },
  {
    q: "施術のあと、すぐにメイクできますか？",
    a: "できます。赤みや腫れが出るダウンタイムがないので、そのままメイクしてお帰りいただけます。",
  },
  {
    q: "初回価格はだれが対象ですか？",
    a: "はじめてご来店の方が対象です。ヒト幹細胞フェイシャル（90分）は初回 ¥9,900、ヘッドスパ（30分）は初回 ¥5,500 でお試しいただけます。",
  },
  {
    q: "支払い方法は？",
    a: "現金・クレジットカード・PayPayがご利用いただけます。",
  },
  {
    q: "どれくらいの頻度で通うのがおすすめですか？",
    a: "肌の生まれ変わりに合わせて、はじめは2週間〜1ヶ月に1回をおすすめしています。落ち着いてきたら月1回のメンテナンスで十分です。",
  },
  {
    q: "予約は必要ですか？",
    a: "完全予約制です。公式LINEからご予約ください。InstagramのDM、ホットペッパービューティー、Web予約（Square）からも承っています。",
  },
  {
    q: "駐車場はありますか？",
    a: "敷地内に無料駐車場がございます。",
  },
  {
    q: "男性も利用できますか？",
    a: "女性のお客様が中心のサロンのため、男性はお知り合い・ご紹介の方のみ承っています。",
  },
]
