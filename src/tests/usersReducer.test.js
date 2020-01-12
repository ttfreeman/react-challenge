import usersReducer from "../reducers/usersReducer";

const action = { id: 111111, name: "Ben", age: 25 };

test("adds a new user", () => {
  const state = usersReducer([], { ...action, type: "ADD_USER" });

  expect(state).toEqual([
    {
      id: 111111,
      name: "Ben",
      age: 25
    }
  ]);
});

test("adds two users in a row", () => {
  const state1 = usersReducer([], { ...action, type: "ADD_USER" });
  const state = usersReducer(state1, { ...action, type: "ADD_USER" });

  expect(state.length).toEqual(2);
});

test("removes a user", () => {
  const state1 = usersReducer([], { ...action, type: "ADD_USER" });
  const state = usersReducer(state1, { ...action, type: "REMOVE_USER" });

  expect(state).toEqual([]);
});
