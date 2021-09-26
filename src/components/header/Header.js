import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="innerHeader">
          <div className="container">
            <div className="row">
              <div className="col-9">
                <h1>Rent Your Favourite Car, Anytime</h1>
                <h6>For a Whole Day Long... </h6>
                <h5>
                  <i className="fas fa-sign  icons  "></i> Easy & Fast{" "}
                </h5>
                <h5>
                  <i className="far fa-surprise  icons  "></i> Best Price{" "}
                </h5>
                <h5>
                  <i className="far fa-thumbs-up  icons  "></i> Quality Service{" "}
                </h5>
              </div>
              <div className="col-3 pt-5">
                <p>Max Amount = 1000000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
