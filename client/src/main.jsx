import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <MainLayout>
      <App />
    </MainLayout>
  </BrowserRouter>
);
