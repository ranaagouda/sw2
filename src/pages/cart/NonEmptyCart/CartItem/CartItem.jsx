import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function CartItem({ item }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decrementQuantity = () => {
    setQuantity((prev) => prev - 1);
  };

  console.log(item, "----------------------");
  return (
    <div className="cart-item-container">
      <p>
        Sold and shipped by <span style={{ textDecoration: "underline" }}>{item?.seller}</span>
      </p>
      <div className="cart-item">
        <img src={item?.productImage} alt="Product" style={{ width: "6rem", height: "6rem" }} />
        <div className="cart-item-details">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0 2rem",
            }}
          >
            <span>{item?.productName}</span>{" "}
            <span style={{ fontSize: "1.125rem", fontFamily: "bogle" }}>
              ${(quantity * item?.price).toFixed(2)}
            </span>
          </div>
          <p style={{ padding: "0 2rem" }}>{item?.productCategory}</p>

          {quantity > 1 ? (
            <p
              style={{
                padding: "0 2rem",
                color: "#74767c",
                fontSize: "0.875rem",
              }}
            >
              ${item?.price}/ea
            </p>
          ) : (
            <></>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <div style={{ textDecoration: "underline" }}>Remove</div>
            <div
              style={{
                marginLeft: "1rem",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                width: "6.875rem",
                border: "1px solid #babbbe",
                borderRadius: "1000px",
                padding: "0.25rem",
              }}
            >
              <FontAwesomeIcon
                icon={faMinus}
                size="2xs"
                className="quantity-button"
                onClick={decrementQuantity}
              />
              <div style={{ width: "50%", textAlign: "center" }}>{quantity}</div>
              <FontAwesomeIcon
                icon={faPlus}
                size="2xs"
                className="quantity-button"
                onClick={incrementQuantity}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
