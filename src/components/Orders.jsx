import React, { useState } from "react";
import loro from "../image/loro.png";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Orders = () => {
  return (
    <section id="order">
      <div className="container">
        <h2>MY ORDERS</h2>
        <div className="order">
          <div className="order_block">
            <img src={loro} alt="" />
            <div className="order_text">
              <h2>cappuccino</h2>
              <h3>10.5$</h3>
            </div>
            <div className="block_btn">
              <div className="btn_order">
                <button>delete order</button>
              </div>
              <div className="btn_text">
                <button>
                  <AddIcon />
                </button>
                <p>3x</p>
                <button>
                  <RemoveIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
