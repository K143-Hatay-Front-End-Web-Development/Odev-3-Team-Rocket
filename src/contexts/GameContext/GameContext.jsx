import { createContext, useContext, useState } from "react";

export const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

const Provider = (props) => {
  const [operator, setOperator] = useState(null); // Choose operator and create quiz questions for it
  const [quiz, setQuiz] = useState([]); // Store quiz questions
  const [question, setQuestion] = useState(0); // Store current question number
  const [answer, setAnswer] = useState(null); // Store answer for current question (with this state we can change styles for correct and incorrect answers)

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
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default Provider;
