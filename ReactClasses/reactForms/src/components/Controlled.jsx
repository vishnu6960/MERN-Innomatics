import { useState } from "react"

const Controlled = () =>{

    const [name, setName] = useState("")


    const handleChange = (e) =>{
        setName(e.target.value)
    }

    const handleSubmit = () =>{
        alert(`Your name is ${name} in controlled form`)
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name : 
                    <input type="text" value = {name} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Controlled