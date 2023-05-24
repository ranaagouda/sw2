import React from "react";
import { useState, useEffect } from "react";
import DeliveryOptions from "./DeliveryOptions/DeliveryOptions";
import shippingIcon from "../../../assets/shipping.svg";
import CartList from "./CartList/CartList";
import { Link } from "react-router-dom";
function NonEmptyCart({ cartItems }) {

 
  return (
    <div className="d-flex flex-row h-100">
      <div className="non-empty-cart-container flex-[2]">
        <DeliveryOptions cartItemsSize={cartItems.length} />

        <div className="cart-items-container">
          <div className="cart-items-header">
            <img src={shippingIcon} alt="Shipping Icon" />
            <p
              style={{
                fontFamily: "bogle",
                fontSize: "1.5rem",
                marginLeft: "1.5rem",
              }}
            >
              Free Shipping, arrives in 2 days
            </p>
          </div>
          <CartList cartItems={cartItems} />
        </div>
      </div>
      <div className={`cart-summary-container`}>
        <div className=" p-[1rem] border-b">
          <Link to="/checkout">
            <button className="checkout-button">Continue to checkout</button>
          </Link>
        </div>
        <div className=" p-[1rem] border-b">
          <p className="flex justify-content-between">
            <span>
              <span className="font-[bogle]">Subtotal</span> (X Items)
            </span>{" "}
            <span>$XXX.X</span>{" "}
          </p>
          <p className="flex justify-content-between">
            <span>Shipping</span> <span>Free</span>{" "}
          </p>
          <br />
          <p className="flex justify-content-between">
            <span className="font-[bogle]">Taxes</span> <span>Calculated at checkout</span>{" "}
          </p>
        </div>
        <div className=" p-[1rem] mb-[1rem]">
          <p className="flex justify-content-between">
            <span>
              <span className="font-[bogle]">Estimated Total</span>
            </span>{" "}
            <span className="font-[bogle]">$XXX.X</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NonEmptyCart;
