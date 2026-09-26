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

export const CATEGORIES: { id: CategoryId; en: string; ja: string; badge?: string }[] = [
  { id: "facial", en: "Facial", ja: "フェイシャル", badge: "人気No.1" },
  { id: "body", en: "Body", ja: "ボディ", badge: "人気No.1" },
  { id: "head", en: "Head Spa", ja: "ヘッドスパ" },
  { id: "premium", en: "Premium", ja: "最高峰トータルケア" },
  { id: "special", en: "Special", ja: "お日にち限定", badge: "日にち限定" },
]

export type MenuId =
  | "stem-facial"
  | "stem-facial-back"
  | "mens-facial"
  | "body-best"
  | "body-happy"
  | "body-weekday"
  | "head-spa"
  | "senju"
  | "joka"

export type Menu = {
  id: MenuId
  category: CategoryId
  name: string
  minutes: number
  price: number
  /** 「16,500円〜」のように下限価格のとき */
  priceFrom?: boolean
  firstPrice?: number
  /** 金額ではなく割引率で初回特典があるとき */
  firstLabel?: string
  /** 知り合い・ご紹介の方のみ。トップや診断では出さない */
  referralOnly?: boolean
  /** 施術範囲 */
  parts?: string
  note?: string
  lead: string
  forWhom: string[]
  /** Square の予約ページのサービスID。first は初回用に別で登録されているもの */
  square?: { serviceId: string; firstServiceId?: string }
}

export const MENUS: Record<MenuId, Menu> = {
  "stem-facial": {
    id: "stem-facial",
    category: "facial",
    name: "ヒト幹細胞フェイシャル",
    minutes: 90,
    price: 16500,
    firstPrice: 9900,
    parts: "GROTTY PRO 全身照射 ＋ お顔・首肩・デコルテ・ヘッド",
    lead: "いちばん人気のメニュー。GROTTY PRO とヒト幹細胞培養上清液で、お顔から首肩・デコルテ・ヘッドまでケアします。",
    forWhom: ["ハリ不足やくすみが気になる", "化粧ノリを変えたい", "はじめてのヒト幹細胞"],
    square: { serviceId: "JXD6HBHS7C3UZ2FFDPYGHE4E", firstServiceId: "64Z4L4JC36FVPKF2IQW522DA" },
  },
  "stem-facial-back": {
    id: "stem-facial-back",
    category: "facial",
    name: "贅沢ヒト幹細胞フェイシャル＋背中",
    minutes: 110,
    price: 25000,
    parts: "GROTTY PRO 全身照射 ＋ 背中・お顔・首肩・デコルテ・ヘッド",
    note: "冷凍ヒト幹細胞培養上清液使用",
    lead: "冷凍ヒト幹細胞培養上清液を使う特別コース。お顔に加えて背中までゆっくりケアします。",
    forWhom: ["特別な日の前に", "背中のこりも気になる", "自分へのご褒美に"],
    square: { serviceId: "I7DHVPWT53JD2A43JS6VKEPL" },
  },
  "mens-facial": {
    id: "mens-facial",
    category: "facial",
    name: "MENS ヒト幹細胞フェイシャル",
    minutes: 60,
    price: 13500,
    parts: "GROTTY PRO 全身照射 ＋ お顔中心",
    referralOnly: true,
    lead: "男性のためのヒト幹細胞フェイシャル。お知り合い・ご紹介の方のみ承っています。",
    forWhom: ["男性の方", "肌の乾燥やくすみが気になる"],
    square: { serviceId: "MN3WZGGCJNKBAHFENRE3MU6R" },
  },
  "body-best": {
    id: "body-best",
    category: "body",
    name: "BODYいいとこどりコース",
    minutes: 80,
    price: 11000,
    parts: "GROTTY PRO 全身照射 ＋ 背中・フット（両面）・デコルテ・ヘッド",
    lead: "背中から脚、デコルテ、ヘッドまで、疲れがたまりやすいところをまとめてほぐします。",
    forWhom: ["全身がなんとなく重い", "脚のむくみが気になる"],
    square: { serviceId: "F5HDO3NVABVCGC4E4ORVX7NB" },
  },
  "body-happy": {
    id: "body-happy",
    category: "body",
    name: "BODY幸せ全身コース",
    minutes: 100,
    price: 15800,
    parts: "GROTTY PRO 全身照射 ＋ 全身オイルトリートメント ＋ ヘッド",
    lead: "近赤外線と音響振動の機器 GROTTY PRO の全身照射のあと、全身オイルトリートメントとヘッドで仕上げます。",
    forWhom: ["冷えやこりがつらい", "しっかり時間をかけて癒されたい"],
    square: { serviceId: "C2RHQCMVOUVZW5SP5FFU2XDN" },
  },
  "body-weekday": {
    id: "body-weekday",
    category: "body",
    name: "BODY平日限定コース",
    minutes: 90,
    price: 12800,
    parts: "GROTTY PRO 全身照射 ＋ 全身オイルトリートメント ＋ ヘッド",
    lead: "GROTTY PRO を全身に照射し、全身をオイルトリートメントでほぐして、最後にヘッドで仕上げる平日だけのお得なコースです。",
    forWhom: ["平日にお休みがある"],
    square: { serviceId: "EC6Q4FJRWALHGGP7Z66NDWVW" },
  },
  "head-spa": {
    id: "head-spa",
    category: "head",
    name: "リフトアップ ヒト幹細胞ヘッドスパ",
    minutes: 30,
    price: 6600,
    firstPrice: 5500,
    parts: "頭・首・肩・肩甲骨まで",
    lead: "ヒト幹細胞を使ったヘッドスパ。頭から首・肩・肩甲骨までを30分でほぐします。",
    forWhom: ["頭や首肩がこっている", "短い時間で受けたい", "まずは気軽に試したい"],
    square: { serviceId: "SRRNH3UWDRXJHZLYM6EMDUVV" },
  },
  senju: {
    id: "senju",
    category: "special",
    name: "千手観音トリートメント",
    minutes: 70,
    price: 16500,
    priceFrom: true,
    firstLabel: "初回20%OFF",
    parts: "GROTTY PRO 全身照射 ＋ 2人のセラピストが同時に施術",
    lead: "2人のセラピストが同時に施術する、お日にち限定の特別なトリートメントです。",
    forWhom: ["特別な癒しを体験したい", "記念日やご褒美に"],
    square: { serviceId: "QFDQLNSMTKXGDUP2XUV3GJ6Z" },
  },
  joka: {
    id: "joka",
    category: "premium",
    name: "浄華（じょうか）コース",
    // Square に登録されている所要時間（3時間30分）
    minutes: 210,
    price: 33000,
    parts: "GROTTY PRO 全身照射 ＋ ヒト幹細胞フェイシャル ＋ 全身オイルトリートメント",
    lead: "ヒト幹細胞美容と深い癒しを合わせた、Salon du Reiko 最高峰のトータルケアです。お顔だけでなく、全身オイルトリートメントまで丁寧にケアします。",
    forWhom: ["最近疲れて見られる", "なんとなく元気が出ない", "特別なご褒美時間が欲しい"],
    square: { serviceId: "QHOOMEB25BW34TBXU5LXCYM5" },
  },
}

export const OPTIONS = [
  {
    name: "背中ほぐし",
    minutes: 15,
    price: 3000,
    note: "フェイシャル・ヘッドスパに追加できます",
    // Square では「オプション 背中トリートメント」として登録されている
    squareName: "オプション 背中トリートメント",
    square: { serviceId: "K6FLXPVV46GEYPATRLXGJY4C" },
  },
]

/** 所要時間の表示。3時間以上は「3時間30分」のように書く */
export const duration = (min: number) =>
  min >= 180 ? `${Math.floor(min / 60)}時間${min % 60 ? `${min % 60}分` : ""}` : `${min}分`

export const yen = (n: number) => `¥${n.toLocaleString("ja-JP")}`

/** 通常価格の表示（下限価格なら「〜」を付ける） */
export const priceText = (m: Menu) => `${yen(m.price)}${m.priceFrom ? "〜" : ""}`

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
