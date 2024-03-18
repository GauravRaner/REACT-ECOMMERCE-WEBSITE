import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { FaShoppingCart } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
const ProductDetails = ({ AddToCart }) => {

  const { productId } = useParams()
  const [productDetails, setProductDetails] = useState([])

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        const res = await axios(`https://dummyjson.com/products/${productId}`);
        setProductDetails(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductDetails();
  }, [productId]);

  const AddProductToCart = () => {
    AddToCart(productDetails)
  }
  return (

    <section id="product-info">
      <div className="item-image-parent">
        <div className="item-list-vertical">
          <div className="thumb-box">
            <img src={productDetails.images && productDetails.images[0]} alt="thumbnail" />
          </div>
          <div className="thumb-box">
            <img src={productDetails.images && productDetails.images[1]} alt="thumbnail" />
          </div>
          <div className="thumb-box">
            <img src={productDetails.images && productDetails.images[2]} alt="thumbnail" />
          </div>


        </div>
        <div className="item-image-main">
          <img src={productDetails.thumbnail} alt="default" />
        </div>
      </div>

      <div className="item-info-parent">
        <div className="main-info">
          <h4>{productDetails.title}</h4>
          <div className="star-rating">
            <span className='rating'>{productDetails.rating}</span> <span>★</span>
          </div>
          <p>Price: <span id="price">₹ {productDetails.price}</span></p>
          <p>Brand : <span className='brand'>{productDetails.brand}</span></p>
          <p>Category : <span className='brand'>{productDetails.category}</span></p>
        </div>
        <div className="description">
          {productDetails.description}
        </div>
        <div className='btns'>
          <button onClick={AddProductToCart}> <span><FaShoppingCart /></span> add to cart</button>
        </div>
      </div>

    </section>
  )
}

export default ProductDetails