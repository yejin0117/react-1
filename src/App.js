import './App.css'
import Game from "./Game";


//return할 때 값이 여러개면 랩핑 필요
export default function App() {
  return(
      <div>
        <h1>Tic Tac Toe</h1>
        <Game />
      </div>
  )
}