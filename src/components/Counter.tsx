import React, { useState } from 'react';

const Counter: React.FC = () => {
  // Define state for the counter
  const [count, setCount] = useState<number>(0);

  // Handlers for buttons
  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={increment} style={{ margin: '0 5px' }}>Increment</button>
        <button onClick={decrement} style={{ margin: '0 5px' }}>Decrement</button>
        <button onClick={reset} style={{ margin: '0 5px' }}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
