import React, { useContext } from "react";
import UsersContext from "../context/users-context";

// Creates a User row for each user added by clicking "add user" button. Also, has a button to remove a user.
const User = ({ user }) => {
  const { dispatch } = useContext(UsersContext);

  return (
    <div>
      <p>
        Name: <span data-testid="username">{user.name}</span>{" "}
      </p>
      <p>Age: {user.age} </p>
      {/* Adds a button to remove a user from list */}
      <button
        onClick={() => dispatch({ type: "REMOVE_USER", id: user.id })}
        style={{ background: "red" }}
      >
        x
      </button>
    </div>
  );
};

export { User as default };
