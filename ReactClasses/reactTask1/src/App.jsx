import { useState } from 'react'
import './App.css'
import ClassComp from './components/ClassComp'
import FunctionalComp from './components/FunctionalComp'
const App = ()=>{
  const [isFuncComp, setFunc] = useState(false)
  const [isClassComp, setClass] = useState(false)
  return (
    <>
      <div className='ButtonsDiv'>
        <button className='funcButton' onClick={()=>setFunc(!isFuncComp)}>Functional Component</button>
        <button onClick={() => setClass(!isClassComp)}>Class Component</button>
      </div>
      <div className='components'>
        {isFuncComp && <FunctionalComp />}
        {isClassComp && <ClassComp />}
      </div>
    </>
    
    
  )
}

export default App