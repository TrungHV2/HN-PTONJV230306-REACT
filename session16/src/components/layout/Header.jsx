import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Header() {
  const carts = useSelector(state => state.carts);
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    if (isMount) {
      console.log('componentDidMount')
      return () => {
        console.log('componentWillUnmount')
      }
    } else {
      setIsMount(true);
    }
  }, [isMount])


  return (
    <div>
      <h1>Header Carts({carts.length})</h1>
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
        <li><NavLink to={'/shop'}>Shop</NavLink></li>
        <li><NavLink to={'/contact'}>Contact</NavLink></li>
        <li><NavLink to={'/login'}>Login</NavLink></li>
        <li><NavLink to={'/register'}>Register</NavLink></li>
        <li><NavLink to={'/carts'}>Carts</NavLink></li>
      </ul>
    </div>
  )
}
