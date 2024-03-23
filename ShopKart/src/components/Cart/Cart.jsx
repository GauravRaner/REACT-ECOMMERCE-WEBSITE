import React, { useEffect, useState } from "react";
import "./Cart.css";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Alert } from 'flowbite-react';
import { FaArrowLeft } from "react-icons/fa6";
import Checkout from "../Checkout/Checkout";



const Cart = ({ cart, handleInc, handleDec, handleRemove }) => {
  const total = cart.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0);
  const discount = total * 0.1;
  const deliveryCharges = cart.length > 0 ? 60 : 0;
  const totalAmount = (total + deliveryCharges) - discount
  const save = 140 + discount


  return (
    <>
      {cart.length == 0 ?

        <div className="empty-cart">
          <span><FaShoppingCart /></span>
          <h1>Your cart is Empty !</h1>
          <Link to="/allProducts">
            <button>Add Products</button>
          </Link>

        </div>

        :
        <div className="cart-container">
          <div className="cart-header bg-red-500">
            <h1>Shopping Cart</h1>
            <h2>{cart.length} Items</h2>
          </div>

          <div className="back-arrow">
            <Link to="/allproducts"><button><span><FaArrowLeft /></span></button></Link>
            <p>Back to shopping </p>
          </div>

          <div className="cart-info ">
            <div className="all-product ">
              <div className="product-header"> 
                <span>Details</span>
                <span className="qty">Quantity</span>
                <span>Price</span>
                <span>Total</span>
              </div>
              {
                cart.map((cartItem) => (
                  <div className="product" key={cartItem.id}>
                    <div className="product-details">
                      <img src={cartItem.thumbnail} alt="Product Image" />
                      <div className="product-details-text">
                        <h3>{cartItem.title}</h3>
                        <h3>{cartItem.category}</h3>
                      </div>
                    </div>
                    <div className="quantity-options">
                      <button className="quantity-btn" onClick={() => handleDec(cartItem.id)}>-</button>
                      <span className="quantity">{cartItem.quantity}</span>
                      <button className="quantity-btn" onClick={() => handleInc(cartItem.id)}>+</button>
                    </div>
                    <p>{cartItem.price}</p>
                    <p>{cartItem.price * cartItem.quantity}</p>
                    <button className="remove-btn" onClick={() => handleRemove(cartItem.id)}>Remove</button>
                  </div>
                ))
              }
            </div>

            <div className="summary">
              <h3>Summary</h3>
              <div className="summary-item">
                <span>Items:</span>
                <span className="total-items">{cart.length}</span>
              </div>
              <div className="summary-item">
                <span>Total Price:</span>
                <span className="total-price">	₹{total}</span>
              </div>

              <div className="summary-item">
                <span>Discount</span>
                <span className="saved">-₹{discount.toFixed(0)}</span>
              </div>
              <div className="summary-item">
                <span>Delivery Charges</span>
                <span><strike>₹200</strike>	₹{deliveryCharges}</span>
              </div>
              <div className="summary-item">
                <h1>Total Amount</h1>
                <h1>₹{totalAmount.toFixed(0)}</h1>
              </div>

              <p className="save">You will save ₹{save.toFixed(0)} on this order</p>
              {/* <button className="checkout-btn">Checkout</button> */}
              <Checkout />
            </div>
          </div>

        </div>
      }
    </>
  );
};

export default Cart;
