import React, { useContext } from "react";
import User from "./User";
import UsersContext from "../context/users-context";

const UserList = () => {
  const { users } = useContext(UsersContext);

  return users.map(user => <User key={user.id} user={user} />);
};

export { UserList as default };
