import React, { useContext } from 'react'
import { userContext } from './UserProvider'
 

const UpdateUser = () => {

    const {user, setUser} = useContext(userContext)
    const handleChange = () =>{
        setUser({...user, name: "abhi"})
    }
  return (
    <div>
      <button onClick={handleChange}>change</button>
    </div>
  )
}

export default UpdateUser
