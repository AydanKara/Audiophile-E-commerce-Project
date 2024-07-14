import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as productService from "../services/productService";
import Categories from "../components/Categories/Categories";
import ShopInfo from "../components/Layouts/ShopInfo/ShopInfo";
import ProductGallery from "../components/ProductGallery/ProductGallery";
import ProductOthers from "../components/ProductOthers/ProductOthers";
import "../styles/product-details.css";

const ProductDetailsPage = () => {
  const { category, productId } = useParams();
  console.log(category, productId);
  const [product, setProduct] = useState({});

  useEffect(() => {
    productService.getOne(category, productId).then(setProduct);
  }, [category, productId]);

  console.log(product)
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
                        src={product.image}
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="col-2">
                    <div className="product-info">
                      <h2>{product.name}</h2>
                      <p className="product-desc">
                        {product.description}
                      </p>
                      <h6>$ {product.price}</h6>
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
                      {product.features}
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
