import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { NavLink, Outlet } from 'react-router-dom'

export default function MasterPageAdmin() {
    return (
        <>
            <Header />
            <ul>
                <li><NavLink to={'product'}>Quản lý sản phẩm</NavLink></li>
                <li><NavLink to={'user'}>Quản lý người dùng</NavLink></li>
            </ul>
            <Outlet />
            <Footer />
        </>
    )
}
