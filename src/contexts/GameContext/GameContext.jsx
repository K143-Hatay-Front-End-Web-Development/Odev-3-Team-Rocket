import { createContext, useContext, useState } from "react";

export const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

const Provider = (props) => {
  const [operator, setOperator] = useState(null);
  const [quiz, setQuiz] = useState(Array(10).fill(""));

  return (
    <GameContext.Provider value={{ operator, setOperator, quiz, setQuiz }}>
      {props.children}
    </GameContext.Provider>
  );
};

export default Provider;
