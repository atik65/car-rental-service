import React from "react";
import "./singleTile.css";

const SingleTile = ({ car }) => {
  const { color, cost, id, img, name, speed } = car;
  return (
    <>
      <div className="singleTile">
        <div className="img">
          <img className="singleTileImg " src={img} alt="" />
        </div>
        <p>
          <h5> {name} </h5>
          <h6 className="pe-1"> Cost: {cost} Taka </h6>
        </p>
        <p>
          <span> Speed: {speed} km/h </span>
          <span className="pe-1"> Color: {color} </span>
        </p>
        <div>
          <button className="rentBtn"> Add to Rent</button>
        </div>
      </div>
    </>
  );
};

export default SingleTile;
