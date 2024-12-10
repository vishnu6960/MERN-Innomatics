import React, { createContext, useState } from 'react'

const themeContext = createContext({
    theme: 'light', 
    setThemeFun: () => {},
})

const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState('light')
    const setThemeFun = () => {
        setTheme((prevTheme) =>{
            return prevTheme === 'light' ? 'dark' : 'light'
        } )
    }
  return (
    <div>
      <themeContext.Provider  value={{theme, setThemeFun}}>
        {children}
      </themeContext.Provider>
    </div>
  )
}

export {ThemeProvider, themeContext}
