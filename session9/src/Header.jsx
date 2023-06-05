import React, {useContext} from 'react';
import { MyContext } from './App';


export default function Header() {
    const { handleContext } = useContext(MyContext);
  return (
    <div>
        {/* <h1 style={{background: background, color: txtColor}}>Header</h1>
        <img src={logoUrl} alt="Logo page" /> */}
        <button onClick={handleContext}>Click</button>
    </div>
  )
}
