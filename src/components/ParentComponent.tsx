import React from 'react';
import Counter from './Counter.tsx';

const ParentComponent: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Testing Counter Component</h1>
      <Counter />
    </div>
  );
};

export default ParentComponent;
