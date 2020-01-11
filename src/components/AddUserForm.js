import React, { useState, useContext } from "react";
import UsersContext from "../context/users-context";

import UserLabel from "./UserLabel";
const uuid = require("uuid");

const AddUserForm = () => {
  const { dispatch } = useContext(UsersContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const addUser = e => {
    e.preventDefault();
    dispatch({
      type: "ADD_USER",
      name,
      age,
      id: uuid()
    });
    setName("");
    setAge("");
    document.getElementById("inputform").reset();
  };

  return (
    <>
      {/* Display Data */}
      <UserLabel user={{ name, age }} />

      <div className="inputs">
        {/* Input name */}
        <form id="inputform" onSubmit={addUser}>
          <div className="field">
            <label className="label">Name: </label>
            <input
              className="input"
              type="text"
              placeholder="Enter your name, ex. Kevin"
              onChange={e => setName(e.target.value)}
            />
          </div>

          {/* Input age */}
          <div className="field">
            <label className="label">&nbsp;&nbsp;&nbsp;Age: </label>
            <input
              className="input"
              type="number"
              placeholder="Enter your age, ex. 44"
              onChange={e => setAge(e.target.value)}
            />
          </div>
          <button>add user</button>
        </form>
      </div>
    </>
  );
};

export { AddUserForm as default };
