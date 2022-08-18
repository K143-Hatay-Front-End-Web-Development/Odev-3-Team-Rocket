import { useEffect } from "react";
import { Link } from "react-router-dom";
import { header, startBtn, tick } from "../../assets/svgs";
import { useGameContext } from "../../contexts/GameContext/GameContext";
import "./HomePage.css";
import MainStats from "../../components/MainStats/MainStats";
import OperatorButton from "../../components/OperatorButtons/OperatorButton";
import {
  additionQuestion,
  subtractionQuiz,
  multiplicationQuiz,
  divisionQuiz,
} from "./QuizFunctions.js";

const operators = ["Toplama", "Çıkarma", "Çarpma", "Bölme"];

const HomePage = () => {
  const { operator, setOperator, setQuiz } = useGameContext();

  useEffect(() => {
    const questions = [];

    for (let i = 0; i <= 10; i++) {
      if (operator === "Toplama") {
        questions.push(additionQuestion());
      } else if (operator === "Çıkarma") {
        questions.push(subtractionQuiz());
      } else if (operator === "Çarpma") {
        questions.push(multiplicationQuiz());
      } else if (operator === "Bölme") {
        questions.push(divisionQuiz());
      }
    }

    setQuiz(questions);
  }, [operator]);

  return (
    <div className="container home-wrapper">
      <header>{header}</header>
      <section className="home">
        <MainStats />
        <div>
          {operators.map((opr, index) => {
            return (
              <OperatorButton
                key={index}
                text={opr}
                operator={operator}
                setOperator={setOperator}
              />
            );
          })}
        </div>
      </section>
      <Link
        onClick={() =>
          operator === null && alert("Lütfen dört işlemden birini seçiniz.")
        }
        className="btn large-btn"
        to={operator !== null ? "/game" : "#"}
      >
        {startBtn}
      </Link>
    </div>
  );
};

export default HomePage;
