import React, { useState } from 'react';
function App() {
  const [array, setArray] = useState([]);
  const [secondLargest, setSecondLargest] = useState(null);
  const handleInputChange = (event) => {
    const inputArray = event.target.value.split(',').map(Number);
    setArray(inputArray);  };
  const findSecondLargest = () => {
    if (array.length < 2) {
      setSecondLargest(null);
      return; }
    let largest = -Infinity;
    let second = -Infinity;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > largest) {
        second = largest;
        largest = array[i];
      } else if (array[i] > second && array[i] !== largest) {
        second = array[i]; } }
    setSecondLargest(second); };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter comma-separated numbers"
        onChange={handleInputChange}  />
      <button onClick={findSecondLargest}>Find Second Largest</button>
      {secondLargest !== null && (
        <p>The second largest element is: {secondLargest}</p> )}
    </div>  ); }
export default App;
