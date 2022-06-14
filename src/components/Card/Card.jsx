import React from "react";
import styles from "./Card.module.css";
export default function Card({ user }) {
  return (
    <div className={`${styles.card}`}>
      {user ? <div className={`${styles.info}`}>
      <img className={`${styles.profileImg}`} src={user.avatar} alt="profileImage"/>
      <p>Username: {user.first_name} {user.last_name}</p>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      </div> : <div>Click on any button!</div>}
    </div>
  );
}
