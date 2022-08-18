import { createContext, useContext, useState } from "react";

export const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

const Provider = (props) => {
  const [operator, setOperator] = useState(null);
  const [quiz, setQuiz] = useState(Array(10).fill(""));
  const [question, setQuestion] = useState(0);

  return (
    <GameContext.Provider
      value={{ operator, setOperator, quiz, setQuiz, question, setQuestion }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default Provider;
