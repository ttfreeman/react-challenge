# Submission by Tony Freeman

I have added the requested functionality to update the UI in realtime as user types the name and age. In addition, I have added a feature for users to be added as a list and persisted in local storage. I have also supplied `unit tests` for functionalities above. For state management, I have have taken advantage of the most recent ReactJs features such as `React Hooks` and `Context API`. The app is containerized with docker and deployed to azure, accessible at the following link: `http://connectus-challenge.eastus.azurecontainer.io/`.

## Code refactor

I have refactor the code by moving components into a separate folder under `./src/components` and created other designated folders for `tests`, and `reducers` and `context`. For the entire assignment, I have only added one new library (`uuid`) to assign a new unique id for users.

## New features

The following features are added to the code:

1. Realtime user input for name and age reflects on the UI,
2. State mangement using React Hooks (useState, useEffect, useRef, useReducer, etc) and React Context API,
3. Functionality to add or remove users (based on their name and age),
4. New users are added to the state and persisted in the localstorage,
5. Unit tests are supplied for reducer function and components render,
6. Form validation to ensure a new user can only be added if both name and age are given,
7. Autofocus curser is placed in name input box in initial page render and subsequent to adding a new ueser,
8. The App is containerized (Dockefie included) and deployed to Azure.
9. Live app available at: `http://connectus-challenge.eastus.azurecontainer.io/`.
10. Github repo: `https://github.com/ttfreeman/react-challenge`

## Other features

There is a lot of room for enhancements such as additional tests, PWA, profiler, more form validations, default values, and so on.
