import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePage from "./pages/CreatePage";
import "./styles/base.css";
import { AuthProvider } from "./context/authContext";
import Header from "./components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import Logout from "./components/Logout/Logout";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route
          path="/catalog/:productId/details"
          element={<ProductDetailsPage />}
        />
        <Route path="/catalog/:productId/edit" element={<EditPage />} />

        <Route path="/create" element={<CreatePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
