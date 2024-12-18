import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "../../components/ExampleButton/ExampleButton";
import ROUTES from "../../constants/routes";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div>
      <h1>ホーム
      </h1>
      <p>各ページに遷移して動作を確認するページです</p>
      <Link to={ROUTES.LOGIN} className="btn"><CustomButton label="ログイン" /></Link>
      <Link to={ROUTES.RESET_PASSWORD_REQUEST} className="btn"><CustomButton label="パスワード再発行リクエスト画面" /></Link>
      <Link to={ROUTES.RESET_PASSWORD_CONFIRM} className="btn"><CustomButton label="パスワード再発行確認画面" /></Link>
      <Link to={ROUTES.ORDERS_IMPORT} className="btn"><CustomButton label="受注データ取り込み画面" /></Link>
      <Link to={ROUTES.ORDERS_ANALYTICS} className="btn"><CustomButton label="受注データ分析画面" /></Link>
      <Link to={ROUTES.ORDERS_ANALYTICS_DETAIL} className="btn"><CustomButton label="受注データ分析詳細画面" /></Link>
      <Link to={ROUTES.CORPORATE_LIST} className="btn"><CustomButton label="企業リスト一覧画面" /></Link>
      <Link to={ROUTES.CORPORATE_LIST_CREATE} className="btn"><CustomButton label="企業リスト作成画面" /></Link>
      <Link to={ROUTES.CORPORATE_LIST_DETAIL} className="btn"><CustomButton label="企業リスト詳細画面" /></Link>
      <Link to={ROUTES.CORPORATE_DETAIL} className="btn"><CustomButton label="企業詳細画面" /></Link>
      <Link to={ROUTES.OPT_OUT} className="btn"><CustomButton label="オプトアウト管理画面" /></Link>
      <Link to={ROUTES.MESSAGES} className="btn"><CustomButton label="送信文言管理画面" /></Link>
      <Link to={ROUTES.FORM_MANAGEMENT} className="btn"><CustomButton label="フォーム送信画面" /></Link>
      <Link to={ROUTES.FORM_CREATE} className="btn"><CustomButton label="フォーム送信準備画面" /></Link>
    </div>
  );
};

export default Home;