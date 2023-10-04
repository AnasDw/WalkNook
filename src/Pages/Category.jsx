import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContainer } from "../Components";

const Category = () => {
  const param1 = useParams();
  const [Category, setCategory] = useState();

  useEffect(() => {
    setCategory(param1.param1.slice(1));
  }, [param1]);

  return (
    <>
      <div className="Category-Page">
        <div>{<ProductsContainer category={Category} />}</div>
      </div>
    </>
  );
};

export default Category;
