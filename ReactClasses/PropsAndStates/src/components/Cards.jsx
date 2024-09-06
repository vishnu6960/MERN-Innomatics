import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Cards = ({img, title, price}) =>{
   return(
    <>

        <div className="card" style={{width:"18rem"}}>
            <img src={img} className="card-img-top" alt={title}/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">Price : {price}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    </>
    
   )
}

export default Cards