import React, { useState } from "react";
import { useGameContext } from "../../contexts/GameContext/GameContext";
import "./Answers.css";
import AnswerButton from "../AnswerButton/AnswerButton";

const Answers = () => {
  const { quiz, question } = useGameContext();
  const [clickedBtn, setClickedBtn] = useState();

  return (
    <div className="answers">
      {quiz[question]?.answers &&
        quiz[question].answers.map((_, index) => {
          return (
            <AnswerButton
              key={index}
              num={index}
              clickedBtn={clickedBtn}
              setClickedBtn={setClickedBtn}
            />
          );
        })}
    </div>
  );
};

export default Answers;
