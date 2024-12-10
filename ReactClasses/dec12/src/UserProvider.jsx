import React, { useState } from 'react'
// import { Children } from 'react'
import { createContext } from 'react'

const userContext = createContext()

const UserProvider = ({children}) => {

    const [user, setUser] = useState({name: "vishnu", age: 22})
  return (
    <div>
      <userContext.Provider value={{user, setUser}} >
        {children}
      </userContext.Provider>
    </div>
  )
}

export {userContext, UserProvider}
