import React from "react";
import "./inputNumber.scss";

function InputNumber({value, onDecrement, onIncrement}) {
  return (
    <div className="flex items-center number-input">
      <button
       onClick={onDecrement}
        className="minus"
      >-</button>
      
      {value}

      <button
        onClick={onIncrement}
        className="plus"
      >+</button>
    </div>
  );
}

export default InputNumber;
