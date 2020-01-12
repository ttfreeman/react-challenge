import React from "react";

// This is currently the top portion of the AddUserForm where the user name and age is displayed in realtime
// but since one might choose to place this at a different location, I have created a separate component
const UserLabel = ({ user }) => {
  return (
    <div className="input-display">
      <p>
        Display Name: <span data-testid="name-item">{user.name}</span>
      </p>
      <p>
        Display Age: <span data-testid="age-item">{user.age}</span>{" "}
      </p>
    </div>
  );
};

export { UserLabel as default };
