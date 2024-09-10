import { useEffect, useState } from "react"
import axios from "axios";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './DataFetching.css'
import ConditionalRendering from "./conditionalRendering";

function DataFetching(){
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const fetchData = async () =>{
            try{
                let response = await axios.get("https://fakestoreapi.com/products")
                console.log(response.data)
                setData(response.data)
                
                setLoading(false)
            }
            catch(error){
                console.log("Error is : ", error)
                // setLoading(false)
            }
        }
        fetchData()
    }, [])

    if(loading) return <h2>Loading...</h2>
    return (
        <>

        <ConditionalRendering />


        <div className="d-flex flex-wrap gap-3">
            
            {/* <ul>
                {data.map((post) =>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
            {/* <table>
                <thead>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.category}</td>
                            <td><img src={item.image} /></td>
                        </tr>
                    ))}
                </tbody>
            </table> */}

            {data.map((item) =>(
                 <div className="card" style={{width:"18rem"}}>
                    <img src={item.image} className="card-img-top" alt={item.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Price : {item.price}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            ))}

        </div>

        </>
        
    )
}

export default DataFetching