import { useState } from 'react';
import './App.css';
import Login from './Login';
import Form from './Form';

function App() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  function handleClick() {
    setShow(!show);
  }

  function countClick() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={countClick}>Counter</button>
      <button onClick={handleClick}>Click</button>
      {show && <Login data={count} />}
      <Form />
    </div>
  );
}

export default App;
