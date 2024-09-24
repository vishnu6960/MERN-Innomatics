import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"

const App = () =>{
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>Home</Route>
        <Route path="/about" element={<About />}>Home</Route>
        <Route path="/contact" element={<Contact />}>Home</Route>

      </Routes>
    </>
  )
}

export default App