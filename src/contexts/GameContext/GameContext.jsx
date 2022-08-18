import { createContext, useContext, useState } from "react";

export const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

const Provider = (props) => {
  const [operator, setOperator] = useState(null);
  const [quiz, setQuiz] = useState([]);
  const [question, setQuestion] = useState(0);
  const [answer, setAnswer] = useState(null);

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
