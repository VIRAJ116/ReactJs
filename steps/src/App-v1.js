import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  // const step = 1;
  // const [step, setStep] = useState(1);
  // const [isOpen, setIsOpen] = useState(true);

  // function handlePrevious() {
  //   if (step > 1) setStep((s) => s - 1);
  // }

  // function handleNext() {
  //   if (step < 3) setStep((s) => s + 1);
  // }

  // return (
  //   <>
  //     <button className="close" onClick={() => setIsOpen((is) => !is)}>
  //       &times;
  //     </button>
  //     {isOpen && (
  //       <div className="steps">
  //         <div className="numbers">
  //           <div className={step >= 1 ? "active" : ""}>1</div>
  //           <div className={step >= 2 ? "active" : ""}>2</div>
  //           <div className={step >= 3 ? "active" : ""}>3</div>
  //         </div>
  //         <p className="message">
  //           Step {step}: {messages[step - 1]}
  //         </p>
  //         <div className="buttons">
  //           <button
  //             style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
  //             onClick={handlePrevious}
  //           >
  //             Previous
  //           </button>
  //           <button
  //             style={{ backgroundColor: "#7950f2", color: "#ffffff" }}
  //             onClick={handleNext}
  //           >
  //             Next
  //           </button>
  //         </div>
  //       </div>
  //     )}
  //   </>
  // );


  
//   return (
//     <div className="App">
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [step ,setStep] = useState(1);
  
//   const date = new Date();
//   date.setDate(date.getDate() + count);

//   function handleReset() {
//     setCount(0);
//     setStep(1);
//   }

//   return (
//     <>
//       <div>
//         <input type="range" min={0} max={10} value={step} onChange={(e) =>setStep(Number(e.target.value))}/>
//         <span>Step: {step}</span>
//       </div>
//       <div>
//         <button onClick={() => setCount((c) => c - step)}>-</button>
//         <input type="text" value={count} onChange={(e) => setCount(Number(e.target.value))} />
//         <button onClick={() => setCount((c) => c + step)}>+</button>
//       </div>
//       <p>
//         <span>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : `${Math.abs(count)} days ago was `}</span>
//         <span>{date.toDateString()}</span>
//       </p>
//      {(count !== 0 || step !== 1) ? <div>
//         <button onClick={handleReset}>Reset</button>
//       </div> : null}
//     </>
//   );
// }
