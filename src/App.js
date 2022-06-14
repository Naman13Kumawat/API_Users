import React from "react";
// import { createStore } from "redux";

import useFetch from "./hooks/useFetch.js";

import Button from "./components/Button/Button.jsx";

export default function App() {
  const [url, setUrl] = React.useState("https://reqres.in/api/users?page=2");
  const { data } = useFetch(url);
  
  // const initialState = {
  //   userData: []
  // };

  // const reducer = (state = initialState, action) => {
  //   switch (action.type) {
  //     case "GET USER":
  //       return getData() ;
  //     default:
  //       return state;
  //   }
  // };

  // const store = createStore(reducer);
  // const unsubscribe = store.subscribe(() => {
  //     console.log("Updated State: ", store.getState());
  //   });
  //   store.dispatch({type: "GET USER"});
  // unsubscribe();

  // console.log(store.getState());

  return (
    <>
      <Button users={data} />
    </>
  );
}
