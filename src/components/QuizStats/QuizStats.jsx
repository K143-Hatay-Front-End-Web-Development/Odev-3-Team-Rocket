import React from "react";
import { useGameContext } from "../../contexts/GameContext/GameContext";

import "./QuizStats.css";

const QuizStats = () => {
  const { question, quizStats, setQuizStats } = useGameContext();

  return (
    <div className="base">
      <ul>
        <li>Puan: {quizStats.point}</li>
        <li>Tur: {quizStats.tour}</li>
        <li>Soru: {question + 1}</li>
      </ul>
    </div>
  );
};

export default QuizStats;
