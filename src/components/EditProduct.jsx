import React, { useState } from "react";

const EditProduct = ({ editInput, handleSaveProduct }) => {
  const [product, setProduct] = useState(editInput);

  function inputChangeImage(e) {
    let newObj = { ...product };
    newObj.image = e.target.value;
    setProduct(newObj);
  }
  function inputChangeName(e) {
    let newObj = { ...product };
    newObj.name = e.target.value;
    setProduct(newObj);
  }
  function inputChangePrice(e) {
    let newObj = { ...product };
    newObj.price = e.target.value;
    setProduct(newObj);
  }

  function saveChange() {
    handleSaveProduct(product);
  }

  return (
    <section id="create">
      <div className="container">
        <div className="create">
          <h2>EDIT PRODUCT</h2>
          <input
            onChange={inputChangeImage}
            value={product.image}
            type="text"
            placeholder="photo link URL"
          />
          <input
            onChange={inputChangeName}
            value={product.name}
            type="text"
            placeholder="food name"
          />
          <input
            onChange={inputChangePrice}
            value={product.price}
            type="text"
            placeholder="price"
          />
          <button onClick={saveChange}>save</button>
        </div>
      </div>
    </section>
  );
};

export default EditProduct;
