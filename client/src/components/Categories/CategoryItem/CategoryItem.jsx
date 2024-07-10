import "./CategoryItem.css";

const CategoryItem = () => {
  return (
    <div className="category-cart">
      <div className="category-img-wrapper">
        <img
          className="category-img"
          src="/shared/image-category-thumbnail-headphones.png"
          alt=""
        />
      </div>
      <div className="category-title">
        <h6>Headphones</h6>
        <p className="btn-2">
          <a href="/products/headphones">Shop</a>
          <img src="/shared/icon-arrow-right.svg" alt="icon-arrow-right" />
        </p>
      </div>
    </div>
  );
};

export default CategoryItem;
