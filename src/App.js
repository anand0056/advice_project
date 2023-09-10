import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");
  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice);
        console.log(advice);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  fetchAdvice();
  return (
    <div className="App">
      <div>
        <h1>{advice}</h1>
      </div>
    </div>
  );
}

export default App;
