import React from 'react'
import { Link, useSearchParams } from "react-router-dom"
const Home = () => {

    const products = [
        {id : 1, name : "Laptop", category : "Electronics"},
        {id : 2, name : "Mobile", category : "Electronics"},
        {id : 3, name : "Shirts", category : "Clothing"},
        {id : 4, name : "Shoes", category : "Clothing"},
        {id : 5, name : "Speaker", category : "Electronics"}

    ]

    const [searchParams, setSearchParams] = useSearchParams()
    const category = searchParams.get("category")

    const filteredProducts = category ? products.filter((p) => p.category === category) : products
  return (
    <>
        <h1>Products</h1>
        <button onClick={() => setSearchParams({category : "Electronics"})}>Electronics</button>
        <button onClick={() => setSearchParams({category : "Clothing"})}>Clothing</button>
        <button onClick={() => setSearchParams({})}>All products</button>

        <ul>
            {filteredProducts.map((item) =>(
                <li key={item.id}>
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                </li>
            ))}
        </ul>

    </>
  )
}

export default Home
