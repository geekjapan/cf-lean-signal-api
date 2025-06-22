# lean-signal-api

Lean のアルゴリズムから送られるトレードシグナルを受信し、Workers KV に保存する Cloudflare Worker です。保存されたシグナルは MT5 などのクライアントから取得できます。

## API エンドポイント

- `POST /` : 新しいシグナルを KV に保存します。リクエストボディには JSON 形式のシグナルを送信してください。
- `GET /` : 保存されている最新のシグナルを返します。シグナルが無い場合は空の `{}` を返します。

## ローカルでの実行

1. [Wrangler](https://developers.cloudflare.com/workers/wrangler/) をインストールします。
2. 以下のコマンドで開発用サーバーを起動できます。

```bash
wrangler dev
```

## デプロイ

Cloudflare アカウントを設定した後、次のコマンドでデプロイ可能です。

```bash
wrangler publish
```

シグナル保存用の KV 名前空間 `SIGNALS` を wrangler.toml でバインドしておく必要があります。
