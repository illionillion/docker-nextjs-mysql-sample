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

# デフォルトのポート番号を指定
EXPOSE 3000

# コンテナ内で実行するコマンド
CMD ["npm", "run", "dev"]
