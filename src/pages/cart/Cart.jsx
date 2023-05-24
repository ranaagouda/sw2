import React from "react";
import EmptyCart from "./EmptyCart/EmptyCart";
import NonEmptyCart from "./NonEmptyCart/NonEmptyCart";
import item1Image from "../../assets/item1.webp";
import "./Cart.css";

const cartItems = [
  {
    id: 1,
    productImage: item1Image,
    productName: "MSI G408016GXT GeForce RTX 4080 16GB Gaming",
    productCategory: "Graphics Card",
    price: 1309.99,
    seller: "RAIDEALS INC.",
    quantity: 1,
  },
  {
    id: 2,
    productImage: item1Image,
    productName: "MSI G408016GXT GeForce RTX 4080 16GB Gaming",
    productCategory: "Graphics Card",
    price: 1309.99,
    seller: "RAIDEALS INC.",
    quantity: 1,
  },
  {
    id: 2,
    productImage: item1Image,
    productName: "MSI G408016GXT GeForce RTX 4080 16GB Gaming",
    productCategory: "Graphics Card",
    price: 1309.99,
    seller: "RAIDEALS INC.",
    quantity: 1,
  },
  {
    id: 2,
    productImage: item1Image,
    productName: "MSI G408016GXT GeForce RTX 4080 16GB Gaming",
    productCategory: "Graphics Card",
    price: 1309.99,
    seller: "RAIDEALS INC.",
    quantity: 1,
  },
  {
    id: 2,
    productImage: item1Image,
    productName: "MSI G408016GXT GeForce RTX 4080 16GB Gaming",
    productCategory: "Graphics Card",
    price: 1309.99,
    seller: "RAIDEALS INC.",
    quantity: 1,
  },
  {
    id: 2,
    productImage: item1Image,
    productName: "MSI G408016GXT GeForce RTX 4080 16GB Gaming",
    productCategory: "Graphics Card",
    price: 1309.99,
    seller: "RAIDEALS INC.",
    quantity: 1,
  },
  {
    id: 2,
    productImage: item1Image,
    productName: "MSI G408016GXT GeForce RTX 4080 16GB Gaming",
    productCategory: "Graphics Card",
    price: 1309.99,
    seller: "RAIDEALS INC.",
    quantity: 1,
  },
  {
    id: 2,
    productImage: item1Image,
    productName: "MSI G408016GXT GeForce RTX 4080 16GB Gaming",
    productCategory: "Graphics Card",
    price: 1309.99,
    seller: "RAIDEALS INC.",
    quantity: 1,
  },
  {
    id: 2,
    productImage: item1Image,
    productName: "MSI G408016GXT GeForce RTX 4080 16GB Gaming",
    productCategory: "Graphics Card",
    price: 1309.99,
    seller: "RAIDEALS INC.",
    quantity: 1,
  },
];
function Cart() {
  return (
    <>
      <div className="cart">
        <div className="cart-header">
          <span style={{ fontFamily: "bogle" }}>Cart</span> (
          {cartItems.length === 1 ? `1 Item` : `${cartItems.length} Items`})
        </div>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <NonEmptyCart cartItems={cartItems} />
        )}
      </div>
    </>
  );
}

export default Cart;
