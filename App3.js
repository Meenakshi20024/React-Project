import React from 'react';
function App() {
  const numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }
  return (
    <div>
      <h1>Numbers 1 to 100:</h1>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
