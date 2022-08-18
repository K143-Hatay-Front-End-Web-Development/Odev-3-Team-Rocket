import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { default as GameProvider } from "./contexts/GameContext/GameContext";
import HomePage from "./routes/HomePage/HomePage";
import GamePage from "./routes/GamePage/GamePage";
import ResultPage from "./routes/ResultPage/ResultPage";

function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game" element={<GamePage />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
}

export default App;
