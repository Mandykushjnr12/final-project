import React from 'react'
import { Routes,Route, RouterProvider } from 'react-router-dom';
import Home from './pages/Home'
import Collection from './pages/Collection';
import About from './pages/About';
import contact from './pages/contact';
import product from './pages/product';
import cart from './pages/cart';
import login from './login';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<contact/>} />
        <Route path='/product/:productId' element={<product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<login/>} />
        <Route path='place-order' element={<place-order/>} />
        <Route path='/orders' element={<Orders/>} />

      </Routes>
      
    </div>
  )
}

export default App
