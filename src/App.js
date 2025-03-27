import MyB from "./MyButton.js"
import { Button1,Button3 } from "./ButtonLib.js"
import AP from "./AboutPage.js"
import ProF from "./Profile.js"
import './App.css'
import ShopLi from "./ShoppingList.js"

//return할 때 값이 여러개면 랩핑 필요
export default function App() {
  return(
    <div className="wrapper">
      <h1>Hello React</h1>
      <MyB/> <br/>
      <Button1/> &nbsp;
      <Button3/>
      <AP/>
      <ProF/>
      <ShopLi/>
    </div>
  )
}