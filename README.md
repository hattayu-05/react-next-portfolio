# Read me

# react-next-portfolio

サイトURL: 未デプロイ（ローカルで `npm run dev` を実行）

京都デザイン＆テクノロジー専門学校 ホワイトハッカー専攻の山下悠によるポートフォリオサイト。セキュリティ学習の歩みと制作物を、暖色グラデーションのデザインでまとめました。

## セットアップ（ローカル）

```bash
npm install
npm run dev
```

### 環境変数

`.env.local` に以下を設定してください。

```
MICROCMS_SERVICE_DOMAIN=your-service-id
MICROCMS_API_KEY=your-api-key
MICROCMS_BLOG_ENDPOINT=blog
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_OG_IMAGE_URL=https://your-domain.vercel.app/og.png
```

- microCMSは新規サービスを作成し、ブログ用スキーマを用意してください（推奨フィールド: `title` `body`/`content` `tags` `eyecatch` `publishedAt`）。
- `MICROCMS_BLOG_ENDPOINT` はmicroCMSのAPIエンドポイント名（初期値 `blog`）。
- `NEXT_PUBLIC_SITE_URL` はデプロイ先のURLを入力してください（OGP用）。
- `NEXT_PUBLIC_OG_IMAGE_URL` はシェア用のOGP画像のURLです（任意）。

# 課題の紹介

## TOP

- 「Security × Creativity」を軸にしたヒーローセクションと2CTA（スキル/お問い合わせ導線）。
- ブログの最新トピックをカードで3件ハイライトし、一覧ページへのリンクを配置。
- プロフィールの概要とスキルカード（Python、ネットワーク・Linux、セキュリティ基礎）をグリッドで提示。

## 自己紹介のページ

- プロフィールカードに自己紹介文と抽象背景のビジュアルを添え、人物像を強調。
- 年表形式で専門学校入学を記載し、セキュリティへの取り組みを示す。
- 資格リストをカード表示。

## ブログ一覧ページ

- グリッドカードレイアウトで記事を並べる設計。現在はデータ未投入のため「記事なし」メッセージを表示。
- タグ、日付、抜粋のUIを用意し、今後の投稿追加に対応。
- セクション見出しと説明文で学習記録の趣旨を案内。

## ブログ詳細ページ

- 現時点では未実装。今後、記事詳細のルーティングと本文テンプレートを追加予定。
- 一覧カードから遷移する導線を設計予定。
- タグ・日付・本文・関連リンクを想定した構成で拡張しやすいように準備。

<!-- エントリーページは要件外のため削除 -->

# 一番見てほしいところ

- ヒーローの暖色グラデーションとオブジェクト配置で「熱量」と「安心感」を両立させたビジュアル。
- スキルカードの進捗バーとアイコンで現在の学習状況を直感的に把握できる点。
- 各セクションのリンク導線（ブログ一覧、プロフィール、スキル、お問い合わせ）を明示し、回遊性を高めたナビゲーション。

# 力を入れた点

## 実装面

- Next.js App Router構成でページを分割し、共通レイアウトにヘッダー/フッターを設置。
- TypeScriptとCSS Modulesでスタイルをスコープ化し、コンポーネントごとに責務を明確化。
- お問い合わせフォームで状態管理とバリデーション（必須入力）を実装し、送信後のリセット/アラートを用意。

## デザイン面

- 暖色系グラデーションとアクセントラインで一貫性を持たせつつ、カードシャドウで立体感を付与。
- グリッドレイアウトでレスポンシブ対応し、モバイルでも読みやすい余白とタイポグラフィを調整。

## デプロイ（Vercel想定）

1. GitHubのPublicリポジトリ（react-next-portfolio）をVercelでインポート。
2. 上記環境変数をVercelのProject Settingsに設定。
3. デプロイ後、`NEXT_PUBLIC_SITE_URL` に実ドメインを反映させ、再デプロイ。
4. OGP画像は `NEXT_PUBLIC_SITE_URL` 配下に配置し、必要に応じて `app/layout.tsx` の metadata を差し替え。
