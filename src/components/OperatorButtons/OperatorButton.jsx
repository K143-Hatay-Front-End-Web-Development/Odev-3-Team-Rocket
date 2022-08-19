import React from "react";
import { useGameContext } from "../../contexts/GameContext/GameContext";
import { tick } from "../../assets/svgs";
import "./OperatorButton.css";

function OperatorButton({ text }) {
  const { operator, setOperator } = useGameContext();

  // Set the operator to the state when the button is clicked
  const handleClick = () => setOperator(text);

  return (
    <div className="operator">
      <button className="btn operator-btn" onClick={handleClick}>
        {text}
      </button>
      {/*Show tick if the operator is the same as the one in the state */}
      <p>{operator === text && tick}</p>{" "}
    </div>
  );
}

export default OperatorButton;
