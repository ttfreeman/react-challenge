import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../components/App";

test("renders without crashing", () => {
  const { getByText } = render(<App />);

  const elem = getByText(/React Challenge/i);
  expect(elem).toBeInTheDocument();
});

test("realtime input text is reflected in label", () => {
  const { getByText, getByTestId } = render(<App />);
  const inputName = getByTestId("name-input");

  const newName = "Be";
  fireEvent.change(inputName, { target: { value: newName } });

  const labelName = getByTestId("name-item");

  expect(labelName.textContent).toBe(newName);
});

test("new user added to screen by clicking button", () => {
  const { getByText, getByTestId, rerender } = render(<App />);
  const inputName = getByTestId("name-input");
  const inputAge = getByTestId("age-input");
  const submitButton = getByText("add user");

  const newName = "Ben";
  const newAge = 12;
  fireEvent.change(inputName, { target: { value: newName } });
  fireEvent.change(inputAge, { target: { value: newAge } });
  fireEvent.click(submitButton);

  // rerender(<App />);
  const newUser = getByTestId("username");
  expect(newUser.textContent).toBe(newName);
});
