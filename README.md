# React + TypeScript + Vite
## 使用技術
- Vite: 高速なビルドツール。
- React: ユーザーインターフェースを構築するためのライブラリ
- React Router: 宣言型のルーティングライブラリ
- TypeScript: 型安全な JavaScript
- Material UI: UIライブラリ
- Emotion: CSS in JSスタイリングライブラリ
- Prism: モックサーバー構築ツール
- OpenAPI-TypeScript-CodeGen: SwaggerファイルからAPIモデルと関数を自動生成するライブラリ

## 📂 ディレクトリ構成
#### ※コンポーネントに関しては扱う情報ごとにディレクトリを分ける
#### styleコードが膨大になったら`SideBar.tsx`と`SideBarStyle.tsx`のようにViewと対応するCSS　in JSファイルをセットで格納する

```plaintext
src/
├── api/                 # 自動生成されたAPI用の型とロジック(基本的に編集しない)
├── assets/              # 画像やフォント用などの静的ファイル
├── components/          # UIコンポーネント
├── constants/           # 定数ファイル
├── pages/               # Routerで呼び出すページコンポーネント
├── router/              # React Router設定
├── hooks/               # カスタムフック
├── styles/              # スタイリング
├── utils/               # ユーティリティ関数
├── App.tsx              # アプリケーションコンポーネント
├── main.tsx             # Viteエントリーポイント
├── index.html           # HTMLエントリーポイント
└── design/              # 宗像さんのデザイン実装用ディレクトリ  
```

## ブランチ運用方法
#### featureブランチに関しては画面単位で切り出す
| ブランチ名 | 用途 | マージ先 |
| --- | --- | --- |
| `main` | 本番環境用のブランチ | なし |
| `develop` | 開発用のブランチ | master |
| `feature/*` | 新機能開発用のブランチ | develop |
| `bugfix/*` | バグ修正用のブランチ | develop |
| `hotfix/*` | 緊急修正用のブランチ | develop |

## インストール手順
[開発環境構築マニュアル](https://docs.google.com/spreadsheets/d/1X5qMlt_0mKLG2FQHRtqjRbILLWA3pFve/edit?gid=1179426110#gid=1179426110)から行う

## モックサーバー起動方法
```bash
prism mock ./public/api/swagger.yml
```

## 型生成方法(変更があった場合)
```bash
tsx generate-types.ts
```

## コーディング規約
- 意味のわからな変数名を使用しない
- 拡張を揃える

| **対象**                | **命名規則**              | **例**                              |
|-------------------------|---------------------------|-------------------------------------|
| **コンポーネント名**     | PascalCase               | `UserCard`, `OrderList`            |
| **変数名**              | camelCase                | `userName`, `isLoggedIn`           |
| **関数名**              | camelCase                | `fetchData`, `handleClick`         |
| **Props の型名**         | PascalCase + `Props`     | `UserCardProps`, `ButtonProps`     |
| **ステート変数名**       | camelCase + 状態の意味    | `userName`, `isLoading`            |
| **カスタムフック**       | camelCase + `use` で始める | `useAuth`, `useFetchData`          |
| **Context 名**          | PascalCase + `Context`   | `AuthContext`, `ThemeContext`      |
| **Context プロバイダー**  | PascalCase + `Provider`  | `AuthProvider`, `ThemeProvider`    |
| **定数**                | SCREAMING_SNAKE_CASE     | `API_BASE_URL`, `DEFAULT_TIMEOUT`  |
| **CSS モジュールクラス名** | kebab-case               | `user-card`, `button-primary`      |

