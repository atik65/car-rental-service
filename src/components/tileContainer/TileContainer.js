import React from "react";
import SingleTile from "../singleTile/SingleTile";
import "./tileContainer.css";

const TileContainer = ({ cars, handleCart }) => {
  return (
    <>
      <div className="tiels">
        {cars.map((car, index) => (
          <SingleTile key={index} car={car} handleCart={handleCart} />
        ))}
      </div>
    </>
  );
};

export default TileContainer;
