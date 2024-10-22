import React, { useState } from 'react';
function App() {
  const [array, setArray] = useState([]);
  const [evenCount, setEvenCount] = useState(0);
  const [oddCount, setOddCount] = useState(0);
  const handleInputChange = (event) => {
    const inputArray = event.target.value.split(',').map(Number);
    setArray(inputArray);
    let even = 0;
    let odd = 0;
    for (let num of inputArray) {
      if (num % 2 === 0) {
        even++;
      } else {
        odd++;
      }
    }
    setEvenCount(even);
    setOddCount(odd);
  };
  return (
    <div>
      <input type="text" placeholder="Enter comma-separated numbers" onChange={handleInputChange} />
      <p>Array: {array.join(', ')}</p>
      <p>Even Count: {evenCount}</p>
      <p>Odd Count: {oddCount}</p>
    </div>
  );
}
export default App;
