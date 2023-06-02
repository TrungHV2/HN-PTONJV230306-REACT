import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal/Modal';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  const [users, setUsers] = useState([
    {
      userId: 1,
      username: 'admin',
      status: false
    },
    {
      userId: 2,
      username: 'customer',
      status: true
    }
  ]);
  const [user, setUser] = useState({});



  const handleClick = (userEdit) => {
    setUser(userEdit);
    setShow(true);
  }
  const handleClose = (evt, data) => {
    setShow(data);
  }
  const handleSave = (evt, data) => {
    let updated = users.map(u => {
      if (u.userId === data.userId) {
        u.username = data.username;
        u.status = data.status;
      }
      return u;
    })
    setUsers(updated);
    setUser(data);
    console.log(data);
  }

  return (
    <div className="">
      <Modal show={show} frmData={user} onClose={handleClose} onSave={handleSave} />
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
          {users.map(u => <tr key={u.userId}>
            <td>{u.userId}</td>
            <td>{u.username}</td>
            <td>{u.status ? 'Active' : 'Inactive'}</td>
            <td>
              <button onClick={e => handleClick(u)}>Sửa</button>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
