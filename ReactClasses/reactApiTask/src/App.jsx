import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Post from './components/Post/Post'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Post />} />
        <Route path='/post/:id' element={<Post />} />
      </Routes>
      {/* <Post /> */}
    </div>
  )
}

export default App
