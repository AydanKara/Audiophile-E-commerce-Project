import { useNavigate } from "react-router-dom";
import * as productService from "../services/productService";
import useCreateForm from "../hooks/useCreateForm";

const CreatePage = () => {
  const navigate = useNavigate();
  const { values, errors, serverError, onChange, onSubmit } =
    useCreateForm(async (productData) => {
      try {
        await productService.create(productData);
        navigate("/catalog");
      } catch (error) {
        console.error("Error creating product:", error);
        throw new Error(error.message || "An error occurred while creating the product");
      }
    });

  return (
    <>
      <div className="site-heading">
        <h1 className="heading-title">Create new Product</h1>
      </div>
      {serverError && (
        <div className="alert">
          <h2>{serverError}</h2>
        </div>
      )}
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="category">Category</label>
          {errors.category && <span className="error">{errors.category}</span>}
          <select
            name="category"
            value={values?.category}
            onChange={onChange}
            id="category"
            className={errors.category ? "error-input" : ""}
          >
            <option value="">Please select category</option>
            <option value="Headphones">Headphones</option>
            <option value="Earphones">Earphones</option>
            <option value="Speakers">Speakers</option>
          </select>
        </p>
        <p>
          <label htmlFor="name">Title</label>
          {errors.name && <span className="error">{errors.name}</span>}
          <input
            type="text"
            name="name"
            id="name"
            onChange={onChange}
            value={values?.name}
            className={errors.name ? "error-input" : ""}
          />
        </p>
        <p>
          <label htmlFor="image">Image</label>
          {errors.image && <span className="error">{errors.image}</span>}
          <input
            type="text"
            name="image"
            id="image"
            onChange={onChange}
            value={values?.image}
            className={errors.image ? "error-input" : ""}
          />
        </p>
        <p>
          <label htmlFor="price">Price</label>
          {errors.price && <span className="error">{errors.price}</span>}
          <input
            type="number"
            name="price"
            id="price"
            onChange={onChange}
            value={values?.price}
            className={errors.price ? "error-input" : ""}
          />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          {errors.description && (
            <span className="error">{errors.description}</span>
          )}
          <textarea
            name="description"
            id="description"
            onChange={onChange}
            value={values?.description}
            className={errors.description ? "error-input" : ""}
          ></textarea>
        </p>
        <p>
          <label htmlFor="features">Features</label>
          {errors.features && <span className="error">{errors.features}</span>}
          <textarea
            name="features"
            id="features"
            onChange={onChange}
            value={values?.features}
            className={errors.features ? "error-input" : ""}
          ></textarea>
        </p>
        <button className="btn-1">Create Product</button>
      </form>
    </>
  );
};

export default CreatePage;
