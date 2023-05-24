import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  HashRouter,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Auth from "./pages/auth/Auth.jsx";
import Browse from "./pages/browse/Browse.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Item from "./pages/item/Item.jsx";
import Favorites from "./pages/favorites/Favorites.jsx";
import Checkout from "./pages/checkout/Checkout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/item" element={<Item />} />
      <Route path="*" element={<div>Error</div>} />
    </Routes>
    <Footer />
  </HashRouter>
);
