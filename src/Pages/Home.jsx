import React from "react";
import "../Scss/index.scss";

const Home = () => {
  return (
    <>
      <div className="page">
        <div className="Container">
          <div className="product-img"></div>
          <div className="product-description">
            <div className="product-user-description">
              <ul>
                <li>
                  <h2> NEW COLLECTION </h2>
                </li>
                <li>
                  <h1> NEW NIKE REACT FLYKNIT </h1>
                </li>
                <li>
                  <h3>
                    Experience the future of footwear with the New Nike React
                    Flyknit. These cutting-edge shoes seamlessly blend style,
                    innovation, and performance to elevate your every step.
                  </h3>
                </li>
              </ul>
            </div>
            <div className="product-user-interface">
              <ul>
                <li>QNT</li>
                <li>SIZE</li>
                <li>₪599</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
