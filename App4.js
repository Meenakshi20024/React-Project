import React, { useState } from 'react';
function App() {
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(1);
  const factorial = (n) => {
    if (n < 0) {
      return "Factorial is not defined for negative numbers";
    } else if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };
  const handleInputChange = (event) => {
    setNumber(parseInt(event.target.value));
  };
  const calculateFactorial = () => {
    setResult(factorial(number));
  };
  return (
    <div>
      <h1>Factorial Calculator</h1>
      <input type="number" value={number} onChange={handleInputChange} />
      <button onClick={calculateFactorial}>Calculate</button>
      <p>Factorial of {number} is: {result}</p>
    </div>
  );
}
export default App;
