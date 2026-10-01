// サロンの基本情報とメニュー。トップ・診断・メニュー・問い合わせページで共有する。

export const SALON = {
  name: "Salon du Reiko",
  tagline: "ヒト幹細胞エステサロン",
  catchphrase: "思わず触りたくなって、会う人会う人に褒められるお肌に…",
  area: "滋賀県甲賀市",
  zip: "〒528-0024",
  address: "滋賀県甲賀市水口町中邸2-10",
  building: "岩谷医院敷地内ログハウス",
  station: "近江鉄道「水口城南駅」より徒歩13分",
  pickup: "JR貴生川駅までの送迎が可能です",
  // 電話番号はサイトに載せない方針（予約・問い合わせは LINE ほか）
  hours: "10:00 - 18:00",
  closed: "月曜・木曜午後・土曜",
  payment: "現金・クレジットカード・PayPay",
} as const

// オーナーのプロフィール（docs/OwnerInerview.md より。本人が明言した内容だけを使う）
export const OWNER = {
  name: "麗子",
  career: "看護師・エステ歴5年",
  opened: "2023年8月",
  motto: "優しく・柔らかく・丁寧に",
  quote: "お肌も心も元気",
  likes: ["ゴルフ", "ファッション", "ヨガ"],
  forWhom: ["自分に投資したい方", "お仕事をがんばる方", "主婦の方"],
}

export type BookingChannel = { id: string; label: string; action: string; url: string; icon: string }

// 予約導線。公式LINEがメイン、それ以外はサブ
// URLが空の窓口はお問い合わせページへ飛ばす
export const BOOKING: { main: BookingChannel; subs: BookingChannel[] } = {
  main: { id: "line", label: "公式LINE", action: "LINEで予約・相談", url: "https://line.me/R/ti/p/@655eyiby", icon: "/icons/line.png" },
  subs: [
    { id: "instagram", label: "Instagram", action: "DMで予約・相談", url: "https://www.instagram.com/salon.du.reiko/", icon: "/icons/instagram.png" },
    {
      id: "hotpepper",
      label: "Hot Pepper Beauty",
      action: "ネット予約",
      url: "https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000700455&ch=1&vos=cpshbkprocap0140516003",
      icon: "/icons/hotpepper.png",
    },
    {
      id: "square",
      label: "Web予約（Square）",
      action: "空き枠を見て予約",
      url: "https://app.squareup.com/appointments/book/7dptjrbq7ypfy2/LG74J6JGPC2DY/start",
      icon: "/icons/square.png",
    },
  ],
}

const SQUARE_BOOK = "https://book.squareup.com/appointments/7dptjrbq7ypfy2/location/LG74J6JGPC2DY/services"

/** Square の予約ページ。メニューを渡すと、そのメニューを開いた状態のページになる */
export const squareUrl = (menu?: Menu, { first = false } = {}) => {
  const id = first ? (menu?.square?.firstServiceId ?? menu?.square?.serviceId) : menu?.square?.serviceId
  return id ? `${SQUARE_BOOK}/${id}` : SQUARE_BOOK
}

/** URL未設定の窓口はお問い合わせページへ */
export const bookingHref = (c: BookingChannel) => c.url || "/contact"

export type CategoryId = "facial" | "body" | "head" | "premium" | "special"

export type Category = {
  id: CategoryId
  /** 目的で選べるように見出しは「〜を整えたい方へ」にする（メニュー表と同じ） */
  ja: string
  en: string
  /** 診断結果などで使う短い呼び名 */
  short: string
  /** 見出しの下に置く一言 */
  lead: string
  /** カテゴリの色。フェイシャルとボディをひと目で見分けられるよう、メニュー表と同じ系統の色を付ける */
  color: string
  tint: string
}

export const CATEGORIES: Category[] = [
  {
    id: "facial",
    ja: "お顔を整えたい方へ",
    en: "Facial",
    short: "フェイシャル",
    lead: "お肌のハリ・ツヤ、疲れて見える印象が気になる方に。",
    color: "var(--cat-facial)",
    tint: "var(--cat-facial-tint)",
  },
  {
    id: "body",
    ja: "身体を整えたい方へ",
    en: "Body",
    short: "ボディ",
    lead: "肩こりや脚の疲れ、全身のだるさが気になる方に。",
    color: "var(--cat-body)",
    tint: "var(--cat-body-tint)",
  },
  {
    id: "head",
    ja: "頭を整えたい方へ",
    en: "Head Spa",
    short: "ヘッドスパ",
    lead: "頭の重さや目の疲れを、短い時間ですっきりさせたい方に。",
    color: "var(--cat-head)",
    tint: "var(--cat-head-tint)",
  },
  {
    id: "premium",
    ja: "全部整えたい方へ",
    en: "Premium",
    short: "最高峰トータルケア",
    lead: "お肌も身体も心も、まとめて整えたい方に。",
    color: "var(--cat-premium)",
    tint: "var(--cat-premium-tint)",
  },
  {
    id: "special",
    ja: "お日にち限定",
    en: "Limited",
    short: "お日にち限定",
    lead: "2人のセラピストによる、特別な日だけのメニューです。",
    color: "var(--cat-limited)",
    tint: "var(--cat-limited-tint)",
  },
]

export const categoryOf = (m: Menu) => CATEGORIES.find((c) => c.id === m.category)!

export type MenuId =
  | "stem-facial"
  | "stem-facial-back"
  | "mens-facial"
  | "body-best"
  | "body-happy"
  | "head-spa"
  | "senju"
  | "joka"

export type Menu = {
  id: MenuId
  category: CategoryId
  name: string
  /** 名前の下に置く一言（メニュー表の副題） */
  subtitle?: string
  /** 「フェイシャル人気No.1」などのバッジ */
  popular?: string
  minutes: number
  price: number
  /** 「16,500円〜」のように下限価格のとき */
  priceFrom?: boolean
  firstPrice?: number
  /** 金額ではなく割引率で初回特典があるとき */
  firstLabel?: string
  /** 平日に来店したときの価格 */
  weekdayPrice?: number
  /** 知り合い・ご紹介の方のみ。トップや診断では出さない */
  referralOnly?: boolean
  /** 施術部位 */
  parts?: string
  /** コースに含まれる内容（✓で並べる） */
  contents?: string[]
  note?: string
  /** メニュー表の説明文 */
  lead: string
  /** メニューページだけに出す、くわしい説明 */
  detail?: string[]
  forWhom: string[]
  /** 期待できること */
  expect: string[]
  /** Square の予約ページのサービスID。first は初回用に別で登録されているもの */
  square?: { serviceId: string; firstServiceId?: string }
}

// 内容・価格は最新のメニュー表（2026年10月）に合わせている。
// 文言はオーナーの原稿どおり。体の働きに作用すると受け取れる言い回し（巡り・フェイスライン）だけ言い換えている
export const MENUS: Record<MenuId, Menu> = {
  "stem-facial": {
    id: "stem-facial",
    category: "facial",
    name: "ヒト幹細胞フェイシャル",
    popular: "フェイシャル人気No.1",
    minutes: 90,
    price: 16500,
    firstPrice: 9900,
    parts: "お顔・首肩・デコルテ・ヘッド",
    lead: "お顔だけでなく、首・肩・デコルテ・ヘッドまで丁寧にケアするSalon du Reiko人気のフェイシャルコースです。",
    detail: [
      "ヒト幹細胞培養上清液とGROTTY PRO（全身照射と美容液導入の一台二役）を使用し、年齢とともに気になる乾燥やハリ不足にアプローチします。",
      "施術後はお肌だけでなく首肩まですっきり軽く、明るく艶やかな印象へ導きます。",
    ],
    forWhom: ["シワ、しみ、たるみが気になる", "疲れて見られることが増えた", "首肩こりも気になる", "まずはSalon du Reikoを体験したい"],
    expect: ["ハリ、ツヤ", "うるおい", "透明感", "首肩の軽さ", "若々しい印象"],
    square: { serviceId: "JXD6HBHS7C3UZ2FFDPYGHE4E", firstServiceId: "64Z4L4JC36FVPKF2IQW522DA" },
  },
  "stem-facial-back": {
    id: "stem-facial-back",
    category: "facial",
    name: "贅沢ヒト幹細胞フェイシャル＋背中",
    subtitle: "背中から整える極上ケア",
    minutes: 110,
    price: 25000,
    parts: "背中・首肩・デコルテ・お顔・ヘッド",
    note: "冷凍ヒト幹細胞培養上清液使用",
    lead: "冷凍ヒト幹細胞培養上清液を使用した、Salon du Reikoのプレミアムフェイシャル。背中・首肩・デコルテ・お顔・ヘッドをひとつながりで整えます。",
    detail: [
      "ひとつながりで整えることで、深いリラックスと美しさへ導きます。",
      "お肌だけでなく、日頃の疲れや緊張もゆるめる贅沢なご褒美コースです。",
    ],
    forWhom: ["ワンランク上のケアを受けたい", "背中や肩の疲れが気になる", "大切な予定を控えている", "自分へのご褒美時間が欲しい"],
    expect: ["ハリ、ツヤ", "透明感", "すっきりとした印象", "首肩背中の軽さ", "深いリラックス"],
    square: { serviceId: "I7DHVPWT53JD2A43JS6VKEPL" },
  },
  "mens-facial": {
    id: "mens-facial",
    category: "facial",
    name: "MENS ヒト幹細胞フェイシャル",
    subtitle: "第一印象を格上げする肌ケア",
    minutes: 60,
    price: 13500,
    parts: "お顔中心",
    referralOnly: true,
    lead: "男性のお肌に合わせたフェイシャルケア。清潔感や若々しい印象はもちろん、日々の疲れをリフレッシュしたい方にもおすすめです。",
    forWhom: ["疲れて見られやすい", "肌の乾燥が気になる", "第一印象を良くしたい", "身だしなみとして肌を整えたい"],
    expect: ["清潔感アップ", "うるおい", "明るい印象", "リフレッシュ"],
    square: { serviceId: "MN3WZGGCJNKBAHFENRE3MU6R" },
  },
  "body-best": {
    id: "body-best",
    category: "body",
    name: "BODYいいとこどりコース",
    subtitle: "気になるお疲れを集中ケア",
    minutes: 80,
    price: 15800,
    weekdayPrice: 13800,
    parts: "背中・脚（両面）・デコルテ・ヘッド",
    lead: "背中・脚（両面）・デコルテ・ヘッドを中心に、お疲れが溜まりやすい部分をしっかりトリートメント。忙しい毎日の合間に、身体を軽くしたい方へおすすめです。",
    forWhom: ["肩こりや足の疲れが気になる", "全身コースまでは必要ない", "効率よく疲れを取りたい"],
    expect: ["身体の軽さ", "すっきり感", "リフレッシュ", "深いリラックス"],
    square: { serviceId: "F5HDO3NVABVCGC4E4ORVX7NB" },
  },
  "body-happy": {
    id: "body-happy",
    category: "body",
    name: "BODY幸せ全身コース",
    subtitle: "全身をゆるめて深いリラックスへ",
    popular: "BODY人気No.1",
    minutes: 100,
    price: 19800,
    contents: ["GROTTY PRO全身照射", "全身オイルトリートメント", "ヘッドケア"],
    lead: "GROTTY PRO全身照射と全身オイルトリートメントを組み合わせた、Salon du Reikoの人気ボディコースです。頭の先から足先まで心地よく整え、全身を深いリラックスへ導きます。",
    forWhom: ["全身の疲れを感じる", "慢性的な肩こりやだるさがある", "しっかり癒されたい"],
    expect: ["全身の軽さ", "リラックス", "すっきり感", "心身のリフレッシュ"],
    square: { serviceId: "C2RHQCMVOUVZW5SP5FFU2XDN" },
  },
  "head-spa": {
    id: "head-spa",
    category: "head",
    name: "リフトアップ ヒト幹細胞ヘッドスパ",
    subtitle: "頭からほぐして軽やかに",
    minutes: 30,
    price: 6600,
    firstPrice: 5500,
    parts: "頭・首・肩・肩甲骨",
    lead: "頭・首・肩・肩甲骨まで丁寧にケア。頭皮環境を整えながら、スッキリとした軽さへ導きます。",
    forWhom: ["頭が重い", "肩こりが気になる", "目の疲れがある", "リフレッシュしたい"],
    expect: ["頭の軽さ", "リフレッシュ", "スッキリ感", "リラックス"],
    square: { serviceId: "SRRNH3UWDRXJHZLYM6EMDUVV" },
  },
  joka: {
    id: "joka",
    category: "premium",
    name: "浄華（じょうか）コース",
    subtitle: "お肌・身体・心を整える特別な時間",
    minutes: 150,
    price: 33000,
    contents: ["ヒト幹細胞フェイシャル", "全身オイルトリートメント", "ヘッドケア"],
    lead: "ヒト幹細胞美容と深い癒しを融合した、Salon du Reiko最高峰トータルケアコースです。",
    detail: [
      "フェイシャルだけでなく全身オイルトリートメントも行い、お肌・身体・心をトータルで整えます。",
      "日々の疲れやストレスを手放し、本来の美しさと軽やかさを引き出します。",
    ],
    forWhom: ["最近疲れて見られる", "なんとなく元気が出ない", "自分を大切にする時間が欲しい", "特別な癒しを体験したい"],
    expect: ["ハリ、ツヤ", "全身の軽さ", "深いリラックス", "心身のリフレッシュ"],
    square: { serviceId: "QHOOMEB25BW34TBXU5LXCYM5" },
  },
  senju: {
    id: "senju",
    category: "special",
    name: "千手観音トリートメント",
    subtitle: "2人のセラピストによる特別な癒し",
    minutes: 70,
    price: 16500,
    firstLabel: "初回20%OFF（¥13,200）",
    lead: "2人のセラピストが同時に施術する、お日にち限定メニューです。包み込まれるような感覚の中で、心も身体も深くゆるむ「無になる時間」をご体感ください。",
    forWhom: ["とにかく癒されたい", "忙しい毎日を忘れたい", "特別な体験をしたい"],
    expect: ["深いリラックス", "心身の解放感", "癒しの時間", "リフレッシュ"],
    square: { serviceId: "QFDQLNSMTKXGDUP2XUV3GJ6Z" },
  },
}

export const OPTIONS = [
  {
    name: "背中ほぐし",
    minutes: 15,
    price: 3000,
    note: "ヘッドスパにおすすめ。フェイシャルにも追加できます",
    // Square では「オプション 背中トリートメント」として登録されている
    squareName: "オプション 背中トリートメント",
    square: { serviceId: "K6FLXPVV46GEYPATRLXGJY4C" },
  },
]

/** 所要時間の表示。2時間以上は「2時間30分」のように書く */
export const duration = (min: number) =>
  min >= 120 ? `${Math.floor(min / 60)}時間${min % 60 ? `${min % 60}分` : ""}` : `${min}分`

export const yen = (n: number) => `¥${n.toLocaleString("ja-JP")}`

/** 通常価格の表示（下限価格なら「〜」を付ける） */
export const priceText = (m: Menu) => `${yen(m.price)}${m.priceFrom ? "〜" : ""}`

/** 平日価格の表示。なければ undefined */
export const weekdayText = (m: Menu) => (m.weekdayPrice ? `平日限定 ${yen(m.weekdayPrice)}` : undefined)

/** 初回特典の表示。なければ undefined */
export const firstText = (m: Menu) => (m.firstPrice ? `初回 ${yen(m.firstPrice)}` : m.firstLabel)

/** ヘッドスパとオプション以外のコースに付く */
export const GROTTY_NOTE = "ヘッドスパ以外のコースには、導入機器 GROTTY PRO の全身照射が付きます。"

/** どのコースにも付く足のマッサージ */
export const FOOT_NOTE = "どのコースも、施術の前後に足のマッサージが少し付きます。"

/** 初回価格の対象 */
export const FIRST_NOTE = "初回価格は、はじめてご来店の方が対象です。"

export const menusIn = (category: CategoryId, { includeReferral = false } = {}) =>
  Object.values(MENUS).filter((m) => m.category === category && (includeReferral || !m.referralOnly))
