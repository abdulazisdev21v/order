import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Admin from "./components/Admin";
import Orders from "./components/Orders";
import EditProduct from "./components/EditProduct";

import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [orders, setOrders] = useState([]);
  const [editInput, setEditInput] = useState({});
  function addProduc(newProduct) {
    let data = JSON.parse(localStorage.getItem("product")) || [];
    data.push(newProduct);
    localStorage.setItem("product", JSON.stringify(data));
    readProduct();
  }

  function readProduct() {
    let data = JSON.parse(localStorage.getItem("product")) || [];
    setData(data);
  }

  function deletProduct(id) {
    let data = JSON.parse(localStorage.getItem("product")) || [];
    let deleteItems = data.filter((el) => el.id !== id);
    localStorage.setItem("product", JSON.stringify(deleteItems));
    readProduct();
  }

  function addoOrders(id) {
    let order = JSON.parse(localStorage.getItem("product-orders")) || [];
    setOrders(orders);
    let data = JSON.parse(localStorage.getItem("product")) || [];
    if (orders.some((item) => item.id === id)) {
      alert("error");
    } else {
      let findItem = data.find((el) => el.id === id);
      orders.push(findItem);
      localStorage.setItem("product-orders", JSON.stringify(findItem));
    }
  }

  function editProduct(index) {
    setEditInput(data[index]);
  }

  function handleSaveProduct(newProduct) {
    let data = JSON.parse(localStorage.getItem("product")) || [];
    let newData = data.map((el) => {
      if (newProduct.id === el.id) {
        return newProduct;
      }
      return el;
    });

    localStorage.setItem("product", JSON.stringify(newData));
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/menu"
          element={
            <Menu
              data={data}
              readProduct={readProduct}
              deletProduct={deletProduct}
              addoOrders={addoOrders}
              editProduct={editProduct}
            />
          }
        />
        <Route path="/admin" element={<Admin addProduc={addProduc} />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/edit/:id"
          element={
            <EditProduct
              editInput={editInput}
              handleSaveProduct={handleSaveProduct}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
