import { useEffect, useState } from "react"
import axios from "axios";
import './DataFetching.css'

function DataFetching(){
    const [data, setData] = useState([])
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
        <div>
            {/* <ul>
                {data.map((post) =>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
            <table>
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
            </table>
        </div>
    )
}

export default DataFetching