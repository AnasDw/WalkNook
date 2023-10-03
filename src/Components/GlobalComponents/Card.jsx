import React from 'react'
import "../../Scss/index.scss";


const Card = (product) => {
  return (
    <>
      <h2>⋆ Nike Air Max 270 </h2>
      <div className="img"></div>
      <div className="add2cart">
        <div className="add"> Add to cart ⊕ </div>
        <div className="price"> ₪649</div>
      </div>
    </>
  );
}

export default Card