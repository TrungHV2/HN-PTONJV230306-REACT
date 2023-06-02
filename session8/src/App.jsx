import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal/Modal';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  }
  const handleClose = (evt, data) => {
    setShow(data);
  }

  return (
    <div className="App">
      <Modal show={show} onClose={handleClose} />
      <h1>AppJS</h1>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>U001</td>
            <td>admin</td>
            <td>true</td>
            <td>
              <button onClick={handleClick}>Sửa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
