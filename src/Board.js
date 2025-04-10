import Square from "./Square";
import { useState } from 'react';

export default function Board() {
  const [ squares, setSquare ] = useState(Array(9).fill(null))

  function handleClick(){
    const nextSquares = squares.slice();
    nextSquares[0]="X";
    setSquare(nextSquares);
  }
  return (
    <>
      <div className="board-row">
      <Square value={squares[0]} onSquareClikc={handleClick}/>
      <Square value={squares[1]}/>
      <Square value={squares[2]}/>
      </div>
      <div className="board-row">
      <Square value={squares[3]} onSquareClikc={handleClick}/>
      <Square value={squares[4]}/>
      <Square value={squares[5]}/>
      </div>
      <div className="board-row">
      <Square value={squares[6]} onSquareClikc={handleClick}/>
      <Square value={squares[7]}/>
      <Square value={squares[8]}/>
      </div>
    </>
  );
}
