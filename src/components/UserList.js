import React, { useContext } from "react";
import User from "./User";
import UsersContext from "../context/users-context";

// renders a list of users when "add user" button is clicked
const UserList = () => {
  const { users } = useContext(UsersContext);

  return users.map(user => <User key={user.id} user={user} />);
};

export { UserList as default };
