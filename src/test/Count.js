// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";

// function Count() {
//   const [count, setCount] = useState(0);
//   const [data, setData] = useState("Lalit");
//   useEffect(() => {
//     console.log("lalit bhadu");
//   });
//   function updateCount() {
//     setCount(count + 1);
//   }
//   function updateCountr() {
//     setCount(count - 1);
//   }
//   function updateData() {
//     setData("Lalit Bhadu");
//   }
//   return (
//     <>
//       <Navbar />
//       <div className="container">
//         <h1>This is {count} total count</h1>
//         <button onClick={updateCount}>click hear +</button>
//         <button onClick={updateCountr}>click hear -</button>
//         <div>
//           <h1>this is updated.{data}. name</h1>
//           <button onClick={updateData}>update</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Count;

// import React from "react";
// import Navbar from "./Navbar";
// import { updateCountAdd } from "./Count1";
// import { updateCountLess } from "./Count2";

// function Count() {
//   return (
//     <>
//       <Navbar />
//       <updateCountAdd.Consumer>
//         {(add) => {
//           return (
//             <updateCountLess.Consumer>
//               {(less) => {
//                 return (
//                   <h1>
//                     this is add:{add} and this is less: {less}
//                   </h1>
//                 );
//               }}
//             </updateCountLess.Consumer>
//           );
//         }}
//       </updateCountAdd.Consumer>
//     </>
//   );
// }

// export default Count;

import React from "react";
import Navbar from "./Navbar";
import { updateCountAdd } from "./Count1";
import { updateCountLess } from "./Count2";

function Count() {
  return (
    <>
      <Navbar />
      <updateCountAdd.Consumer>
        {(count) => (
          <updateCountLess.Consumer>
            {(less) => (
              <h1>
                This is add: {count} and this is less: {less}
              </h1>
            )}
          </updateCountLess.Consumer>
        )}
      </updateCountAdd.Consumer>
    </>
  );
}

export default Count;
