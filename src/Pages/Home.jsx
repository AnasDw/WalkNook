import React from "react";
import "../Scss/index.scss";
import { NewCollection, ProductsContainer } from "../Components";

const Home = () => {
  return (
    <>
      <div className="page">
        <NewCollection />

        <div className="border">
          <h1>Elevate your athletic journey</h1>
        </div>

        <ProductsContainer />
      </div>
    </>
  );
};

export default Home;
