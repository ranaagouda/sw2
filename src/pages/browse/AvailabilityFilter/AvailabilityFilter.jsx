import React from "react";

function AvailabilityFilter({ setAvailableOnly }) {
  return (
    <div className="flex flex-row justify-content-start align-items-center mb-[1rem]">
      <input
        type="checkbox"
        onChange={(e) => setAvailableOnly(e.target.checked)}
        className="w-[1.125rem] h-[1.125rem] mr-[0.5rem]"
        style={{accentColor:"black", borderRadius:"0"}}
      />
      <span className="font-[bogle] text-[0.875rem]">Show available items only</span>
    </div>
  );
}

export default AvailabilityFilter;
