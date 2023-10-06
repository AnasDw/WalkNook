import React, { useEffect } from "react";
import "../Scss/index.scss";
import { NewCollection, ProductsContainer } from "../Components";

const Home = () => {
  useEffect(() => {
    
    if (localStorage.getItem("IsRegistered")) {
    } else {
      localStorage.clear();
      localStorage.setItem("IsRegistered", false);
    }
  }, []);

  return (
    <>
      <div className="page">
        <NewCollection />

        <div className="border">
          <h1>Elevate your athletic journey</h1>
        </div>

        <ProductsContainer category={"d"} />
      </div>
    </>
  );
};

export default Home;
