import './App.css';
import React, { createContext } from 'react'
import Header from './Header';
import Footer from './Footer';
import { useRef } from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import { useCallback } from 'react';
import Product from './Product';

export const MyContext = createContext();

const initState = {
  fullname: '',
  email: '',
  phone: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setFullName':
      return {...state, fullname: action.payload};
    case 'setEmail':
      return {...state, email: action.payload};
    case 'setPhone':
      return {...state, phone: action.payload};
    default:
      throw new Error(`Action type ${action.type} not found!`);
  }
}

function App() {
  const refTime = useRef();
  const [count, setCount] = useState(0);
  const [now, setNow] = useState(new Date());

  const [user, dispatch] = useReducer(reducer, initState);

  const startTime = () => {
    refTime.current = setInterval(() => {
      setNow(new Date());
    }, 1000);
  }
  const stopTime = () => {
    clearInterval(refTime.current);
  }

  const handleContext = () => {
    console.log("Handle context Updated");
  }

  return (
    <div className="App">
      {/* <MyContext.Provider value={{logoUrl: 'logo.png', background: 'black', txtColor: '#fff'}}> */}
      <MyContext.Provider value={{handleContext}}>
        <Header />
        <div>
          <button onClick={startTime}>Start time</button>
          <h2>Bây giờ là: {now.toLocaleTimeString()}</h2>
          <input type='text' name='fullname' onChange={e => dispatch({type: 'setFullName', payload: e.target.value})} /><br/>
          <input type='text' name='email' onChange={e => dispatch({type: 'setEmail', payload: e.target.value})} /><br/>
          <input type='text' name='phone' onChange={e => dispatch({type: 'setPhone', payload: e.target.value})} /><br/>
          <button onClick={e => {console.log(user);}}>Submit</button>
          <button onClick={stopTime}>Stop time</button>

          <br/>
          <br/>
          <Wrap />
          <Product />
        </div>
        <Footer />
      </MyContext.Provider>
    </div>
  );
}

const Wrap = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleActive = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  return <ButtonComponent value={isActive} btnClick={toggleActive} />
}


const ButtonComponent = React.memo(({value, btnClick}) => {
  console.log('Button render');
  return (
    <button onClick={btnClick}>
      {value ? 'Active' : 'Inactive'}
    </button>
  ) 
})


export default App;
