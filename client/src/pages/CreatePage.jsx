const CreatePage = () => {
  return (
    <>
      <div className="site-heading">
        <h1>Create new Product</h1>
      </div>
      {/*   if (inputData.errorMessage) { 
<div class="alert">
  <h2>Invalid Credentials</h2>
  <p>
inputData.errorMessage
  </p>
</div>
 }  */}
      <form action="/register" method="POST">
        <input type="hidden" name="" defaultValue="" />
        <p>
          <label htmlFor="name">Title</label>
          <input type="text" name="name" id="name" defaultValue="" />
        </p>
        <p>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            id="category"
            defaultValue=""
          />
        </p>
        <p>
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue=""
          />
        </p>
        <p>
          <label htmlFor="price">Price</label>
          <input type="number" name="image" id="image" defaultValue="" />
        </p>
        <p>
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" defaultValue=""></textarea>
        </p>
        <p>
          <label htmlFor="features">Features</label>
          <textarea name="features" id="features" defaultValue=""></textarea>
        </p>
        <button className="btn-1">Create Product</button>
      </form>
    </>
  );
};

export default CreatePage;
