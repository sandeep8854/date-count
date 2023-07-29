import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("July 23 2023");
  console.log(date);
  date.setDate(date.getDate() + count);
  // console.log(date);
  return (
    <div className="container">
      <div className="stepA">
        <button onClick={() => setStep((c) => c - 1)}> Negative </button>
        <span> Step : {step} </span>
        <button onClick={() => setStep((c) => c + 1)}>Positive</button>
      </div>
      <div className="stepB">
        <button onClick={() => setCount((c) => c - step)}> Negative </button>
        <span> Count : {count} </span>
        <button onClick={() => setCount((c) => c + step)}>Positive</button>
      </div>
      <p className="paragraph">
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}
