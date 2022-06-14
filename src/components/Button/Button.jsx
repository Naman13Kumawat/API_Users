import React from "react";
import useFetch from "../../hooks/useFetch.js";
import Card from "../Card/Card.jsx";

export default function Button({ users }) {
  const [userUrl, setUrl] = React.useState(null)
  const handleClick = (e) => {
    setUrl(`https://reqres.in/api/users/${e.target.value}`);
  };

  const {data : user}  = useFetch(userUrl);

  
  let count = users && users.length;
  const btnNo = [];
  for (let i = 1; i <= count; i++) {
    btnNo.push(i);
  }
  return (
    <div>
      <Card user={user} />
      {btnNo.map((no) => {
        return (
          <button onClick={handleClick} key={no} value={no}>
            User: {no}
          </button>
        );
      })}
    </div>
  );
}
