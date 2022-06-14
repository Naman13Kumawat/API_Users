import React from "react";
import useFetch from "../../hooks/useFetch.js";
import Card from "../Card/Card.jsx";
import styles from "./Button.module.css";
import { createStore } from "redux";
export default function Button({ users }) {
  const [userUrl, setUrl] = React.useState(null);
  const handleClick = (e) => {
    setUrl(`https://reqres.in/api/users/${e.target.value}`);
  };

  const { data: user } = useFetch(userUrl);

  function reducer(state = {}, action) {
    switch (action.type) {
      case "FETCH":
        return user;
      default:
        return state;
    }
  }

  const store = createStore(reducer);
  const unsubscribe = store.subscribe(() => {});
  store.dispatch({ type: "FETCH" });
  unsubscribe();

  let count = users && users.length;
  const btnNo = [];
  for (let i = 1; i <= count; i++) {
    btnNo.push(i);
  }
  return (
    <>
      <Card user={store.getState()} />
      <div className={`${styles.btnGrp}`}>
        {btnNo.map((no) => {
          return (
            <button className={styles.btn} onClick={handleClick} key={no} value={no}>
              User: {no}
            </button>
          );
        })}
      </div>
    </>
  );
}
