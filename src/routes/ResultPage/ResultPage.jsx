import React from "react";
import { useGameContext } from "../../contexts/GameContext/GameContext";
import { Link } from "react-router-dom";
import { result, returnBtn, problems } from "../../assets/svgs";
import "./ResultPage.css";

const ResultPage = () => {
  const { quiz, question } = useGameContext();

  return (
    <section className="result-base">
      {
        // If there is no question, show the Go Home button.
        quiz[question]?.answers ? (
          <div className="container result-wrapper">
            <div className="stats-section">
              {result}
              {/* Statistics for the relevant tour */}
              <p>Puan:</p>
              <p>Dogru Cevap:</p>
              <p>Yanlıs Cevap:</p>
              <button className="btn large-btn">
                {/* Return homepage btn */}
                <Link className="btn large-btn" to="/">
                  {returnBtn}
                </Link>
              </button>
            </div>
            <div className="problems">
              <div className="problems-header">{problems}</div>
              {/* Map over the quiz and list the questions. */}
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
          </div>
        ) : (
          <div className="error">
            <h1>Go Home and Choose Quiz</h1>
            {/* If there are no questions, go to the home page. */}
            <Link className="go-home-btn" to="/">
              GO HOME
            </Link>
          </div>
        )
      }
    </section>
  );
};

export default ResultPage;
