import React from "react";

export default function teamCards(props) {
  const Teams = props.teams;
  return (
    <div>
      <h4>Current Team Members</h4>
      {Teams.map((teamMember) => (
        <div className="team-card">
          <p>Name: {teamMember.name}</p>
          <p>Email: {teamMember.email}</p>
          <p>Role: {teamMember.role}</p>
        </div>
      ))}
    </div>
  );
}
