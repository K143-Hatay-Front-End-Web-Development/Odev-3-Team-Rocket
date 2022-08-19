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

// Array of operators to be displayed on the home page.
const operators = ["Toplama", "Çıkarma", "Çarpma", "Bölme"];

const HomePage = () => {
  const { operator, setQuiz } = useGameContext();

  useEffect(() => {
    const questions = []; // Create an empty array to store quiz questions

    // Add quiz questions to the array depending on the operator.
    // This creates 10 questions for selected operator.
    for (let i = 0; i < 10; i++) {
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

    // Set the quiz questions to the state
    setQuiz(questions);
  }, [operator]);

  return (
    <div className="container home-wrapper">
      <header>{header}</header>
      <section className="home">
        <MainStats /> {/* Main statistics of player */}
        <div>
          {/* Map over the operators array and create operator buttons */}
          {operators.map((opr, index) => {
            return <OperatorButton key={index} text={opr} />;
          })}
        </div>
      </section>
      <Link
        onClick={() =>
          // throws a warning if the player didn't choose the operator
          operator === null && alert("Lütfen dört işlemden birini seçiniz.")
        }
        className="btn large-btn"
        // Navigate to the game page when the operator selected. Otherwise, do nothing.
        to={operator !== null ? "/game" : "#"}
      >
        {startBtn}
      </Link>
    </div>
  );
};

export default HomePage;
