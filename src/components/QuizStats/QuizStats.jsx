import React from "react";
import { useGameContext } from "../../contexts/GameContext/GameContext";

import "./QuizStats.css";

const QuizStats = () => {
  const { question } = useGameContext();

  return (
    <div className="base">
      <ul>
        <li>Puan: 120</li>
        <li>Tur: 2</li>
        <li>Soru: {question + 1}</li>
      </ul>
    </div>
  );
};

export default QuizStats;
