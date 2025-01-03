// import { ThemeProvider } from './components/ThemeProvider'
import React from 'react'
// import ThemeChanger from './components/ThemeChanger'
// import ThemeUpdater from './components/ThemeUpdater'
import { UserProvider } from './UserProvider'
import UserProfile from './UserProfile'
import UpdateUser from './UpdateUser'

const App = () => {
  return (
    <div>
      <UserProvider>
        <UserProfile />
        <UpdateUser />
      </UserProvider>

      {/* <ThemeProvider>
        <ThemeChanger />
        <ThemeUpdater />
      </ThemeProvider> */}
    </div>
  )
}

export default App
