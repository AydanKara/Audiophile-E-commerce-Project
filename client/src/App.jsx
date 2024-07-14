import { Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePage from "./pages/CreatePage";
import "./styles/base.css";
import { useState } from "react";
import AuthContext from "./context/authContext";
import * as authService from "./services/authService";

function App() {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);
    console.log(auth);
    navigate("/");
  };
  return (
    <AuthContext.Provider value={{ loginSubmitHandler }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route
          path="/:category/:productId/details"
          element={<ProductDetailsPage />}
        />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
