import React from 'react'
import { useRoutes } from 'react-router-dom';
import { About, AboutRikkeiAcademy, AboutRikkeiSoft, Contact, Home, NotFound, Product } from './App';

const UserComponent = React.lazy(() => import('./User'));

export default function AppRouter() {
    const appRoutes = useRoutes([
        { path: '/', element: <Home /> },
        {
            path: '/about',
            element: <About />,
            children: [
                { path: 'soft', element: <AboutRikkeiSoft /> },
                { path: 'academy', element: <AboutRikkeiAcademy /> }
            ]
        },
        { path: '/contact', element: <Contact /> },
        { path: '/product/:id/:name', element: <Product /> },
        { path: '/user', element: <UserComponent /> },
        { path: '*', element: <NotFound /> },
    ]);
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            {appRoutes}
        </React.Suspense>
    );
}
