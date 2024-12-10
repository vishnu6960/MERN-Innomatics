import React from 'react'
import { useContext } from 'react'
import { userContext } from './UserProvider'

const UserProfile = () => {

    const {user} = useContext(userContext)
  return (
    <div>
      <h1>User Profile</h1>
      <h3>Name: {user.name}</h3>
      <p>Age: {user.age}</p>
    </div>
  )
}

export default UserProfile
