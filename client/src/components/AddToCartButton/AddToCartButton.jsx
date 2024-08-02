/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/authContext";
import * as cartService from "../../services/cartService";

const AddToCartButton = ({ productId, productOwnerId }) => {
  const { userId, isAuthenticated } = useContext(AuthContext);
  const [isInCart, setIsInCart] = useState(false);
  const [cartItemId, setCartItemId] = useState(null);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (isAuthenticated) {
        try {
          const cartItems = await cartService.getCartItems(userId);
          const item = cartItems.find((item) => item.productId === productId);
          if (item) {
            setIsInCart(true);
            setCartItemId(item._id);
          }
        } catch (error) {
          console.error("Error fetching cart items:", error);
        }
      }
    };

    fetchCartItems();
  }, [productId, isAuthenticated, userId]);

  const handleAddToCart = async () => {
    try {
      if (isInCart) return;

      const cartItem = await cartService.addToCart(productId, userId);
      setIsInCart(true);
      setCartItemId(cartItem._id);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleRemoveFromCart = async () => {
    try {
      if (!isInCart) return;

      await cartService.removeFromCart(cartItemId);
      setIsInCart(false);
      setCartItemId(null);
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  };

  if (!isAuthenticated || userId === productOwnerId) {
    return null;
  }

  return (
    <button
      onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
      className="btn-1"
    >
      {isInCart ? "Remove from Cart" : "Add to Cart"}
    </button>
  );
};

export default AddToCartButton;
