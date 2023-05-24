import React from "react";
import "./NavBar.css";
import logo from "../../assets/walmartLogo.svg";
import dep from "../../assets/dep.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
function NavBar() {
  return (
    <nav>
      <Link to="/" className="logo-container">
        <img
          src={logo}
          alt="Walmart Logo"
          style={{ width: "8.125rem", height: "2rem" }}
        />
      </Link>
      <div className="dep-container">
        <img src={dep} alt="" style={{ width: "1rem", height: "1rem" }} />
        <span className="text">Departments</span>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search everything at Walmart online and in store"
          className="search-input-field"
        />
        <div className="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} color="black" />
        </div>
      </div>

      {/* <div className="reorder-container">
        <FontAwesomeIcon icon={faHeart} color="white" />
        <div className="d-flex flex-column align-items-start">
          <span
            className="text"
            style={{ fontFamily: "bogle-regular", fontSize: "13px" }}
          >
            Reorder
          </span>
          <span className="text d-block">My Items</span>
        </div>
      </div> */}
      <Link to="/auth" className="account-container">
        <FontAwesomeIcon icon={faUser} color="white" />
        <div className="d-flex flex-column align-items-start">
          <span
            className="text"
            style={{ fontFamily: "bogle-regular", fontSize: "13px" }}
          >
            Sign In
          </span>
          <span className="text">Account</span>
        </div>
      </Link>
      <Link
        to="/cart"
        className="d-flex flex-column align-items-center text-white cart-container"
      >
        <FontAwesomeIcon icon={faCartShopping} color="white" size="xl" />
        <span style={{ fontFamily: "bogle-regular", fontSize: "0.75rem" }}>
          $0.00
        </span>
      </Link>
    </nav>
  );
}

export default NavBar;

