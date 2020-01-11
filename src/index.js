import React, { useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import UserList from "./components/UserList";
import AddUserForm from "./components/AddUserForm";

import usersReducer from "./reducers/usersReducer";
import UsersContext from "./context/users-context";

const App = () => {
  // MOST OF YOUR CODE GOES HERE

  // const [name, setName] = useState("");
  const [users, dispatch] = useReducer(usersReducer, []);
  // const [age, setAge] = useState(props.age);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    if (users) {
      dispatch({ type: "POPULATE_USERS", users });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <UsersContext.Provider value={{ users, dispatch }}>
      <div className="App">
        <div>
          <h2 className="subtitle">React Challenge! Good Luck</h2>
        </div>

        {/* Collect User Inputs */}
        <AddUserForm />
      </div>
      <UserList />
    </UsersContext.Provider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
