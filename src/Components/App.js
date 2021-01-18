import React, { useState } from "react";
import Forms from "./Forms";
import TeamCard from "./Team-card";

export default function App() {
  const [teams, setTeams] = useState([]);

  return (
    <div>
      <Forms setTeams={setTeams} />
      <TeamCard teams={teams} />
    </div>
  );
}
