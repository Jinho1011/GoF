import React, { useEffect, useState } from "react";
import gameSubject, { Team, Observer } from "./model/Game";

interface Goal {
  team: Team;
  time: number;
}

export const GoalHistory: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]);

  const onGoalScored: Observer = (teamThatScored: Team) => {
    const goal = {
      team: teamThatScored,
      time: new Date().getSeconds(),
    };

    setGoals((oldGoals) => oldGoals.concat(goal));
  };

  useEffect(() => {
    gameSubject.register(onGoalScored);

    return () => {
      gameSubject.remove(onGoalScored);
    };
  }, []);

  return (
    <div>
      {goals.map(({ team, time }) => {
        return <div>{`${team} '${time}`}</div>;
      })}
    </div>
  );
};
