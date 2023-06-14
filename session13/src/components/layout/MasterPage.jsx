import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import AppRouter from '../AppRouter'

export default function MasterPage() {
  return (
    <>
        <Header />
        <AppRouter />
        <Outlet />
        <Footer />
    </>
  )
}
