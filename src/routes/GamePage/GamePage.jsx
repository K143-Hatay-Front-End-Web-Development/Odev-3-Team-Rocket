import { useState } from "react";
import { useGameContext } from "../../contexts/GameContext/GameContext";
import "./GamePage.css";

import {
  student,
  answerBtn,
  unhappyStudent,
  happyStudent,
} from "../../assets/svgs";

const GamePage = () => {
  const [question, setQuestion] = useState(0);
  const { quiz } = useGameContext();

  const handleClick = () => {
    if (question < quiz.length - 1) {
      setQuestion(question + 1);
    } else {
      setQuestion(0);
    }
  };

  return (
    <div className="container game-wrapper">
      <div className="info">
        <ul>
          <li>Puan: 120</li>
          <li>Tur: 2</li>
          <li>Soru: 7</li>
        </ul>
      </div>
      <div className="game">
        <div className="student">
          {student(
            `${quiz[question].number1} ${quiz[question].operator} ${quiz[question].number2}`
          )}
        </div>
        <div className="answers">
          <button onClick={handleClick} className="btn answer-btn">
            {answerBtn(quiz[question].answers[0])}
          </button>
          <button className="btn answer-btn">
            {answerBtn(quiz[question].answers[1])}
          </button>
          <button className="btn answer-btn">
            {answerBtn(quiz[question].answers[2])}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
