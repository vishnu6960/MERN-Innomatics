import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import Specifications from './components/Specifications'
import Reviews from './components/Reviews'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/product/:id' element={<ProductDetails />}>
            <Route path='/product/:id/reviews' element = {<Reviews />}/>
            <Route path='/product/:id/specification' element = {<Specifications />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
