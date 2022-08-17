import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Routes
import HomePage from "./routes/HomePage/HomePage";
import GamePage from "./routes/GamePage/GamePage";
import ResultPage from "./routes/ResultPage/ResultPage";

// import { Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
