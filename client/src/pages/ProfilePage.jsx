import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/authContext";
import * as cartService from "../services/cartService";
import * as likeService from "../services/likeService";
import * as productService from "../services/productService";
import "../styles/profile-page.css";

const ProfilePage = () => {
  const { userId, isAuthenticated, username } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (isAuthenticated) {
        try {
          // Fetch cart items
          const cartItems = await cartService.getCartItems(userId);
          const cartProductDetails = await Promise.all(
            cartItems.map((item) => productService.getOne(item.productId))
          );
          setCartItems(cartProductDetails);

          // Fetch liked items
          const likes = await likeService.getUserLikes(userId);
          const likedProductDetails = await Promise.all(
            likes.map((like) => productService.getOne(like.productId))
          );
          setLikedItems(likedProductDetails);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, [userId, isAuthenticated]);

  if (!isAuthenticated) {
    return <p>You must be logged in to view your profile.</p>;
  }

  return (
    <main>
      <div className="site-heading">
        <h1 className="heading-title">{username}`s Profile</h1>
      </div>
      <section className="container">
        <div className="profile-section-wrapper">
          <div className="profile-products">
            <h3>Products in Cart</h3>
            {cartItems.length > 0 ? (
              <ul className="profile-products-list">
                {cartItems.map((item) => (
                  <li key={item._id} className="profile-products-item">
                    <div className="profile-products-media">
                      <img src={item.image} alt="Product Image" />
                    </div>
                    <h5>{item.name}</h5>
                    <Link to={`/catalog/${item._id}`} className="btn-1">
                      See Product
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
          <div className="profile-products">
            <h3>Liked Products</h3>
            {likedItems.length > 0 ? (
              <ul className="profile-products-list">
                {likedItems.map((item) => (
                  <li key={item._id} className="profile-products-item">
                  <div className="profile-products-media">
                    <img src={item.image} alt="Product Image" />
                  </div>
                  <h5>{item.name}</h5>
                  <Link to={`/catalog/${item._id}`} className="btn-1">
                    See Product
                  </Link>
                </li>
                ))}
              </ul>
            ) : (
              <p>You haven`t liked any products yet.</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
