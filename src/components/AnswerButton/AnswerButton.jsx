import React, { useState } from "react";
import "./AnswerButton.css";
import { answerBtn } from "../../assets/svgs";
import { useGameContext } from "../../contexts/GameContext/GameContext";

const AnswerButton = ({ num, clickedBtn, setClickedBtn }) => {
  const { quiz, question, setQuestion, setAnswer } = useGameContext();

  const handleClick = () => {
    if (clickedBtn !== undefined) return;

    setClickedBtn(num);

    if (quiz[question]?.answers[num] === quiz[question]?.result) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }

    setTimeout(() => {
      if (question < quiz.length - 1) {
        setQuestion(question + 1);
        setClickedBtn();
        setAnswer(null);
      } else {
        setQuestion(0);
        setClickedBtn();
        setAnswer(null);
      }
    }, 3000);
  };

  const trueBtnStyle = (() => {
    return (
      clickedBtn !== undefined &&
      quiz[question]?.answers[num] === quiz[question].result &&
      "answerTrue"
    );
  })();

  const clickedBtnStyle = (() => {
    return num === clickedBtn && "answerClicked";
  })();

  return (
    <button
      onClick={handleClick}
      className={`btn answer-btn ${clickedBtnStyle} ${trueBtnStyle}`}
    >
      {answerBtn(quiz[question]?.answers[num])}
    </button>
  );
};

export default AnswerButton;
