import React from "react";
import styles from './ClassComp.module.css'

class ClassComp extends React.Component{
    render(){
        return(
            <div className={styles.main}>
                <h2 >Styling in Class Component</h2>
                <p style={{color:"yellow",fontSize:"25px"}}>Saaho(inline)</p>
                <p className={styles.primary}>Spirit(Using module css)</p>
            </div>
        )
    }
}

export default ClassComp