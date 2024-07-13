import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as productService from "../services/productService";

const CreatePage = () => {
  const navigate = useNavigate()
  const [category, setCategory] = useState("Headphones");
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
    description: "",
    features: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetFormData = () => {
    setFormData({
      name: "",
      image: "",
      price: "",
      description: "",
      features: "",
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await productService.create(category, formData);
      resetFormData();
      navigate("/catalog")
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="site-heading">
        <h1 className="heading-title">Create new Product</h1>
      </div>
      {/*   if (inputData.errorMessage) { 
              <div class="alert">
                <h2>Invalid Credentials</h2>
                <p>inputData.errorMessage</p>
              </div>
            }  */}
      <form onSubmit={onSubmit}>
        <p>
          <label htmlFor="category">Category</label>
          <select
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            id="category"
          >
            <option value="Headphones">Headphones</option>
            <option value="Earphones">Earphones</option>
            <option value="Speakers">Speakers</option>
          </select>
        </p>
        <p>
          <label htmlFor="name">Title</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={onChange}
          />
        </p>
        <p>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            value={formData.image}
            onChange={onChange}
          />
        </p>
        <p>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={onChange}
          />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={onChange}
          ></textarea>
        </p>
        <p>
          <label htmlFor="features">Features</label>
          <textarea
            name="features"
            id="features"
            value={formData.features}
            onChange={onChange}
          ></textarea>
        </p>
        <button className="btn-1">Create Product</button>
      </form>
    </>
  );
};

export default CreatePage;
