import React from "react";
import { dataLalit, dataAge, dataLocate } from "./Api";

function Api1() {
  return (
    <>
      <dataLalit.Consumer>
        {(name) => {
          return (
            <dataAge.Consumer>
              {(age) => {
                return (
                  <dataLocate.Consumer>
                    {(locate) => {
                      return (
                        <h1>
                          hello my name {name} my age {age} and Iam locate_
                          {locate}
                        </h1>
                      );
                    }}
                  </dataLocate.Consumer>
                );
              }}
            </dataAge.Consumer>
          );
        }}
      </dataLalit.Consumer>
    </>
  );
}

export default Api1;
