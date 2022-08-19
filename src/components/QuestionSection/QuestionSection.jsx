import React from "react";
import { useGameContext } from "../../contexts/GameContext/GameContext";
import { student, unhappyStudent, happyStudent } from "../../assets/svgs";
import "./QuestionSection.css";

const QuestionSection = () => {
  const { quiz, question, answer } = useGameContext();

  const changeStudent = () => {
    // Store the question. (e.g. 8 x 2)
    const questionText = `${quiz[question]?.number1} ${quiz[question]?.operator} ${quiz[question]?.number2}`;

    // If the answer is correct display happy student. Otherwise, display unhappy student. Default display student.
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
