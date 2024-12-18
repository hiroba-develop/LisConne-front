import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "../constants/routes";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ResetPasswordRequest from "../pages/ResetPasswordRequest/ResetPasswordRequest";
import ResetPasswordConfirm from "../pages/ResetPasswordConfirm/ResetPasswordConfirm";
import OrdersImport from "../pages/OrdersImport/OrdersImport";
import OrdersAnalytics from "../pages/OrdersAnalytics/OrdersAnalytics";
import OrdersAnalyticsDetail from "../pages/OrdersAnalyticsDetail/OrdersAnalyticsDetail";
import CorporateList from "../pages/CorporateList/CorporateList";
import CorporateListCreat from "../pages/CorporateListCreate/CorporateListCreate";
import CorporateListDetail from "../pages/CorporateListDetail/CorporateListDetail";
import CorporateDetail from "../pages/CorporateDetail/CorporateDetail";
import OptOut from "../pages/OptOut/OptOut";
import Messages from "../pages/Messages/Messages";
import FormManagement from "../pages/FormManagement/FormManagement";
import FormCreate from "../pages/FormCreate/FormCreate";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.RESET_PASSWORD_REQUEST} element={<ResetPasswordRequest />} />
        <Route path={routes.RESET_PASSWORD_CONFIRM} element={<ResetPasswordConfirm />} />
        <Route path={routes.ORDERS_IMPORT} element={<OrdersImport />} />
        <Route path={routes.ORDERS_ANALYTICS} element={<OrdersAnalytics />} />
        <Route path={routes.ORDERS_ANALYTICS_DETAIL} element={<OrdersAnalyticsDetail />} />
        <Route path={routes.CORPORATE_LIST} element={<CorporateList />} />
        <Route path={routes.CORPORATE_LIST_CREATE} element={<CorporateListCreat />} />
        <Route path={routes.CORPORATE_LIST_DETAIL} element={<CorporateListDetail />} />
        <Route path={routes.CORPORATE_DETAIL} element={<CorporateDetail />} />
        <Route path={routes.OPT_OUT} element={<OptOut />} />
        <Route path={routes.MESSAGES} element={<Messages />} />
        <Route path={routes.FORM_MANAGEMENT} element={<FormManagement />} />
        <Route path={routes.FORM_CREATE} element={<FormCreate />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;