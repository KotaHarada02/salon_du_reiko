# ホスティングメモ

このサイトは Cloudflare Pages でホスティングしています。main ブランチへの push で自動デプロイされます。

- ビルドコマンド: npm run build
- 出力ディレクトリ: out
- Node バージョン: 20（環境変数 NODE_VERSION）

## CI/CD

- CI: GitHub Actions（`.github/workflows/ci.yml`）。main への push と main 向け PR で `npm ci` → `npm run typecheck` → `npm run build` を実行し、`out/` を成果物として7日間保存する。
- CD: Cloudflare Pages の Git 連携が main への push を検知して本番へデプロイする。PR ブランチにはプレビュー URL が付く。
- 型エラーのある変更を本番へ出さないため、GitHub のブランチ保護で main への直接 push を禁止し、CI の `build` ジョブを必須チェックにする。
