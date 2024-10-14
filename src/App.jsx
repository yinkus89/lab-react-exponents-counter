import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";

function App() {
  const [count, setCount] = useState(1); // Initialize count with a default value

  // Functions to increment and decrement the count
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>
      <Counter count={count} increment={increment} decrement={decrement} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        {/* Pass count to each Exponent component */}
        <ExponentTwo num={count} />
        <ExponentThree num={count} />
        <ExponentFour num={count} />
        <ExponentFive num={count} />
        <ExponentSix num={count} />
      </div>
    </div>
  );
}

export default App;
