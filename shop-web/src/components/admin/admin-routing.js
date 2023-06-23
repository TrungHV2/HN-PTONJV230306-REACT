import {useRoutes} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'

export default function AdminRouting() {
  const routes = [
    {
        index: true,
        element: <Home />
    },
    {
        path: 'product',
        element: <Product />
    }
  ]
  return routes;
}
