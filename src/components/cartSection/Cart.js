import React from "react";
import "./cart.css";
const Cart = ({ filteredCar }) => {
  const arrayUniqueByKey = [
    ...new Map(filteredCar.map((item) => [item["id"], item])).values(),
  ];
  // const arrayUniqueByKey = filteredCar;

  const totalCost = arrayUniqueByKey.reduce((total, currentCar) => {
    return total + currentCar.cost;
  }, 0);

  return (
    <>
      <div className="cart">
        <h4 className="cart-title">
          <i className="fas fa-shopping-cart    "></i> Cart For car Rent{" "}
        </h4>
        <table className="table table-dark">
          <tbody>
            <tr>
              <th scope="row"> Car Selected :</th>
              <td> {arrayUniqueByKey.length} </td>
            </tr>
            <tr>
              <th scope="row">Total Amount :</th>
              <td> {totalCost} Taka </td>
            </tr>
          </tbody>
        </table>

        <p className="mt-4 fw-bold">Selected cars--</p>
        {arrayUniqueByKey.map((car, index) => {
          return (
            <div className="row" key={index}>
              <div className="col-6 d-flex align-items-center">
                {" "}
                {car.name}{" "}
              </div>
              <div className="col-6 tableImg">
                <img src={car.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
