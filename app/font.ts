// app/fonts.ts

import { Pinyon_Script, Noto_Sans_JP } from 'next/font/google';

// ロゴ用のPinyon Scriptフォント
export const pinyon_script = Pinyon_Script({
  subsets: ['latin'],
  weight: '400', // このフォントは太さ400のみ利用可能です
  display: 'swap', // フォント読み込み中のちらつきを抑える
  variable: '--font-pinyon-script', // CSS変数として定義
});

// サイトの基本フォント（例としてNoto Sans JP）
export const notojp = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-noto-jp',
});