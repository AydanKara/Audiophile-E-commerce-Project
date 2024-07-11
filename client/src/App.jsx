import Header from './components/Layouts/Header/Header';
import Footer from './components/Layouts/Footer/Footer';
import './styles/base.css';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';

function App() {

  return (
    <>
      <Header />
      {/* <HomePage /> */}
      <CatalogPage />
      <Footer />
    </>
  )
}

export default App
