import { useState, useRef } from "react"
import React from "react"


const Controlled = () =>{

    const personName = useRef()

    const [name, setName] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        setName(personName.current.value)
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name :
                    <input type="text" ref={personName}  />
                </label>
                <button type="submit">Submit</button>
            </form>
            <h1>{name}</h1>
        </>
    )
}

export default Controlled