import React from 'react';
import './App.css';
import APICompoent from  './components/APIComponent';
import Muffins from './components/Muffins';

function App() {
  return (
    <div className="App">
      <h1>REACT REDUX WITH HOOKS</h1>
      <APICompoent />
      <Muffins />
    </div>
  );
}

export default App;
