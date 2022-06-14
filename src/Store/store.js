import {createStore} from '@reduxjs/toolkit'
import reducer from "./reducer.js"



  const store = createStore(reducer);
  const unsubscribe = store.subscribe(() => {
    console.log("Updated State: ", store.getState());
  });
  store.dispatch({type: "FETCH"});
  unsubscribe();

export default store;