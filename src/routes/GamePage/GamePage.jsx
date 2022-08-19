import { useGameContext } from "../../contexts/GameContext/GameContext";
import { Link } from "react-router-dom";
import "./GamePage.css";
import QuizStats from "../../components/QuizStats/QuizStats";
import QuestionSection from "../../components/QuestionSection/QuestionSection";
import Answers from "../../components/Answers/Answers";

const GamePage = () => {
  const { quiz, question, answer } = useGameContext();

  // If the answer is correct and question answered, bgColor is green. Otherwise, bgColor is red.
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
        {
          // If there is no question, show the Go Home button.
          quiz[question]?.answers ? (
            <div>
              <div className="info">
                {/* Statistics for the relevant tour */}
                <QuizStats />
              </div>
              <div className="game">
                {/* This component displays the question */}
                <QuestionSection />
                {/* This component displays the answers */}
                <Answers />
              </div>
            </div>
          ) : (
            <div className="error">
              <h1>Go Home and Choose Quiz</h1>
              {/* If the game started and user reload the page return home page. */}
              <Link className="go-home-btn" to="/">
                GO HOME
              </Link>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default GamePage;
