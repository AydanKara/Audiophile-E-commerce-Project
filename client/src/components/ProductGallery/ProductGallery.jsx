import "./ProductGallery.css"

const ProductGallery = () => {
  return (
    <ul id="product-gallery">
      <li className="first">
        <img
          src="/categories/products/image-gallery-1.jpg"
          alt="First image from gallery"
        />
      </li>
      <li className="second">
        <img
          src="/categories/products/image-gallery-2.jpg"
          alt="Second image from gallery"
        />
      </li>
      <li className="third">
        <img
          src="/categories/products/image-gallery-3.jpg"
          alt="Third image from gallery"
        />
      </li>
    </ul>
  );
};

export default ProductGallery;
