import React from 'react'
import { useRoutes } from 'react-router-dom'
import MasterPage from './components/layout/MasterPage'
import MasterPageAdmin from './components/admin/layout/MasterPageAdmin'
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import HomeAdmin from './components/admin/pages/HomeAdmin';
import About from './components/pages/About';
import ProductManager from './components/admin/pages/ProductManager';
import UserManage from './components/admin/pages/UserManage';
import ProductDetail from './components/pages/ProductDetail';

export default function AppRouter() {
  const routes = useRoutes([
    {
        path: '/',
        element: <MasterPage />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'product-detail/:id',
                element: <ProductDetail />
            },
            {
                path: 'contact',
                element: <Contact />
            },
        ]
    },
    {
        path: '/admin',
        element: <MasterPageAdmin />,
        children: [
            {
                path: '',
                element: <HomeAdmin />
            },
            {
                path: 'product',
                element: <ProductManager />
            },
            {
                path: 'user',
                element: <UserManage />
            },
        ]
    }
  ])
  return routes;
}
