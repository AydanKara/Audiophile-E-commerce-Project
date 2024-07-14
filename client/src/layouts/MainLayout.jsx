/* eslint-disable react/prop-types */
import Footer from "../components/Layouts/Footer/Footer";
import Header from "../components/Layouts/Header/Header";

const MainLayout = ({ children }) => {
  
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
