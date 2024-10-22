import React, { useState } from 'react';
function App() {
  const [originalArray, setOriginalArray] = useState([1, 2, 3, 4, 5]);
  const [reversedArray, setReversedArray] = useState([]);
  const handleReverse = () => {
    // Create a copy of the array to avoid mutating the original
    const newArray = [...originalArray].reverse(); 
    setReversedArray(newArray);
  };
  return (
    <div>
      <h1>Array Reverser</h1>
      <h2>Original Array:</h2>
      <ul>
        {originalArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleReverse}>Reverse</button>
      <h2>Reversed Array:</h2>
      <ul>
        {reversedArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
