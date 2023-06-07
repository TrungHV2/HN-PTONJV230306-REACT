import { Link, NavLink, Outlet, Route, Routes, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import React from 'react'
import AppRouter from './AppRouter';
const UserComponent = React.lazy(() => import('./User'));


function App() {
  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? 'red' : 'black',
    backgroundColor: isActive ? 'black' : 'transparent'
  })


  return (
    <>
      <Header />

      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><NavLink to={'/about?fullName=TrungHV&age=28'} className={'item-link'} style={navLinkStyle}>About</NavLink></li>
        <li><NavLink to={'/contact'} className={'item-link'} style={navLinkStyle}>Contact</NavLink></li>
        <li><NavLink to={'/user'} className={'item-link'} style={navLinkStyle}>User</NavLink></li>
      </ul>

      {/* Phần nội dung thay đổi */}

      <AppRouter />

      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}>
          <Route index element={<AboutRikkeiSoft />} />
          <Route path='soft' element={<AboutRikkeiSoft />} />
          <Route path='academy' element={<AboutRikkeiAcademy />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:id/:name' element={<Product />} />

        <Route path='/user' element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <UserComponent />
          </React.Suspense>
        } />

        <Route path='*' element={<NotFound />} />
      </Routes> */}
      <Footer />
    </>
  );
}

export function Header() {
  return (
    <>
      <div>
        <h1>Header</h1>
      </div>
    </>
  )
}
export function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Home</h1>
        <button onClick={e => navigate('product/SP01/Tivi Sony')}>SP01</button>
        <button onClick={e => navigate('product/SP02/Tivi Samsung')}>SP02</button>
        <button onClick={e => navigate('product/SP03/Tivi LG')}>SP03</button>
      </div>
    </>
  )
}
export function About() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <div>
        <h1>About {'Name: ' + searchParams.get('fullName')} | {'Age: ' + searchParams.get('age')}</h1>
        <ul>
          <li><Link to={'soft'}>Soft</Link></li>
          <li><Link to={'academy'}>Academy</Link></li>
        </ul>
        <Outlet />
      </div>
    </>
  )
}
export function AboutRikkeiSoft() {
  return (
    <>
      <div>
        <h1>AboutRikkeiSoft</h1>
      </div>
    </>
  )
}
export function AboutRikkeiAcademy() {
  return (
    <>
      <div>
        <h1>AboutRikkeiAcademy</h1>
      </div>
    </>
  )
}
export function Contact() {
  return (
    <>
      <div>
        <h1>Contact</h1>
      </div>
    </>
  )
}
export function Product() {
  const { id, name } = useParams();
  return (
    <>
      <div>
        <h1>Product {id} | {name}</h1>
      </div>
    </>
  )
}
export function NotFound() {
  return (
    <>
      <div>
        <h1>NotFound</h1>
      </div>
    </>
  )
}
export function Footer() {
  return (
    <>
      <div>
        <h1>Footer</h1>
      </div>
    </>
  )
}

export default App;
