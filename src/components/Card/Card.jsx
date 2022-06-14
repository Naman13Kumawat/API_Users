import React from "react";

export default function Card({ user }) {
  return (
    <div className="card">
      {user? <div>{user.first_name}</div>: <div>Click on any button!</div>}
    </div>
  );
}