import React from "react";
import emptyCart from "../../../assets/empty-cart.svg";
import { Link } from "react-router-dom";
function EmptyCart() {
  return (
    <div className="empty-cart-container">
      <img
        src={emptyCart}
        alt="Empty Cart"
        style={{ width: "240px", aspectRatio: "auto 240 / 200" }}
      />

      <p style={{ fontSize: "20px", fontFamily: "bogle", marginTop: "1.3rem" }}>
        Time to start shopping!
      </p>
      <p style={{ fontSize: "16px", fontFamily: "bogle" }}>
        Your cart is empty
      </p>

      <p style={{ marginTop: "1.3rem", marginBottom: "0.5rem" }}>
        Hi, Ahmad T - fill it up with savings from your usual departments.
      </p>

      <div>
        <Link to="/browse" className="shop-button">
          Shop Playstation
        </Link>
        <Link to="/browse" className="shop-button">
          Shop Playstation
        </Link>
        <Link to="/browse" className="shop-button">
          Shop Playstation
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
