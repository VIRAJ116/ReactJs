import { useEffect, useState } from "react";

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("CAD");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect (
    function () {
      async function getCurrencyCoverted() {
        setIsLoading(true);
        const res = await fetch (`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`);
        const data = await res.json();
        console.log(data);
        setConverted(data.rates[toCur]);
        setIsLoading(false);
      }
      if(fromCur === toCur) return setConverted(amount);
      getCurrencyCoverted();
    }, [fromCur,toCur,amount]
  )

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select value={fromCur} onChange={(e) => setFromCur(e.target.value)} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCur} onChange={(e) => setToCur(e.target.value)} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{converted} {toCur}</p>
    </div>
  );
}

export default App;
