import React from "react";
import SingleTile from "../singleTile/SingleTile";
import "./tileContainer.css";

const TileContainer = ({ cars }) => {
  return (
    <>
      <div className="tiels">
        {cars.map((car, index) => (
          <SingleTile key={index} car={car} />
        ))}
      </div>
    </>
  );
};

export default TileContainer;
