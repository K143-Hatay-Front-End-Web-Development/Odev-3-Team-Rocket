import React from "react";
import { useGameContext } from "../../contexts/GameContext/GameContext";
import { answerBtn } from "../../assets/svgs";
import "./Answers.css";

const Answers = () => {
  const { quiz, question, setQuestion } = useGameContext();

  const handleClick = () => {
    if (question < quiz.length - 1) {
      setQuestion(question + 1);
    } else {
      setQuestion(0);
    }
  };

  return (
    <div className="answers">
      {quiz[question]?.answers &&
        quiz[question].answers.map((_, index) => {
          return (
            <button
              key={index}
              onClick={handleClick}
              className="btn answer-btn"
            >
              {answerBtn(quiz[question]?.answers[index])}
            </button>
          );
        })}
    </div>
  );
};

export default Answers;
