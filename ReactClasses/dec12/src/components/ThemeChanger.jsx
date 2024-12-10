import React, { useContext } from 'react'
import { themeContext } from './ThemeProvider'
import '../App.css'


const ThemeChanger = () => {
    const {theme} = useContext(themeContext)
  return (
    <div className={theme === 'dark' ? 'light' : 'dark'}>
        <h1>theme changer</h1>
      <h4>the theme is {theme}</h4>
    </div>
  )
}

export default ThemeChanger
