import React, { useEffect, useReducer } from "react";

import UserList from "./UserList";
import AddUserForm from "./AddUserForm";

import usersReducer from "../reducers/usersReducer";
import UsersContext from "../context/users-context";

const App = () => {
  // MOST OF YOUR CODE GOES HERE

  const [users, dispatch] = useReducer(usersReducer, []);

  // Populate the screen with the list of users from localstorage (if exist)
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      dispatch({ type: "POPULATE_USERS", users });
    }
  }, []);

  // Persist the users data to localstorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <UsersContext.Provider value={{ users, dispatch }}>
      <div className="App">
        <div>
          <h2 className="subtitle">React Challenge! by: T.F.</h2>
        </div>

        {/* Collect User Inputs */}
        <AddUserForm />
      </div>
      {/* List the users */}
      <UserList />
    </UsersContext.Provider>
  );
};

export { App as default };
