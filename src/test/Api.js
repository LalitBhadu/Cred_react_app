import React, { createContext } from "react";
import Navbar from "./Navbar";
import Api1 from "./Api1";

const dataLalit = createContext();
const dataAge = createContext();
const dataLocate = createContext();
function Api() {
  const name = "lalit kumar";
  const age = 23;
  const locate = "Mohali";

  return (
    <>
      <Navbar />
      <dataLalit.Provider value={name}>
        <dataAge.Provider value={age}>
          <dataLocate.Provider value={locate}>
            <Api1 />
          </dataLocate.Provider>
        </dataAge.Provider>
      </dataLalit.Provider>
    </>
  );
}

export default Api;
export { dataLalit, dataAge, dataLocate };
