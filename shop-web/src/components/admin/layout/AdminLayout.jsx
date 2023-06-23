import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <>
        <div>AdminLayout</div>
        <NavLink to={''}>Dashboard</NavLink> | 
        <NavLink to={'product'}>Product</NavLink>
        <Outlet />
    </>
  )
}
