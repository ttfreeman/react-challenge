import React from "react";

const UserLabel = ({ user }) => {
  return (
    <div className="input-display">
      <p>Display Name: {user.name} </p>
      <p>Display Age: {user.age} </p>
    </div>
  );
};

export { UserLabel as default };
