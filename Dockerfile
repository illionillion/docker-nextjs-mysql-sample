# ベースイメージの設定
FROM node:18

# 作業ディレクトリの設定
WORKDIR /app

# パッケージファイルのコピー
COPY package*.json ./

# 依存パッケージのインストール
RUN npm install

# ソースコードのコピー
COPY . .

# アプリケーションのビルド
# RUN npm run build

# デフォルトのポート番号（フロントエンド側は3000、バックエンド側は5000）を指定
EXPOSE 3000 5000

# コンテナ内で実行するコマンド
CMD ["npm", "run", "dev"]
