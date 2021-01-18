import React from "react";

export default function teamCards(props) {
  const Teams = props.teams;
  return (
    <div>
      <h4>Current Team Members</h4>
      {Teams.map((team) => (
        <div className="team-card">
          <p>Name: {Teams.name}</p>
          <p>Email: {Teams.email}</p>
          <p>Role: {Teams.role}</p>
        </div>
      ))}
    </div>
  );
}
