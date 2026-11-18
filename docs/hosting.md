# ホスティングメモ

このサイトは Cloudflare Pages でホスティングしています。main ブランチへの push で自動デプロイされます。

- ビルドコマンド: npm run build
- 出力ディレクトリ: out
- Node バージョン: 20（環境変数 NODE_VERSION）

## CI/CD

ブランチは `develop`（開発）と `main`（本番）の2本。ステージング環境は置かない。普段の作業は `develop` で行い、本番に出すときに `develop` → `main` の PR をマージする。

- CI: GitHub Actions（`.github/workflows/ci.yml`）。main / develop への push と PR で `npm ci` → `npm run typecheck` → `npm run build` を実行し、`out/` を成果物として7日間保存する。
- CD: Cloudflare Pages の Git 連携が main への push を検知して本番へデプロイする。PR ブランチにはプレビュー URL が付く。
- 型エラーのある変更を本番へ出さないため、GitHub のブランチ保護で main への直接 push を禁止し、CI の `build` ジョブを必須チェックにする。
