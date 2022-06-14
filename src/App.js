import React from "react";
import useFetch from "./hooks/useFetch.js";

import Button from "./components/Button/Button.jsx";
import { createStore } from "redux";

export default function App() {
  const url = "https://reqres.in/api/users?page=2";
  const { data } = useFetch(url);

  function reducer(state = {}, action) {
    switch (action.type) {
      case "FETCH":
        return data;
      default:
        return state;
    }
  }

  const store = createStore(reducer);
  const unsubscribe = store.subscribe(() => {});
  store.dispatch({ type: "FETCH" });
  unsubscribe();

  return <Button users={store.getState()} />;
}
