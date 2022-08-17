import React from "react";

// SVG
import {
  student,
  answerBtn,
  unhappyStudent,
  happyStudent,
} from "../../assets/svgs";

// CSS
import "./GamePage.css";

const GamePage = () => {
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
        <div className="student">{student("7 x 8")}</div>
        <div className="answers">
          <button className="btn answer-btn">{answerBtn(49)}</button>
          <button className="btn answer-btn">{answerBtn(64)}</button>
          <button className="btn answer-btn">{answerBtn(56)}</button>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
