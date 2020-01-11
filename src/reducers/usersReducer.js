const usersReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_USERS":
      return action.users;
    case "ADD_USER":
      return [...state, { id: action.id, name: action.name, age: action.age }];
    case "REMOVE_USER":
      return state.filter(user => user.id !== action.id);
    default:
      return state;
  }
};

export { usersReducer as default };
