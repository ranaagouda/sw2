import React from "react";
import FilterCollapse from "./FilterCollapse/FilterCollapse";
import ItemCard from "./ItemCard/ItemCard";
import item1Image from "../../assets/item1.webp";
import PriceFilter from "./PriceFilter/PriceFilter";
import AvailabilityFilter from "./AvailabilityFilter/AvailabilityFilter";
import { useState } from "react";
import SpecialOffersFilter from "./SpecialOffersFilter/SpecialOffersFilter";
const items = [
  {
    id: 1,
    productImage: item1Image,
    productName: "MSI G408016GXT GeForce RTX 4080 16GB Gaming",
    productCategory: "Graphics Card",
    price: 1309.99,
    seller: "RAIDEALS INC.",
    availableQuantity: 1,
    rating: 3.5,
    ratingCount: 100,
    discount: 0.5,
  },
  {
    id: 2,
    productImage: item1Image,
    productName: "MSI G408016GXT GeForce RTX 4080 16GB Gaming",
    productCategory: "Graphics Card",
    price: 1309.99,
    seller: "RAIDEALS INC.",
    availableQuantity: 0,
    rating: 4.5,
    ratingCount: 100,
    discount: 0,
  },
  {
    id: 3,
    productImage: item1Image,
    productName: "MSI G408016GXT GeForce RTX 4080 16GB Gaming",
    productCategory: "Graphics Card",
    price: 1499.99,
    seller: "RAIDEALS INC.",
    availableQuantity: 1,
    rating: 4.5,
    ratingCount: 100,
    discount: 0,
  },
  {
    id: 4,
    productImage: item1Image,
    productName: "MSI G408016GXT GeForce RTX 4080 16GB Gaming",
    productCategory: "Graphics Card",
    price: 1309.99,
    seller: "RAIDEALS INC.",
    availableQuantity: 1,
    rating: 4.5,
    ratingCount: 100,
    discount: 0.2,
  },
  {
    id: 5,
    productImage: item1Image,
    productName: "MSI G408016GXT GeForce RTX 4080 16GB Gaming",
    productCategory: "Graphics Card",
    price: 499.99,
    seller: "RAIDEALS INC.",
    availableQuantity: 1,
    rating: 3,
    ratingCount: 100,
    discount: 0.2,
  },
  {
    id: 6,
    productImage: item1Image,
    productName: "MSI G408016GXT GeForce RTX 4080 16GB Gaming",
    productCategory: "Graphics Card",
    price: 499.99,
    seller: "RAIDEALS INC.",
    availableQuantity: 0,
    rating: 2,
    ratingCount: 67,
    discount: 0.3,
  },
];
function Browse() {
  const [availableOnly, setAvailableOnly] = React.useState(false);
  const [discountedOnly, setDiscountedOnly] = React.useState(false);

  const maxPrice = items.reduce((prev, curr) => {
    return prev.price > curr.price ? prev : curr;
  }).price;
  const getDiscountedNumber = (items) => {
    let count = 0;
    for (let item of items) {
      if (item.discount > 0) {
        count++;
      }
    }
    return count;
  };
  const [value, setValue] = useState([0, maxPrice.toFixed(0)]);
  const applyFilters = (items) => {
    const result = [];
    for (let item of items) {
      if (discountedOnly && item.discount <= 0) {
        continue;
      }
      if (availableOnly && item.availableQuantity <= 0) {
        continue;
      }
      if (item.price <= value[1] && item.price >= value[0]) {
        result.push(item);
      } 
    }

    return result;
  };
  return (
    <div className="mt-[5.5rem] flex h-100 ">
      <div className="filter-container flex flex-column flex-1 overflow-auto h-[70vh] sticky top-[5.5rem] left-0">
        <FilterCollapse title={"Departments"} filterComponent={<div>This is a filter</div>} />
        <FilterCollapse
          title={"Price"}
          filterComponent={<PriceFilter maxPrice={Math.ceil(maxPrice)} value={value} setValue={setValue} />}
        />
        <FilterCollapse title={"Brand"} filterComponent={<div>This is a filter</div>} />
        <FilterCollapse
          title={"Availability"}
          filterComponent={<AvailabilityFilter setAvailableOnly={setAvailableOnly} />}
        />
        <FilterCollapse
          title={"Special Offers"}
          filterComponent={
            <SpecialOffersFilter
              setDiscountedOnly={setDiscountedOnly}
              discountedNumber={getDiscountedNumber(applyFilters(items))}
            />
          }
        />
      </div>
      <div className="browse-container flex-[3] flex flex-column">
        <h2 className="text-[1.25rem] font-[bogle] p-[1.5rem]">
          Results for "RTX 4080" <span>{`(${applyFilters(items)?.length})`}</span>
        </h2>
        <div className="items-list flex justify-content-around flex-wrap">
          {applyFilters(items).map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Browse;
