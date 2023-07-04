// import React, { useState, createContext } from "react";
// import Count from "./Count";

// const updateCountAdd = createContext();
// console.log("using context api");

// function Count1() {
//   const [count, setCount] = useState(0);

//   function incrementCount() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <updateCountAdd.Provider value={count}>
//         <Count />
//         <h1>This is add: {count}</h1>
//         <button onClick={incrementCount}>Click here +</button>
//       </updateCountAdd.Provider>
//     </>
//   );
// }

// export default Count1;
// export { updateCountAdd };

import React from "react";

const Count1 = ({ onIncrement }) => {
  //use const for
  return (
    <>
      <button onClick={onIncrement}>Add</button>
    </>
  );
};

export default Count1;
