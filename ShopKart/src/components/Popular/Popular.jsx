import React, { useEffect, useState } from 'react'
import './Popular.css'
import axios from 'axios';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Popular = () => {

  const[products,setProducts]=useState([])

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const res = await axios('https://dummyjson.com/products?limit=200');
        setProducts(res.data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getAllProducts();
  }, []);


  return (
    <>
        <h1 className='heading'>Popular</h1>
        <div className='product-container'>
        {products.map((product) => (
          <div key={product.id} className='product-card'>
            <Link to={`/productdetails/${product.id}`}><img src={product.thumbnail} alt='' /></Link>
            <p className='product-title'>{product.title}</p>
            <p>Rating: {product.rating.toFixed(1)} <span className='star'>★</span> </p>
            <p>Category: {product.category}</p>
            <p className='product-price'>Price: {product.price}</p>
            <button onClick={() => AddToCart(product)}> <span><FaShoppingCart /></span> ADD TO CART</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Popular