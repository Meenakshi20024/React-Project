import React, { useState } from 'react';
function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');
  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };
  const checkEvenOdd = () => {
    const num = parseInt(number);
    if (!isNaN(num)) {
      setResult(num % 2 === 0 ? 'Even' : 'Odd');
    } else {
      setResult('Please enter a valid number.');
    } };
  return (
    <div>
      <h1>Even or Odd Checker</h1>
      <input 
        type="number" 
        value={number} 
        onChange={handleInputChange} 
        placeholder="Enter a number" 
     />
      <button onClick={checkEvenOdd}>Check</button>
      {result && <p>The number is: {result}</p>}
    </div>
  ); }
export default App;
