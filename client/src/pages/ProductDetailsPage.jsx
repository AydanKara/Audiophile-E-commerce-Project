import Categories from "../components/Categories/Categories";
import ShopInfo from "../components/Layouts/ShopInfo/ShopInfo";
import ProductGallery from "../components/ProductGallery/ProductGallery";
import ProductOthers from "../components/ProductOthers/ProductOthers";
import "../styles/product-details.css"

const ProductDetailsPage = () => {
  return (
    <main>
      <section className="container">
        <div className="products-wrapper">
          <button id="go-back" className="btn-back">
            Go Back
          </button>
          <div className="product-list">
            <div className="product-item">
              <article>
                <ul className="product-wrapper">
                  <li className="col-1">
                    <div className="product-image">
                      <img
                        src="/categories/products/image-product.jpg"
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="col-2">
                    <div className="product-info">
                      <h2>XX99 MARK II HEADPHONES</h2>
                      <p className="product-desc">
                        The new XX99 Mark II headphones is the pinnacle of
                        pristine audio. It redefines your premium headphone
                        experience by reproducing the balanced depth and
                        precision of studio-quality sound.
                      </p>
                      <h6>$ 2,999</h6>
                      <div id="product-action">
                        <div id="product-quantity">
                          <span id="minus">-</span>
                          <span id="quantity">1</span>
                          <span id="plus">+</span>
                        </div>
                        <button className="btn-1">Add to cart</button>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul id="product-details">
                  <li id="features">
                    <h3>Features</h3>
                    <p>
                      Featuring a genuine leather head strap and premium
                      earcups, these headphones deliver superior comfort for
                      those who like to enjoy endless listening. It includes
                      intuitive controls designed for any situation. Whether
                      you’re taking a business call or just in your own personal
                      space, the auto on/off and pause features ensure that
                      you’ll never miss a beat. The advanced Active Noise
                      Cancellation with built-in equalizer allow you to
                      experience your audio world on your terms. It lets you
                      enjoy your audio in peace, but quickly interact with your
                      surroundings when you need to. Combined with Bluetooth 5.
                      0 compliant connectivity and 17 hour battery life, the
                      XX99 Mark II headphones gives you superior sound,
                      cutting-edge technology, and a modern design aesthetic.
                    </p>
                  </li>
                  <li id="in-the-box">
                    <h3>In The Box</h3>
                    <ul id="product-includes">
                      {/* <% for (const include of product.includes) { %> */}
                      <li className="include-item">
                        <span>1x</span>
                        <p>Headphone unit</p>
                      </li>
                      <li className="include-item">
                        <span>1x</span>
                        <p>Headphone unit</p>
                      </li>
                      <li className="include-item">
                        <span>1x</span>
                        <p>Headphone unit</p>
                      </li>
                      {/* <% } %> */}
                    </ul>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <ProductGallery />
      </section>
      <section className="container">
        <ProductOthers />
      </section>
      <section className="products-categories">
        <div className="container">
          <Categories />
        </div>
      </section>
      <ShopInfo />
    </main>
  );
};

export default ProductDetailsPage;
