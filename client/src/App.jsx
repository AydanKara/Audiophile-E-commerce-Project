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
import AuthGuard from "./guard/AuthGuard";
import ErrorPage from "./pages/ErrorPage";
import ErrorBoundary from "./components/Error/ErrorBoundary";
import CatalogCategoryPage from "./pages/CatalogCategoryPage";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import { ContactProvider } from "./context/contactContext";

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ContactProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route
              path="/catalog/:categoryTitle"
              element={<CatalogCategoryPage />}
            />
            <Route
              path="/catalog/:productId/details"
              element={<ProductDetailsPage />}
            />

            <Route path="/contact" element={<ContactPage />} />

            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<AuthGuard />}>
              <Route path="/create" element={<CreatePage />} />
              <Route path="/catalog/:productId/edit" element={<EditPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/logout" element={<Logout />} />
            </Route>

            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </ContactProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
