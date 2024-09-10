import { useState } from "react"

const ConditionalRendering = ()=>{
    const [validAge, setValidAge] = useState(true)

    // 1. if-else method
    // if(validAge) {
    //     return <div>You can Vote</div>
    // }
    // else{
    //     return <div>You cannot vote</div>
    // }

    // 2. Element variable
    // let age
    // if(validAge){
    //     age = <>You can Vote</>
    // }
    // else{
    //     age = <>You cannot Vote</>
    // }
    // return <>{age}</>

    // 3. Ternary operator
    return (
        <>{validAge ? <>You can Vote</> : <>You cannot Vote</>}</>
    )

    // 4.short circuit operator
    // return (
    //     <>{validAge && <>You can Vote</>}</>
    // )
}

export default ConditionalRendering
