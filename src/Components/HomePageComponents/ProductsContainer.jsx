import React, { useEffect, useState } from "react";
import "../../Scss/index.scss";
import Card from "../CardComponents/Card/"
import useAxios from "../../Data/AxiosByCategory";

const ProductsContainer = (category) => {
  const [Shoe_data, setData] = useState([]);
  const [todo, isError, isLoading] = useAxios(category.category);


  useEffect(() => {
    if (todo && todo.data) {
      setData(todo.data);
    }
  }, [todo, category]);

  return (
    <>
      <div className="Products-Container">
        <div className="header">
          <div> ★ We Found {Shoe_data.length} Products </div>
          <div>
            <ul>
              <div className="menu_Icon Icon cc"> </div>
              <div> Filter </div>
            </ul>
          </div>
        </div>

        <ul>
          {Shoe_data.map((product, index) => (
            <li key={index}>
              <Card product={product} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductsContainer;
