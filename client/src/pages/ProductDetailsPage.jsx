import { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as productService from "../services/productService";
import * as commentService from "../services/commentService";
import Categories from "../components/Categories/Categories";
import ShopInfo from "../components/Layouts/ShopInfo/ShopInfo";
import ProductGallery from "../components/ProductGallery/ProductGallery";
import ProductOthers from "../components/ProductOthers/ProductOthers";
import "../styles/product-details.css";
import AuthContext from "../context/authContext";
import CommentList from "../components/CommentList/CommentList";
import CommentForm from "../components/CommentForm/CommentForm";
import reducer from "../reducers/commentReducer";
import useForm from "../hooks/useForm";

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const { userId, isAuthenticated, username } = useContext(AuthContext);

  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [comments, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    productService.getOne(productId).then(setProduct);
    commentService.getProductsComments(productId).then((result) => {
      dispatch({
        type: "GET_ALL_COMMENTS",
        payload: result,
      });
    });
  }, [productId]);

  const addCommentHandler = async (values) => {
    const newComment = await commentService.create(
      productId,
      username,
      values.comment
    );

    dispatch({
      type: "ADD_COMMENT",
      payload: newComment,
    });

    resetForm();
  };

  const { values, onChange, onSubmit, resetForm } = useForm(addCommentHandler, {
    comment: "",
  });

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
          <button className="btn-back go-back">Go Back</button>
          <div className="product-list">
            <div className="product-item">
              <article>
                <ul className="product-wrapper">
                  <li className="col-1">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                  </li>
                  <li className="col-2">
                    <div className="product-info">
                      <h2>{product.name}</h2>
                      <p className="product-desc">{product.description}</p>
                      <h6>$ {product.price}</h6>

                      {userId === product._ownerId && (
                        <div className="product-action">
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
                <ul className="product-details">
                  <li className="features">
                    <h3>Features</h3>
                    <p>{product.features}</p>
                  </li>
                  <li className="comment-write">
                    <h3>write a comment:</h3>
                    {isAuthenticated ? (
                      <CommentForm
                        onSubmit={onSubmit}
                        onChange={onChange}
                        values={values}
                      />
                    ) : (
                      <p className="not-logged">
                        You must be logged in to be able to write a comment.
                      </p>
                    )}
                  </li>
                </ul>
              </article>
              <h5>Comments:</h5>
              <CommentList comments={comments} />
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
