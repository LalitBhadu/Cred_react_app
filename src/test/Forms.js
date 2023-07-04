import React, { useState } from "react";
import Navbar from "./Navbar";

function Forms() {
  const [user, setUser] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);

  function UserHandler(event) {
    let item = event.target.value;
    if (item.length < 4) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
    console.log(event.target.value);
  }

  function passwordHandler(event) {
    let item = event.target.value;
    if (item.length < 4) {
      setPasswordErr(true);
    } else {
      setPasswordErr(false);
    }
    setPassword(item);
    console.log(event.target.value);
  }

  function loginhandler(event) {
    if (user.length < 4 || password.length < 4) {
      alert("Please input valid data");
    } else {
      alert("login");
    }
    event.preventDefault();
  }

  return (
    <>
      <Navbar />
      <div className="container" style={{ backGroundColor: "red" }}>
        <h1>Login Form</h1>
        <form onSubmit={loginhandler}>
          <input type="text" name="user" onChange={UserHandler} />
          {userErr ? <span>user invalid</span> : null}
          <br />
          <br />
          <input type="password" name="password" onChange={passwordHandler} />
          {passwordErr ? <span>user invalid</span> : null}

          <br />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}

export default Forms;
