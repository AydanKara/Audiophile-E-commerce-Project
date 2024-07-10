import Categories from "../components/Categories/Categories";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import Hero from "../components/Hero/Hero";
import "../styles/home.css";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
    </main>
  );
};

export default HomePage;
