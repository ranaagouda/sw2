import React from "react";
import { useState } from "react";
import "./checkout.css";
import FormInput from "./checkoutForm/FormInput";
import Star from "../item/starReviews/star";

const checkout = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    country: "",
    zipCode: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
};

const inputs = [
  {
    id: 1,
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    errorMessage:
      "First Name should be 3-16 characters and shouldn't include any special character!",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 2,
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
    errorMessage:
      "Last Name should be 3-16 characters and shouldn't include any special character!",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 3,
    name: "streetAddress",
    type: "text",
    placeholder: "Street Address",
    pattern: "^[A-Za-z0-9]{3,16}$",
    required: true,
  },
  {
    id: 4,
    name: "city",
    type: "text",
    placeholder: "City",
    pattern: "^[A-Za-z]{3,16}$",
    required: true,
  },
  {
    id: 6,
    name: "country",
    type: "text",
    placeholder: "Country",
    pattern: "^[A-Za-z]{3,16}$",
    required: true,
  },
  {
    id: 7,
    name: "zipCode",
    type: "text",
    placeholder: "Zip Code",
    errorMessage: "Zip Code should be 5 digits",
    pattern: "^[0-9]{0,5}$",
    required: true,
  },
  {
    id: 8,
    name: "phoneNumber",
    type: "tel",
    placeholder: "Phone Number",
    errorMessage:
      "The number you entered is not a valid phone number. Please enter a number with the correct length and try again",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 9,
    name: "password",
    type: "password",
    placeholder: "Password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  },
  {
    id: 10,
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    errorMessage: "Passwords don't match!",
    pattern: values.password,
    required: true,
  },
];

const handleSubmit = (e) => {
  e.preventDefault();
};

const onChange = (e) => {
  setValues({ ...values, [e.target.name]: e.target.value });
};

function Checkout() {
  return (
    <div class="checkout">
      <div class="checkout-header">Checkout</div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <label>
            <input type="checkbox" />
            <span>
              I want to receive text updates about the status of my order.
            </span>
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
