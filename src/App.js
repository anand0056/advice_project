import "./App.css";
import { useEffect, useState } from "react";
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
  // fetchAdvice();
  // useEffect(() => {
  //   fetchAdvice();
  // }, [advice]);
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="btn" onClick={fetchAdvice}>
          Give me advice
        </button>
      </div>
    </div>
  );
}

export default App;
