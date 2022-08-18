import React from "react";
import { useGameContext } from "../../contexts/GameContext/GameContext";
import { student, unhappyStudent, happyStudent } from "../../assets/svgs";

const QuestionSection = () => {
  const { quiz, question } = useGameContext();

  return (
    <div className="student">
      {student(
        `${quiz[question]?.number1} ${quiz[question]?.operator} ${quiz[question]?.number2}`
      )}
    </div>
  );
};

export default QuestionSection;
