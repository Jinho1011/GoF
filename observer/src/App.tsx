import React, { useEffect } from "react";
import { ScoreBoard } from "./ScoreBoard";
import { GoalHistory } from "./GoalHistory";
import gameSubject, { Team } from "./model/Game";

function App() {
  useEffect(() => {
    const delay = (delay: number, team: Team) => {
      setTimeout(() => {
        gameSubject.score(team);
      }, delay * 1000);
    };

    delay(1, "Home");
    delay(3, "Away");
    delay(5, "Home");
  }, []);

  return (
    <div>
      <ScoreBoard />
      <hr />
      <GoalHistory />
    </div>
  );
}

export default App;
