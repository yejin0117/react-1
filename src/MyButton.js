export default function MyButton(){
  function handleClick(){
    alert('You clicked me!');
  }

  return(
    <button onClick={handleClick}>
      I'm My button component
      </button>
  )
}