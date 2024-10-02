const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  let step = 2;
  return (
    <div className="steps">
      <Numbers step={step} />
      <Paragraph text={`Step ${step}: ${messages[step - 1]}`} />
      <div className="buttons">
        <Button text="Previous" />
        <Button text="Next" />
      </div>
    </div>
  );
}

function Numbers({ step }) {
  return (
    <div className="numbers">
      <div className={step >= 1 ? "active" : ""}>1</div>
      <div className={step >= 2 ? "active" : ""}>2</div>
      <div className={step >= 3 ? "active" : ""}>3</div>
    </div>
  );
}

function Paragraph({ text }) {
  return <p className="message">{text}</p>;
}

function Button({ text }) {
  return (
    <button style={{ backgroundColor: "#7950F2", color: "#fff" }}>
      {text}
    </button>
  );
}
