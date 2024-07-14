import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePage from "./pages/CreatePage";
import "./styles/base.css";
import AuthContext from "./context/authContext";

function App() {
  

  const loginSubmitHandler = (values) => {
    console.log(values);
  };
  return (
    <AuthContext.Provider value={{loginSubmitHandler}}>
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
