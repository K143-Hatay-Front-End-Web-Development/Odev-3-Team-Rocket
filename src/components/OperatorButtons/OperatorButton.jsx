import React from "react";

import { tick } from "../../assets/svgs";

import "./OperatorButton.css";

function OperatorButton({ text, operator, setOperator }) {
  const handleClick = () => setOperator(text);

  return (
    <div className="operator">
      <button className="btn operator-btn" onClick={handleClick}>
        {text}
      </button>
      <p>{operator === text && tick}</p>
    </div>
  );
}

export default OperatorButton;
