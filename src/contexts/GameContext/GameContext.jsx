import { createContext, useContext, useState, useEffect } from "react";

export const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

const Provider = (props) => {
  const [operator, setOperator] = useState(null); // Choose operator and create quiz questions for it
  const [quiz, setQuiz] = useState([]); // Store quiz questions
  const [question, setQuestion] = useState(0); // Store current question number
  const [answer, setAnswer] = useState(null); // Store answer for current question (with this state we can change styles for correct and incorrect answers)

  const [quizStats, setQuizStats] = useState({
    point: 0,
    tour: 1,
    correctAnswers: 0,
    wrongAnswers: 0,
  }); // Store quiz stats

  const [stats, setStats] = useState({
    point: 0,
    answeredQuestions: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  }); // Store game stats

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("stats"));
    if (items) {
      setStats(items);
    }
  }, []);

  return (
    <GameContext.Provider
      value={{
        operator,
        setOperator,
        quiz,
        setQuiz,
        question,
        setQuestion,
        answer,
        setAnswer,
        quizStats,
        setQuizStats,
        stats,
        setStats,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default Provider;
