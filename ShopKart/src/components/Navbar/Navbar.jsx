import React, { useState } from 'react'
import logo from '../../assets/shopLogo.jpg'
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";

import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({ userName, cart, handleLogout }) => {
  const navigate=useNavigate()
  const [isOpen, setIsOpen] = useState(false);

  const toggleChange = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav>
        <div className='nav-logo'>
          <img src={logo} alt="" />
          <p>Shop<span>Kart</span></p>
        </div>

        <div className={isOpen ? "nav-elements2" : "nav-elements"}>
          <Link to="/" style={{ textDecoration: "none" }}><li>Home</li></Link>
          <Link to="/AllProducts" style={{ textDecoration: "none" }}><li>All Products</li></Link>
          <Link to="/about" style={{ textDecoration: "none" }}><li>About</li></Link>
          <Link to="/contact" style={{ textDecoration: "none" }}><li>Contact</li></Link>
        </div>

        <div className='nav-items'>
          {userName ? (
            <>
              <div className='user-profile'>
                <span><FaUserCircle /></span>
              <span>{userName.toUpperCase()}</span>
              </div>
             <Link to="/"> <button onClick={handleLogout}>Logout</button></Link>
              
            </>
          ) : (
            <Link to="/login"><button>Login</button></Link>
          )}
          <Link to="/cart"><span className='cart'><FaShoppingCart /></span><p className="cart-qty">{cart && cart.length}</p></Link>
          <span className='bar' onClick={toggleChange}>{isOpen ? <RxCross2 /> : <GiHamburgerMenu />}</span>
        </div>
      </nav>
    </>
  )
}

export default Navbar
