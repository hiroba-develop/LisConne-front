FROM node:20.9.0

# 作業ディレクトリの設定
WORKDIR /app

# パッケージファイルのコピーとインストール
COPY package*.json ./
RUN npm install

# ソースコードのコピー
COPY . .

# ポートの公開
EXPOSE 5173

# 開発サーバーの起動
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
