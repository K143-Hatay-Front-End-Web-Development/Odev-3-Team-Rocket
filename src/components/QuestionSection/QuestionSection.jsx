import React from "react";
import { useGameContext } from "../../contexts/GameContext/GameContext";
import { student, unhappyStudent, happyStudent } from "../../assets/svgs";
import "./QuestionSection.css";

const QuestionSection = () => {
  const { quiz, question, answer } = useGameContext();

  const changeStudent = () => {
    const questionText = `${quiz[question]?.number1} ${quiz[question]?.operator} ${quiz[question]?.number2}`;

    if (answer) {
      return happyStudent(questionText);
    } else if (answer === false) {
      return unhappyStudent(questionText);
    } else {
      return student(questionText);
    }
  };

  return <div className="student">{changeStudent()}</div>;
};

export default QuestionSection;
