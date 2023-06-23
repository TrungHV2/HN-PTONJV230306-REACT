import { useRoutes, Outlet } from 'react-router-dom'
import WebLayout from './components/web/layout/WebLayout';
import WebRouting from './components/web/web-routing';
import AdminLayout from './components/admin/layout/AdminLayout';
import AdminRouting from './components/admin/admin-routing';

function AppRouting() {
  const routes = useRoutes([
    {
      index: true,
      element: <WebLayout />,
      children: WebRouting()
    },
    {
      path: '/admin',
      element: <AdminLayout />,
      children: AdminRouting()
    }
  ])
  return routes;
}

function App() {
  return (
    <>
      <h1>App Component</h1>
      <AppRouting />
      <Outlet />
    </>
  );
}

export default App;
