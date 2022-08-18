import React from "react";
import { useGameContext } from "../../contexts/GameContext/GameContext";
import { Link } from "react-router-dom";
import { result, returnBtn, problems } from "../../assets/svgs";
import "./ResultPage.css";

const ResultPage = () => {
  const { quiz } = useGameContext();

  return (
    <section className="container result-wrapper">
      <div className="stats-section">
        {result}
        <p>Puan:</p>
        <p>Dogru Cevap:</p>
        <p>Yanlıs Cevap:</p>
        <button className="btn large-btn">
          <Link className="btn large-btn" to="/">
            {returnBtn}
          </Link>
        </button>
      </div>
      <div className="problems">
        <div className="problems-header">{problems}</div>
        {quiz.map((question, index) => {
          return (
            <div key={index} className="question-results">
              <div className="problems">
                <p>
                  {`${question.number1} ${question.operator} ${question.number2} = ${question.result}`}
                </p>
              </div>
              <div className="problem-result">
                <p>{question.isTrue}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ResultPage;
