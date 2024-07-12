import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MainLayout>
    <App />
  </MainLayout>
);
