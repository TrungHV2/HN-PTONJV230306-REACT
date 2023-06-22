import './App.css';
import AppRouter from './AppRouter';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <AppRouter />
      <Outlet />
    </div>
  );
}

export default App;
