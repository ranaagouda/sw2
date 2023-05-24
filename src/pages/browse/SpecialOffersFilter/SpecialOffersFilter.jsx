import React from "react";

function SpecialOffersFilter({ setDiscountedOnly, discountedNumber }) {
  return (
    <div className="flex flex-row justify-content-start align-items-center mb-[1rem]">
      <input
        type="checkbox"
        onChange={(e) => setDiscountedOnly(e.target.checked)}
        className="w-[1.125rem] h-[1.125rem] mr-[0.5rem]"
        style={{ accentColor: "black", borderRadius: "0" }}
      />
      <span className="font-[bogle] text-[0.875rem]">Discounts ({discountedNumber})</span>
    </div>
  );
}

export default SpecialOffersFilter;
