import React from 'react';
import './App.css';
import ParentComponent from './components/ParentComponent.tsx';
import ShoppingCart from './components/ShoppingCart.tsx'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParentComponent/>
        <ShoppingCart/>
      </header>
    </div>
  );
}

export default App;
