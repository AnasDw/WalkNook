import React from "react";
import "../../Scss/index.scss";
import Card from "../GlobalComponents/Card";

const ProductsContainer = () => {
  let shoe_data = [];
  return (
    <>
      <div className="Products-Container">
        <div className="header">
          <div> ★ We Found {shoe_data.length} Products </div>
          <div>
            <ul>
              <div className="menu_Icon Icon cc"> </div>
              <div> Filter </div>
            </ul>
          </div>
        </div>

        <ul>
          {shoe_data.map((product) => (
            <li>
              <Card product={product} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductsContainer;
