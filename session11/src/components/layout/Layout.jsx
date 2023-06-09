import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';

export default function Layout() {
  return (
    <>
        <Header />
        <Routes>
            <Route index element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
        </Routes>
        <Outlet />
        <Footer />
    </>
  )
}
