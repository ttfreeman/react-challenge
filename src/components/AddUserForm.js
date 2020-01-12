import React, { useState, useRef, useEffect, useContext } from "react";
import UsersContext from "../context/users-context";

import UserLabel from "./UserLabel";
const uuid = require("uuid");

const AddUserForm = () => {
  const inputEl = useRef(null);
  const { dispatch } = useContext(UsersContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    inputEl.current.focus();
  }, []);

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
    inputEl.current.focus();
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
              ref={inputEl}
              className="input"
              type="text"
              placeholder="Enter your name, ex. Kevin"
              onChange={e => setName(e.target.value)}
              data-testid="name-input"
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
              data-testid="age-input"
            />
          </div>
          <button
            style={{
              background: "#b7fcae",
              margin: "20px"
            }}
            disabled={!name || !age}
          >
            add user
          </button>
        </form>
      </div>
    </>
  );
};

export { AddUserForm as default };
