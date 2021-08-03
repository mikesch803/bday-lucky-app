import "./styles.css";
import lucky from "./lucky.gif";
import unluckygif from "./unluckygif.gif";
import { useState } from "react";
export default function App() {
  const [dob, setDob] = useState("");
  const [num, setNum] = useState();
  const [luck, setLuck] = useState("");
  const [pic, setPic] = useState();
  const luckygiff = (
    <img alt="happyImage" src={lucky} width="100%" height="200px" />
  );
  const unluckygiff = (
    <img alt="unhappyImage" src={unluckygif} width="100%" height="200px" />
  );

  function clickHandler() {
    let number = dob.split("-");
    let sum = "";
    for (let i = 0; i < number.length; i++) {
      sum = sum + number[i];
    }
    console.log(sum);
    let date = Number(sum);
    console.log(date);
    var sum2 = 0;
    while (date !== 0) {
      var rem = date % 10;
      date = Math.floor(date / 10);
      sum2 = rem + sum2;
    }
    console.log(sum2 + "final");
    if (num > 0) {
      if (sum2 % num === 0) {
        console.log(num);
        setLuck("YOU ARE LUCKY");
        setPic(luckygiff);
        console.log("lucky");
      } else {
        console.log("unlucky");
        setLuck("YOU ARE UNLUCKY");
        setPic(unluckygiff);
      }
    } else {
      setLuck("Please enter valid number");
    }
  }

  return (
    <div className="App">
      <h1>Is your birthday lucky?</h1>
      <div className="form">
        <label>your birth date</label>
        <input type="date" onChange={(e) => setDob(e.target.value)} />
        <label>your lucky number</label>
        <input type="number" onChange={(e) => setNum(e.target.value)} />
        <button onClick={clickHandler}>check</button>
        <h2>{luck}</h2>
        {pic}
      </div>
      <p>Made with ❤️ by Mahendra😄</p>
    </div>
  );
}
