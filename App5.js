import React, { useState } from 'react';
function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return (
    <div>
      <h1>Sum of Numbers</h1>
      <p>Numbers: {numbers.join(', ')}</p>
      <p>Sum: {sum}</p>
    </div>
  );
}
export default App;
