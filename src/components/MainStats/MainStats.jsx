import React from "react";
import { useGameContext } from "../../contexts/GameContext/GameContext";

function MainStats() {
  const { stats } = useGameContext();

  return (
    <div>
      <p>Puan: {stats.point}</p>
      <p>Çözülen Sayısı: {stats.answeredQuestions}</p>
      <p>Yanlıs Cevap: {stats.wrongAnswers}</p>
      <p>Dogru Cevap: {stats.correctAnswers}</p>
    </div>
  );
}

export default MainStats;
