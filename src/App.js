import { useState } from "react";

const messages = [
  "Learn React Js ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // let step = 2;
  let [step, setStep] = useState(1);

  function handleNext() {
    step < messages.length && setStep(step + 1);
  }

  function handlePrevious() {
    step > 1 && setStep(step - 1);
  }

  return (
    <div className="steps">
      <Numbers step={step} />
      <Paragraph text={`Step ${step}: ${messages[step - 1]}`} />
      <div className="buttons">
        <button
          text="Previous"
          style={{ backgroundColor: "#7950F2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          text="Next"
          style={{ backgroundColor: "#7950F2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

function Numbers({ step }) {
  return (
    <div className="numbers">
      {messages.map((message, index) => (
        <div
          className={step >= `${index + 1}` ? "active" : ""}
          key={`div-${index + 1}`}
        >
          {index + 1}
        </div>
      ))}
      {/* <div className={step >= 1 ? "active" : ""}>1</div>
      <div className={step >= 2 ? "active" : ""}>2</div>
      <div className={step >= 3 ? "active" : ""}>3</div> */}
    </div>
  );
}

function Paragraph({ text }) {
  return <p className="message">{text}</p>;
}
