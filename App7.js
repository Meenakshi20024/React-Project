import React, { useState } from 'react';
function App() {
  const [number, setNumber] = useState('');
  const [reversedNumber, setReversedNumber] = useState('');
  const handleInputChange = (event) => {
    setNumber(event.target.value);
  };
  const reverseNumber = () => {
    const num = parseInt(number, 10);
    if (!isNaN(num)) {
      const reversed = num.toString().split('').reverse().join('');
      setReversedNumber(parseInt(reversed, 10));
    } else {
      setReversedNumber('Invalid number');
    }
  };
  return (
    <div>
      <h1>Number Reverser</h1>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <button onClick={reverseNumber}>Reverse</button>
      {reversedNumber && <p>Reversed Number: {reversedNumber}</p>}
    </div>
  ); }
export default App;
