import React, { useEffect, useState } from "react";
import "./main.css";
import TileContainer from "../tileContainer/TileContainer";
import Cart from "../cartSection/Cart";

const Main = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  return (
    <>
      <div className="row main">
        <div className="col-9">
          <TileContainer cars={cars} />
        </div>

        <div className="col-3">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Main;
