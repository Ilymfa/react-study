import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './myUi/Button'

function App() {
  return (
    <div className="App">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button  icon="pic">Icon</Button>
      <Button onClick={() => {alert('click')}}>click</Button>
    </div>
  );
}

export default App;
