import { useState } from "react";

function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState("0");
  const [percentage2, setPercentage2] = useState("0");

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    setPercentage1("0");
    setPercentage2("0");
  }

  return (
    <div>
      <Bill setBill={setBill} />
      <br />
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the Service?{" "}
      </SelectPercentage>{" "}
      <br />
      <br />
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?{" "}
      </SelectPercentage>
      <br />
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        placeholder="Bill value"
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <>
      <span>{children}</span>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </>
  );
}

function Output({ bill, tip }) {
  const total = bill + tip;
  return (
    <h3>
      You pay ${total} (${bill} + ${tip}){" "}
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
