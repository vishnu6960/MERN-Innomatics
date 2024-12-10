import React, { useContext } from 'react'
import { themeContext } from './ThemeProvider'

const ThemeUpdater = () => {
  const themecxt = useContext(themeContext)
  return (
    <div>
      <button onClick={themecxt.setThemeFun}>click me</button>
    </div>
  )
}

export default ThemeUpdater
