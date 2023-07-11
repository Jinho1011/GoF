import React, { useEffect, useReducer } from "react";
import gameSubject, { Team, Observer } from "./model/Game";

interface Score {
  home: number;
  away: number;
}

const onGoalScored = (score: Score, team: Team) => {
  if (team === "Home") {
    return {
      home: score.home + 1,
      away: score.away,
    };
  }

  return {
    home: score.home,
    away: score.away + 1,
  };
};

export const ScoreBoard: React.FC = () => {
  const [score, dispatch] = useReducer(onGoalScored, {
    home: 0,
    away: 0,
  });

  useEffect(() => {
    gameSubject.register(dispatch as Observer);

    return () => {
      gameSubject.remove(dispatch);
    };
  }, []);

  return (
    <div>
      {`Home - ${score.home}`}
      {`Away - ${score.away}`}
    </div>
  );
};
