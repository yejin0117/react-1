function MyButton(){
  return(
    <button>I'm My button component</button>
  )
}

//return할 때 값이 여러개면 랩핑 필요
export default function App() {
  return(
    <div>
      <h1>Hello World!</h1>
      <MyButton/>
    </div>
  )
}