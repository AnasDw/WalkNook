import React from "react";
import "../../Scss/index.scss";

const Card = (object) => {
  return (
    <>
      <div className="P-Name"> <h2>⋆ {object.product.Name} </h2> </div>
      <div className="img"></div>
      <div className="add2cart">
        <div className="add"> Add to cart ⊕ </div>
        <div className="price"> ₪{object.product.Price}</div>
      </div>
    </>
  );
};

export default Card;
