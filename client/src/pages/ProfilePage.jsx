import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import AuthContext from "../context/authContext";
import * as cartService from "../services/cartService";
import * as likeService from "../services/likeService";
import * as productService from "../services/productService";
import "../styles/profile-page.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const getSliderSettings = (items) => ({
    dots: true,
    infinite: items.length > 3,
    speed: 500,
    slidesToShow: Math.min(3, items.length),
    slidesToScroll: 3,
    initialSlide: 0,
    appendDots: (dots) => (
      <div style={{ position: "relative" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  });

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
              <Slider {...getSliderSettings(cartItems)}>
                {cartItems.map((item) => (
                  <div key={item._id} className="profile-products-item">
                    <div className="profile-products-media">
                      <img src={item.image} alt="Product Image" />
                    </div>
                    <h5>{item.name}</h5>
                    <Link to={`/catalog/${item._id}/details`} className="btn-1">
                      See Product
                    </Link>
                  </div>
                ))}
              </Slider>
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
          <div className="profile-products">
            <h3>Liked Products</h3>
            {likedItems.length > 0 ? (
              <Slider {...getSliderSettings(likedItems)}>
              {likedItems.map((item) => (
                <div key={item._id} className="profile-products-item">
                  <div className="profile-products-media">
                    <img src={item.image} alt="Product Image" />
                  </div>
                  <h5>{item.name}</h5>
                  <Link to={`/catalog/${item._id}/details`} className="btn-1">
                    See Product
                  </Link>
                </div>
              ))}
            </Slider>
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
