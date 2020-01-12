import React from "react";

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
