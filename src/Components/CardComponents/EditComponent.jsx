import { useState } from "react";

const EditComponent = (object) => {
  const [Price, setPrice] = useState(object.object.product.Price);
  const [ProductName, setProductName] = useState(object.object.product.Name);
  const [QNT, setQNT] = useState(object.object.product.QNT);

  function update(state,value) {
    switch (state) {
      case "ProductName":
        setProductName(value);
        break;
      case "Price":
        setPrice(value);
        break;
      case "QNT":
        setQNT(value);
        break;
    }
  }
  
  const elements = [
    { key: "ProductName", value: ProductName },
    { key: "Price", value: Price },
    { key: "QNT", value: QNT },
  ];

  function handleSubmit(e) {
  }
  return (
    <>
      <div className="Edit-Card">
        <form onSubmit={handleSubmit}>
          <h1> Edit {object.object.product.Name} </h1>
          {elements.map((element, i) => (
            <div key={i}>
              <label>{`${element.key}:`}</label>
              <input
                type="text"
                value={element.value}
                onChange={(e) => {
                    update(element.key , e.target.value);
                }}
              />
            </div>
          ))}

          <div className="flex ">
            <button type="submit">Save</button>
            <button
              type="cancel"
              onClick={(e) => {
                setEditScreen(false);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditComponent;
