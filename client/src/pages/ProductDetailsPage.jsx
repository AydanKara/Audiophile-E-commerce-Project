import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as productService from "../services/productService";
import Categories from "../components/Categories/Categories";
import ShopInfo from "../components/Layouts/ShopInfo/ShopInfo";
import ProductGallery from "../components/ProductGallery/ProductGallery";
import ProductOthers from "../components/ProductOthers/ProductOthers";
import "../styles/product-details.css";
import AuthContext from "../context/authContext";

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const { userId } = useContext(AuthContext);

  const { productId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    productService.getOne(productId).then(setProduct);
  }, [productId]);

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(
      `Are you sure you want to delete ${product.name}`
    );

    if (hasConfirmed) {
      await productService.remove(productId);

      navigate("/catalog");
    }
  };
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
                      <img src={product.image} alt="" />
                    </div>
                  </li>
                  <li className="col-2">
                    <div className="product-info">
                      <h2>{product.name}</h2>
                      <p className="product-desc">{product.description}</p>
                      <h6>$ {product.price}</h6>

                      {userId === product._ownerId && (
                        <div id="product-action">
                          <Link
                            to={`/catalog/${productId}/edit`}
                            className="btn-1"
                          >
                            Edit
                          </Link>
                          <button
                            className="btn-1"
                            onClick={deleteButtonClickHandler}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  </li>
                </ul>
                <ul id="product-details">
                  <li id="features">
                    <h3>Features</h3>
                    <p>{product.features}</p>
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
