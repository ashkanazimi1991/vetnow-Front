import PlusStyle from "./PlusMinus.module.css";
import React, { useState } from "react";

export default function PlusMinus() {
  const [data,setData]=useState(null);

  function getData(value){
    setData(value.target.value)
  }
  let [count, setCount] = useState(1);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    if ({ count }.count <= 1) {
      return (count = count);
    }
    count = count - 1;
    setCount(count);
  }

  return (
    <div className={PlusStyle.main}>
      <div className={PlusStyle.container}>
        <button
          id={PlusStyle.plusBtn}
          onClick={incrementCount}
        >
          +
        </button>
        <div>
          <input
            id={PlusStyle.textInput}
            
            type="text"
            min="1"
            placeholder={count}
            onChange={getData}
          />
        </div>
        <button
          id={PlusStyle.minusBtn}
          onClick={decrementCount}
        >
          -
        </button>
      </div>
      <h1 id={PlusStyle.numberLabel}>تعداد</h1>
    </div>
  );
}
