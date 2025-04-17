import { useState } from "react";
import Board from "./Board";


export default function Game() {
  const [xIsNext, setIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setCurrentMove(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
