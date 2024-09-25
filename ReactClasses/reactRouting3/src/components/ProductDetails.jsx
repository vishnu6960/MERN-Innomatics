import React from 'react'
import { useParams, Link, Outlet } from 'react-router-dom'

const ProductDetails = () => {

    const productDetails = {
        1 : {
            name : "Laptop",
            description : "This is a amazing laptop",
            image : "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6291/6291888ld.jpg"
        },
        3 : {
            name : "Shirt",
            description : "This is very comfortable shirt",
            image : "https://pluspng.com/img-png/shirt-hd-png-plaid-shirt-starting-at-85-1618.png"
        },
        4 : {
            name : "Shoes",
            description : "This is very comfortable Shoes",
            image : "https://tse4.mm.bing.net/th?id=OIP.Y5dpT1xu59gPAlMzB8mJ5QHaFB&pid=Api&P=0&h=180"
        },
        2 : {
            name : "Mobile",
            description : "This is a amazing mobile",
            image : "https://images-cdn.ubuy.co.in/633fd4ed3af4fa3b496dbe6b-firzero-2022-new-unlocked-smartphone.jpg"
        },
        5 : {
            name : "Speaker",
            description : "This is a amazing speaker",
            image : "https://tse1.mm.bing.net/th?id=OIP.xoKG-e4l2zNIN7iNv4LdyQHaFo&pid=Api&P=0&h=180"
        }
    }

    const {id}  = useParams()
    const product = productDetails[id]

  return (
    <>
        <h2>Product Details</h2>
        <img style = {{width:"100%", height:"100%"}}src={product.image} alt={product.name} />
        <h4>{product.name}</h4>
        <h6>{product.description}</h6>
        <h2>More Information</h2>
        <ul>
            <li>
                <Link to={`/product/${id}/reviews`}>Reviews</Link>
            </li>
            <li>
                <Link to={`/product/${id}/specification`}>Specifications</Link>
            </li>
        </ul>
        <Outlet />
    </>
  )
}

export default ProductDetails
