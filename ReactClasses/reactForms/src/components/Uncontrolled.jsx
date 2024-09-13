import { useRef } from "react"

const Uncontrolled = () =>{

    const inputRef = useRef(null    )
    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(`Your name is ${inputRef.current.value} in uncontrolled form`)
    }
    return(
        <>

            <form onSubmit={handleSubmit}>
                <label>
                    Name : 
                    <input type="text" ref={inputRef} />
                </label>
                <button type="submit">Submit</button>
            </form>

        </>
    )
}

export default Uncontrolled