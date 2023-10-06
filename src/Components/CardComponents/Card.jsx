import React, { useState } from "react";
import "../../Scss/index.scss";
import EditComponent from "./EditComponent";

const Card = (object) => {
  const [ShowEditScreen, setEditScreen] = useState(false);
  const [IsAdmin, setIsAdmin] = useState(localStorage.getItem("IsAdmin") === "true");

  return (
    <>
      {ShowEditScreen ? (
        <EditComponent object={object} />
      ) : (
        <>
          {" "}
          <div className="P-Name">
            <h2>⋆ {object.product.Name} </h2>{" "}
          </div>
          <div className="img"></div>
          <div className="add2cart">
            {IsAdmin ? (
              <div
                onClick={() => {
                  setEditScreen(true);
                }}
                className="settings_Icon"
              >
                {" "}
              </div>
            ) : (
              <div className="add"> Add to cart ⊕ </div>
            )}
            <div className="price"> ₪{object.product.Price}</div>
          </div>{" "}
        </>
      )}
    </>
  );
};

export default Card;
