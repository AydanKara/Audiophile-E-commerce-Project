/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/authContext";
import * as likeService from "../../services/likeService";

const LikeButton = ({ productId, productOwnerId }) => {
  const { userId, isAuthenticated } = useContext(AuthContext);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    const fetchLikes = async () => {
      try {
        const fetchedLikes = await likeService.getLikes(productId);
        setLikes(fetchedLikes);

        if (isAuthenticated) {
          const userLikes = await likeService.checkUserLike(productId, userId);
          setHasLiked(userLikes.length > 0);
        }
      } catch (error) {
        console.error("Error fetching likes:", error);
      }
    };

    fetchLikes();
  }, [productId, isAuthenticated, userId]);

  const handleLike = async () => {
    try {
      if (hasLiked) return;

      await likeService.createLike(productId, userId);
      setHasLiked(true);
      setLikes((prevLikes) => [...prevLikes, { productId, userId }]);
    } catch (error) {
      console.error("Error liking product:", error);
    }
  };

  if (!isAuthenticated || userId === productOwnerId) {
    return null;
  }

  return (
    <button
      onClick={handleLike}
      disabled={hasLiked}
      className={hasLiked ? "btn-1 btn-alt-3" : "btn-1"}
      style={{ cursor: hasLiked && "not-allowed"}}
    >
      {hasLiked ? "You have already Liked this product" : "Like"}
    </button>
  );
};

export default LikeButton;
