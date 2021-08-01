import React, { useState } from 'react';
import Display from './components/Display';
import ButtonPannel from './components/ButtonPannel';
import { calc } from './util/calculateUtil';
import './App.css';

function App() {
  const [calculate, setCalculate] = useState({
    next: null,
    operation: null,
    total: null
  });

  const hanndleButtonClick = (name) => {
    const prevCalculate = { ...calculate };
    const currentCalculate = calc(prevCalculate, name);

    setCalculate({ ...calculate, ...currentCalculate});
  };

  return (
    <div className="App">
      <Display calculate={calculate} />
      <ButtonPannel
        calculate={calculate}
        onButtonClick={hanndleButtonClick}
      />
    </div>
  );
}

export default App;
