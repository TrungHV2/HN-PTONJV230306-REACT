import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Home from './Home';
import Form from './Form';
import Table from './Table';

function App() {
  const [total, setTotal] = useState(0);
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      <Table />
      <Form />
      {show && <Home />}
      <h1>{total}</h1>
      <button onClick={e => setShow(!show)}>Show</button>
      <button onClick={e => setTotal(total + 1)}>Click</button>
    </div>
  );
}

export default App;
