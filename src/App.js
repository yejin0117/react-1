import './App.css'
import Board from './Board';


//return할 때 값이 여러개면 랩핑 필요
export default function App() {
  return(
      <div>
        <h1>Tic Tac Toe</h1>
        <Board />
      </div>
  )
}