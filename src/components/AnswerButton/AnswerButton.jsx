import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./AnswerButton.css";
import { answerBtn, tick } from "../../assets/svgs";
import { useGameContext } from "../../contexts/GameContext/GameContext";

const AnswerButton = ({ num, clickedBtn, setClickedBtn }) => {
  const { quiz, question, setQuestion, setAnswer, setQuizStats, quizStats } =
    useGameContext();
  const navigate = useNavigate();

  const handleClick = () => {
    if (clickedBtn !== undefined) return; // If the button is clicked, do nothing.
    setClickedBtn(num); // Store the clicked button's number.

    if (quiz[question]?.answers[num] === quiz[question]?.result) {
      setAnswer(true); // if the answer is correct, set the answer to true.
      quiz[question].isTrue = tick; // if the answer is correct, set the isTrue to tick.
      setQuizStats((quizStats) => ({
        ...quizStats,
        point: quizStats.point + quiz[question].point,
        correctAnswers: quizStats.correctAnswers + 1,
      })); // if the answer is correct, increase the point and increase the correct answers.
    } else if (quiz[question]?.answers[num] !== quiz[question]?.result) {
      setAnswer(false); // if the answer is incorrect, set the answer to false.
      setQuizStats((quizStats) => ({
        ...quizStats,
        wrongAnswers: quizStats.wrongAnswers + 1,
      })); // if the answer is wrong, increase the wrong answers
    }

    // When player clicked a button , go to the next question in X seconds. If there is no question, go to the result page.
    setTimeout(() => {
      if (question < quiz.length - 1) {
        // If the question is not the last question, go to the next question.
        // Reset clicked button and answer for next question.
        setQuestion(question + 1);
        setClickedBtn();
        setAnswer(null);
      } else {
        // if the game is over, navigate to the results page and reset everything.
        setClickedBtn();
        setAnswer(null);
        setQuestion(0);
        navigate("/result");
      }
    }, 2000);
  };

  // if clickedBtn's text is equal to the result, btn-color green.
  const trueBtnStyle = (() => {
    return (
      clickedBtn !== undefined &&
      quiz[question]?.answers[num] === quiz[question].result &&
      "answerTrue"
    );
  })();

  // if clickedBtn equal to button's num, btn-color black.
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
