import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faPlus, faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as EmptyStar } from "@fortawesome/free-regular-svg-icons";
function ItemCard({ item }) {
  const displayStars = (rate, full) => {
    const result = [];
    let starCount = 0;
    for (let x = 0; x < Math.floor(rate); x++) {
      result.push(
        <FontAwesomeIcon key={`star${x + 1}`} className=" w-[0.75rem] h-[0.75rem]" icon={faStar} />
      );
      starCount++;
    }

    let frac = Number(rate) - Math.floor(rate);
    frac = frac.toPrecision(1);

    if (frac >= 0.3 && frac <= 0.7) {
      //Half a star from 0.3 to 0.7
      result.push(
        <FontAwesomeIcon
          key={`star${Math.floor(rate) + 1}`}
          className="w-[0.75rem] h-[0.75rem]"
          icon={faStarHalfStroke}
        />
      );
      starCount++;
    } else if (frac >= 0.8) {
      //full star for 0.8 and 0.9
      result.push(
        <FontAwesomeIcon
          key={`star${Math.floor(rate) + 1}`}
          className=" w-[0.75rem] h-[0.75rem]"
          icon={faStar}
        />
      );
      starCount++;
    }

    if (full) {
      for (let x = starCount; x < 5; x++) {
        result.push(
          <FontAwesomeIcon
            key={`star${x + 1}`}
            className=" w-[0.75rem] h-[0.75rem]"
            icon="fa-regular fa-star"
          />
        );
      }
    } else {
      for (let x = starCount; x < 5; x++) {
        result.push(
          <FontAwesomeIcon key={`star${x + 1}`} className=" w-[0.75rem] h-[0.75rem]" icon={EmptyStar} />
        );
      }
    }
    return <>{result}</>;
  };

  return (
    <div className="browse-item-card w-[24%] px-[1rem] border-b pb-[2.5rem]">
      {item?.productImage && (
        <img src={item.productImage} alt={item.productName} className="w-[250px] h-[336px]" />
      )}

      {item?.availableQuantity <= 0 ? (
        <>
          <button
            className="mb-[2rem] flex justify-content-center align-items-center checkout-button"
            style={{
              backgroundColor: "lightgrey",
              width: "fit-content",
              padding: "0.75rem 1rem",
              boxShadow: "0 1px 2px 1px #00000026",
              color: "grey",
              cursor: "not-allowed",
            }}
          >
            Out of stock
          </button>
        </>
      ) : (
        <>
          <button
            className="mb-[2rem] flex justify-content-center align-items-center checkout-button hover:bg-[#004f9a] "
            style={{ width: "fit-content", padding: "0.75rem 1rem", boxShadow: "0 1px 2px 1px #00000026" }}
          >
            <FontAwesomeIcon icon={faPlus} style={{ width: "1rem", height: "1rem" }} size="xs" />
            Add
          </button>
        </>
      )}

      {item?.discount && item.discount > 0 ? (
        <>
          {" "}
          <p className="font-[bogle] text-[#2a8703] my-[1rem] text-[1.125rem]">
            Now ${(item?.price - item?.price * item.discount).toFixed(2)}
            <span className="font-[bogle-regular] line-through ml-[0.5rem] text-[#74767c] text-[0.8rem]">
              ${item?.price}
            </span>
          </p>
        </>
      ) : (
        <>
          {" "}
          <p className="font-[bogle] my-[1rem] text-[1.125rem]">${item?.price}</p>
        </>
      )}
      <p className="text-[#2e2f32] text-[1rem]">{item?.productName}</p>
      <div className="rating-container flex align-items-center my-[0.5rem]">
        {displayStars(item?.rating, false)}{" "}
        <span className="text-[#74767c] ml-[0.5rem] text-[0.75rem] pt-[0.125rem]">{item?.ratingCount}</span>
      </div>
      {item?.availableQuantity > 0 && (
        <span className="bg-[#e6f1fc] rounded-[0.125rem] text-[#004f9a] p-[0.25rem] text-[0.75rem]">
          2-day shipping
        </span>
      )}

      {/* {item?.availableQuantity <= 0 ? (
        <>
          <div className="bg-[lightgrey] font-[bogle] text-center mt-[1rem] rounded-[0.125rem] text-[#74767c] p-[0.25rem] text-[0.75rem]">
            Out of stock
          </div>
        </>
      ) : (
        <></>
      )} */}
    </div>
  );
}

export default ItemCard;
