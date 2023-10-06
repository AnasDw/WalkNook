import React, { useState, useEffect } from "react";

const Input = ({ value, setFunc }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    setFunc(input);
  }, [input, setFunc]);

  return (
    <div className="form-group">
      <label htmlFor={value}>{`${value}:`}</label>
      <input
        type={value}
        id={value}
        name={value}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        required
      />
    </div>
  );
};

export default Input;
