
import Cards from './components/Cards.jsx'
import ClassComp from './components/ClassComp.jsx'
import Functional from './components/Functional.jsx'

function App() {
  let style1 = {
    flexWrap:"wrap",
    // justifyContent:"center",
    display:"flex",
    gap:"20px",
  }
  return (
   <div style={style1} >
    <Cards />
    <Cards />
    <Cards />
    <Cards />
   </div>
  )
}

export default App
