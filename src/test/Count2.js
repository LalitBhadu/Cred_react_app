import React, { useState, createContext } from "react";
import Count from "./Count";

const updateCountLess = createContext();

function Count2() {
  const [count, setCount] = useState(0);

  function handleUpdateCountLess() {
    setCount(count - 1);
  }

  return (
    <>
      <updateCountLess.Provider value={count}>
        <Count />
        <h1>This is less: {count}</h1>
        <button onClick={handleUpdateCountLess}>click here -</button>
      </updateCountLess.Provider>
    </>
  );
}

export default Count2;
export { updateCountLess };
