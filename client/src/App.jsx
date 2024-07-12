import Header from "./components/Layouts/Header/Header";
import Footer from "./components/Layouts/Footer/Footer";
import "./styles/base.css";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePage from "./pages/CreatePage";

function App() {
  return (
    <>
      <Header />
      {/* <HomePage /> */}
      {/*  <CatalogPage /> */}
      {/* <ProductDetailsPage /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <CreatePage />
      <Footer />
    </>
  );
}

export default App;
