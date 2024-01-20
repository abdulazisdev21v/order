import React, { useState } from "react";

const Admin = ({ addProduc }) => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function changeProduct() {
    let newProduct = {
      image: image,
      name: name,
      price: price,
      id: Date.now(),
    };
    addProduc(newProduct);
  }

  return (
    <section id="create">
      <div className="container">
        <div className="create">
          <h2>CREATE PRODUCT</h2>
          <input
            onChange={(e) => setImage(e.target.value)}
            type="text"
            placeholder="photo link URL"
          />
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="food name"
          />
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="price"
          />
          <button onClick={changeProduct}>create</button>
        </div>
      </div>
    </section>
  );
};

export default Admin;
