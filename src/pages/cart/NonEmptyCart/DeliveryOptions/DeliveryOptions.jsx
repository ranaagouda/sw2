import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import pAndDIcon from "../../../../assets/p-and-d-icon.svg";
import shippingIcon from "../../../../assets/shipping.svg";
import pickupIcon from "../../../../assets/pickup.svg";
import deliveryIcon from "../../../../assets/delivery.svg";

function DeliveryOptions({ cartItemsSize }) {
  const [pickAndDeliveryCollapsed, setPickAndDeliveryCollapsed] = useState(true);
  const [chosenDeliveryOption, setChosenDeliveryOption] = useState("shipping");
  return (
    <>
      <div className="p-and-d-container">
        <img src={pAndDIcon} alt="Pickup and delivery icon" />
        <span
          style={{
            marginLeft: "0.5rem",
            fontFamily: "bogle",
            fontSize: "1.5rem",
          }}
        >
          Pickup and delivery options
        </span>
        <FontAwesomeIcon
          onClick={() => setPickAndDeliveryCollapsed((prev) => !prev)}
          icon={pickAndDeliveryCollapsed ? faChevronDown : faChevronUp}
          style={{
            width: "1.5rem",
            height: "1.5rem",
            marginLeft: "1rem",
            cursor: "pointer",
          }}
        />
      </div>
      <div className={`delivery-options ${pickAndDeliveryCollapsed ? "d-none" : ""}`}>
        <div
          onClick={() => setChosenDeliveryOption("shipping")}
          className={`delivery-option ${chosenDeliveryOption == "shipping" ? "chosen-delivery-option" : ""}`}
        >
          <img src={shippingIcon} alt="Shipping Icon" style={{ width: "2.5rem", height: "2.5rem" }} />
          <p>Shipping</p>
          <p
            style={{
              color: "#74767c",
              fontSize: "0.75rem",
              fontFamily: "bogle-regular",
            }}
          >
            {cartItemsSize > 1 ? "All items available" : "Available"}
          </p>
        </div>
        <div
          onClick={() => setChosenDeliveryOption("pickup")}
          className={`delivery-option ${chosenDeliveryOption == "pickup" ? "chosen-delivery-option" : ""}`}
        >
          <img src={pickupIcon} alt="Pickup Icon" style={{ width: "2.5rem", height: "2.5rem" }} />
          <p>Pickup</p>
          <p
            style={{
              color: "#74767c",
              fontSize: "0.75rem",
              fontFamily: "bogle-regular",
            }}
          >
            {cartItemsSize > 1 ? "All items available" : "Available"}
          </p>
        </div>
        <div
          onClick={() => setChosenDeliveryOption("delivery")}
          className={`delivery-option ${chosenDeliveryOption == "delivery" ? "chosen-delivery-option" : ""}`}
        >
          <img src={deliveryIcon} alt="Delivery Icon" style={{ width: "2.5rem", height: "2.5rem" }} />
          <p>Delivery</p>
          <p
            style={{
              color: "#74767c",
              fontSize: "0.75rem",
              fontFamily: "bogle-regular",
            }}
          >
            {cartItemsSize > 1 ? "All items available" : "Available"}
          </p>
        </div>
      </div>
    </>
  );
}

export default DeliveryOptions;
