const ROUTES = {
  HOME: '/', // ホーム画面
  LOGIN: '/login', // ログイン画面
  RESET_PASSWORD_REQUEST: '/reset-password/request', // パスワード再発行リクエスト画面
  RESET_PASSWORD_CONFIRM: '/reset-password/confirm', // パスワード再発行確認画面
  ORDERS_IMPORT: '/orders/import', // 受注データ取り込み画面  
  ORDERS_ANALYTICS: '/orders/analytics', // 受注データ分析画面
  ORDERS_ANALYTICS_DETAIL: '/orders/analytics/details', // 受注データ分析詳細画面
  CORPORATE_LIST: '/corporate-list', // 企業リスト一覧画面
  CORPORATE_LIST_CREATE: '/corporate-list/create', // 企業リスト作成画面
  CORPORATE_LIST_DETAIL: '/corporate-list/:listId', // 企業リスト詳細画面（リストIDを指定）
  CORPORATE_DETAIL: '/corporate/detail', // 企業詳細画面（企業IDを指定）
  OPT_OUT: '/opt-out', // オプトアウト管理画面
  MESSAGES: '/messages', // メッセージ管理画面
  FORM_MANAGEMENT: '/form/management', // フォーム管理画面
  FORM_CREATE: '/form/create', // フォーム作成画面

  // パスパラメータを含む場合は、関数を返す
  PROFILE: (userId: string) => `/profile/${userId}`, // 動的なパス
};

export default ROUTES;