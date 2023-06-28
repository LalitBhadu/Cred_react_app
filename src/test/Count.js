import React, { useEffect, useState } from "react";

function Count() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState("Ram");
  useEffect(() => {
    console.log("lalit bhadu");
  });
  function updateCount() {
    setCount(count + 1);
  }
  function updateCountr() {
    setCount(count - 1);
  }
  function updateData() {
    setData("Sita");
  }
  return (
    <div>
      <h1>This is {count} total count</h1>
      <button onClick={updateCount}>click hear +</button>
      <button onClick={updateCountr}>click hear -</button>
      <div>
        <h1>this is updated.{data}. name</h1>
        <button onClick={updateData}>update</button>
      </div>
    </div>
  );
}

export default Count;
