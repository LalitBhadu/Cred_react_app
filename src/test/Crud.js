import React, { useState } from "react";
import "./Crud.css";
import Navbar from "./Navbar";

const Crud = (props) => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue) {
      if (editMode) {
        // Update existing item
        const updatedData = [...data];
        updatedData[editIndex] = inputValue;
        setData(updatedData);
        setEditMode(false);
        setEditIndex(null);
      } else {
        // Add new item
        const newData = [...data, inputValue];
        setData(newData);
      }
      setInputValue("");
    }
  };

  const handleUpdateItem = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setInputValue(data[index]);
  };

  const handleDeleteItem = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  // const handleClearItem = () => {
  //   setData("");
  // };

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>
          <strong>{props.title}</strong>
        </h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder={props.discrip}
        />
        <button onClick={handleAddItem} type="button" className="btn1">
          {editMode ? "Update Item" : "Add Item"}
        </button>

        <ul>
          {data.map((item, index) => (
            <li key={index}>
              {item}
              <button
                onClick={() => handleUpdateItem(index)}
                type="button"
                className="btn2"
              >
                Update
              </button>
              <button
                onClick={() => handleDeleteItem(index)}
                type="button"
                className="btn3"
              >
                Delete
              </button>
              {/* <button
              onClick={() => handleClearItem(index)}
              type="button"
              className="btn3"
            >
              Clear
            </button> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Crud;

/* import React, { useState, useRef } from "react";
import "./Crud.css";

function Crud(props) {
  const [text, setText] = useState("lalit crud app");
  const textRef = useRef(null);

  const handleCopyClick = () => {
    textRef.current.select();
    document.execCommand("copy");
    console.log("Copy button was clicked");
  };

  const handleDeleteClick = () => {
    let newText = "";
    setText(newText);
    console.log("delete button was clicked");
  };
  const handleOnChange = (event) => {
    console.log("Change button was clicked");
    setText(event.target.value);
  };
  return (
    <div>
      <h1>{props.title}</h1>
      <div className="mb-2">
        <label for="exampleFormControlTextarea1" className="form-label" />
        <textarea
          className="form-control"
          id="myCrud"
          rows="3"
          ref={textRef}
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>

      <button
        type="button"
        className="btn btn-danger"
        onClick={handleCopyClick}
      >
        copy
      </button>
      <button
        type="button"
        className="btn btn-warning"
        onClick={handleDeleteClick}
      >
        delete
      </button>
    </div>
  );
}

export default Crud;
 */
