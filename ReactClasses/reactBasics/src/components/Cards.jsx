import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Cards = () =>{
   return(
    <div>
        <div className="card" style={{width:"18rem"}}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.boxofficebusiness.in%2Fwp-content%2Fuploads%2F2024%2F06%2FKalki-2898-AD-box-olffice-collection.jpg&f=1&nofb=1&ipt=5841eeb369ed180d42ad8cd6dfacb3a4a68c2038e7560d33572421f8bda4f1d4&ipo=images" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
   )
}

export default Cards