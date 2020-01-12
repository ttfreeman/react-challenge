import React, { useContext } from "react";
import UsersContext from "../context/users-context";

const User = ({ user }) => {
  const { dispatch } = useContext(UsersContext);

  return (
    <div>
      <p>
        Name: <span data-testid="username">{user.name}</span>{" "}
      </p>
      <p>Age: {user.age} </p>
      <button onClick={() => dispatch({ type: "REMOVE_USER", id: user.id })}>
        x
      </button>
    </div>
  );
};

export { User as default };
