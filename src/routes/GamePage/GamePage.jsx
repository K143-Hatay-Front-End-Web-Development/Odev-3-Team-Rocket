import { useGameContext } from "../../contexts/GameContext/GameContext";
import { Link } from "react-router-dom";
import "./GamePage.css";
import QuizStats from "../../components/QuizStats/QuizStats";
import QuestionSection from "../../components/QuestionSection/QuestionSection";
import Answers from "../../components/Answers/Answers";

const GamePage = () => {
  const { quiz, question, answer } = useGameContext();

  const backgroundStyles = (() => {
    return answer === true
      ? "bg-answer-true"
      : answer === false
      ? "bg-answer-false"
      : "";
  })();

  return (
    <div className={`base-gamepage ${backgroundStyles}`}>
      <div className="container game-wrapper">
        {quiz[question]?.answers ? (
          <div>
            <div className="info">
              <QuizStats />
            </div>
            <div className="game">
              <QuestionSection />
              <Answers />
            </div>
          </div>
        ) : (
          <div className="error">
            <h1>Go Home and Choose Quiz</h1>
            <Link className="go-home-btn" to="/">
              GO HOME
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePage;
