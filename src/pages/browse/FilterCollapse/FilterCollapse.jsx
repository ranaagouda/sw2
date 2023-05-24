import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function FilterCollapse({ title, filterComponent }) {
  const [filterCollapsed, setFilterCollapsed] = useState(true);
  return (
    <div className="filter-collapse-container flex flex-column justify-content-center pl-[1rem] pr-[1.5rem] border-b border-r ">
      <div className="filter-header py-[1rem] flex justify-content-between align-items-center">
        <div className="font-[bogle] text-[1.125rem]">{title}</div>
        <FontAwesomeIcon
          onClick={() => setFilterCollapsed((prev) => !prev)}
          icon={filterCollapsed ? faChevronDown : faChevronUp}
          style={{
            width: "1rem",
            height: "1rem",
            marginLeft: "1rem",
            cursor: "pointer",
          }}
          size="xs"
        />
      </div>
      <div className={`filter-component  ${filterCollapsed ? "d-none" : ""}`}>{filterComponent}</div>
    </div>
  );
}

export default FilterCollapse;
