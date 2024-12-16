import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import CreateCorporateList from "../pages/CreateCorporateList/CreateCorporateList";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/corporate-list/create" element={<CreateCorporateList />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;