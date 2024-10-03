import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Post = () => {

    const [post, setPost] = useState(null)

    const {id} = useParams()
    // console.log(id)

    const fetchData = async ()=>{
        try{
            const fetchData = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            // console.log(fetchData.data)
            setPost(fetchData.data)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(() =>{
        fetchData()
    },[])

  return (
    <div>
      {post && <>
        <h1>{post.title}</h1>
        <h4>{post.body}</h4>
      </>}
    </div>
  )
}

export default Post
