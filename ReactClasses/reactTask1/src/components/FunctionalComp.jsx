import styles from './FunctionalComp.module.css'

let style1 = {
    fontSize:'30px',
    background:'beige'
}
const FunctionalComp = ()=>{
    return (
        <div className={styles.main}>
            <h2>Styling in Functional Component</h2>
            <p style={style1}>Baahubali(internal css)</p>
            <p className={styles.primary}>Salaar(using module css)</p>
        </div>
    )
}

export default FunctionalComp