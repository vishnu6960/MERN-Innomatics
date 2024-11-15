import { useState } from "react"
import React from "react"


const MultiForm = () =>{

    const [data, setData] = useState({
        name:"", 
        email:"",
        password:""
    })

    const handleChange = (e)=>{
        const {name, value} = e.target
        setData((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        document.body.append(`name: ${data.name} email: ${data.email} password: ${data.password}`)
        console.log(data)
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name : 
                    <input type="text" name="name" value = {data.name} onChange={handleChange} />
                </label>
                <label>
                    Email : 
                    <input type="email" name="email" value = {data.email} onChange={handleChange} />
                </label>
                <label>
                    Password : 
                    <input type="password" name="password" value = {data.password} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default MultiForm