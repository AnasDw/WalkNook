import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContainer } from "../Components";

const Category = () => {
  const param1 = useParams();

  return (
    <>
      <div className="Category-Page">
        <div>
          { <ProductsContainer category={param1.param1} /> }
        </div>
      </div>
    </>
  );
};

export default Category;
