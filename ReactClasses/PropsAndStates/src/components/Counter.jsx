import { useState } from "react"

const Counter = ()=>{

    const [count, setCount] = useState(0)

    // const increment = (e)=>{
    //     setCount(count + 1)
    // }
    // const decrement = (e)=>{
    //     setCount(count - 1)
    // }

    return(
        <div>
            <h4>Count : {count}</h4>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
    )
}

export default Counter