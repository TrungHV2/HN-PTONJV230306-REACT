import { useRoutes } from 'react-router-dom'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import Login from './pages/Login';
import Auth from './auth/Auth';

export default function AppRouter() {
    const routes = useRoutes([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/cart',
            element: <Auth element={<Cart />} />
        },
        {
            path: '/login',
            element: <Login />
        }
    ])
    return routes;
}