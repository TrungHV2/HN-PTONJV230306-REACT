import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function WebLayout() {
  return (
    <>
        <div>WebLayout</div>
        <NavLink to={'/'}>Home</NavLink> | 
        <NavLink to={'/about'}>About</NavLink>
        <Outlet />
    </>
  )
}
