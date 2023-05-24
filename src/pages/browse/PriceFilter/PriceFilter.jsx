import React from "react";
import { useState } from "react";
import { TwoThumbInputRange } from "react-two-thumb-input-range";
import "../Browse.css"
function PriceFilter({ maxPrice: mx, value, setValue }) {

  const onValueChange = (values) => {
    if (values[0] >= values[1]) {
      setValue((prev) => [prev[0], prev[0]]);
    } else {
      setValue([values[0],values[1]]);
    }
  };

  return (
    <div className="flex flex-column align-items-center mb-[1rem]">
      {/* PriceFilter - {maxPrice} */}
      <p className="text-[1rem] font-[bogle] mb-[1rem]">
        ${value[0]} - ${value[1]}
      </p>
      <div className="input-range">
        <TwoThumbInputRange
          onChange={onValueChange}
          values={value}
          min={0}
          max={mx}
          showLabels={false}
          thumbColor="#0071dc"
          thumbStyle={{ width: "1.5rem", height: "1.5rem" }}
          inputStyle={{ marginBottom: "2rem", height: "0.5rem", width:"17.5rem", background: "#909196" }}
          trackColor="#0071dc"
        />
      </div>
      <p className="flex flex-row justify-content-between w-[17.5rem]">
        <span>{0}</span>
        <span>{(mx/2).toFixed(0)}</span>
        <span>{mx.toFixed(0)}</span>
      </p>
    </div>
  );
}

export default PriceFilter;
