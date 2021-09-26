import React, { useEffect, useState } from "react";
import "./main.css";
import TileContainer from "../tileContainer/TileContainer";
import Cart from "../cartSection/Cart";

const Main = () => {
  const [cars, setCars] = useState([]);
  const [filterdCar, setFilterdCar] = useState([]);

  useEffect(() => {
    fetch("./data.JSON")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const handleCart = (id) => {
    const car = cars.find((car) => car.id === id);
    setFilterdCar([...filterdCar, car]);
  };

  return (
    <>
      <div className="row main">
        <div className="col-md-9">
          <TileContainer cars={cars} handleCart={handleCart} />
        </div>

        <div className="col-md-3 mt-5 mt-md-0">
          <Cart filteredCar={filterdCar} />
        </div>
      </div>
    </>
  );
};

export default Main;
