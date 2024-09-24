import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

import {
  createBrowserRouter,
  createRoutesFromElements, 
  Route,
  RouterProvider
} from "react-router-dom"
import ContactUs from './components/ContactUs.jsx'
import Address from './components/Address.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='contact' element={<Contact />}>
        <Route path='contact-us' element={<ContactUs />}></Route>
        <Route path='address' element={<Address />}></Route>
      </Route>
      <Route path='About' element={<About />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}>
    <App />
  </RouterProvider>,
)
