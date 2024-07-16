import { useNavigate } from "react-router-dom";
import * as productService from "../services/productService";
import useForm from "../hooks/useForm";

const CreatePage = () => {
  const navigate = useNavigate()
  const {values, onChange, resetForm} = useForm({}, {
    category: "",
    name: "",
    image: "",
    price: "",
    description: "",
    features: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await productService.create(values);
      resetForm();
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
            value={values.category}
            onChange={onChange}
            id="category"
          >
            <option value="">Please select category</option>
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
            onChange={onChange}
            value={values.name}
          />
        </p>
        <p>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={onChange}
            value={values.image}
          />
        </p>
        <p>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            onChange={onChange}
            value={values.price}
          />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={onChange}
            value={values.description}
          ></textarea>
        </p>
        <p>
          <label htmlFor="features">Features</label>
          <textarea
            name="features"
            id="features"
            onChange={onChange}
            value={values.features}
          ></textarea>
        </p>
        <button className="btn-1">Create Product</button>
      </form>
    </>
  );
};

export default CreatePage;
