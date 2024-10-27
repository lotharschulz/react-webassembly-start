import React, { useEffect, useState } from 'react';
import init, { add } from "wasm-lib";
import './App.css';

function App() {

  init().then(() => {
    const result = add(1, 2);
    console.log("1 + 2 = " + result);
  });

  const [ans, setAns] = useState(0);
  useEffect(() => {
    init().then(() => {
      setAns(add(1, 1));
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>1 + 1 = {ans}</p>
      </header>
    </div>
  );
}

export default App;
