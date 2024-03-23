import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import AllProducts from "./pages/AllProducts/AllProducts";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Cart from "./components/Cart/Cart";
import Register from "./pages/Register/Register";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { auth } from "./Firebase/FirebaseAuth";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  const [cart, setCart] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUsername(user.displayName);
        loadUserCart(user.uid); 
      } else {
        setUsername("");
        setCart([]); 
      }
    });
    
    return () => unsubscribe();
  }, []);

  const loadUserCart = (userId) => {
    if (auth.currentUser) {
      const storedCart = localStorage.getItem(`cart_${userId}`);
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  };
  


  const AddToCart = (product) => {
    if (auth.currentUser) {
      const isProductExist = cart.find((findItem) => findItem.id === product.id);
  
      if (isProductExist) {
        const updateQty = cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCart(updateQty);
        updateLocalStorageCart(updateQty);
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
        updateLocalStorageCart([...cart, { ...product, quantity: 1 }]);
      }
      toast.success("Added to cart");
    } else {
      toast.error("Please login first to add items to cart");
    }
  };
  

  const handleInc = (id) => {
    const IncQty = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(IncQty);
    updateLocalStorageCart(IncQty);
  };

  const handleDec = (id) => {
    const DecQty = cart.map((item) =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCart(DecQty);
    updateLocalStorageCart(DecQty);
  };

  const handleRemove = (id) => {
    const removeItem = cart.filter((filterItem) => filterItem.id !== id);
    setCart(removeItem);
    updateLocalStorageCart(removeItem);
  };

  const updateLocalStorageCart = (cart) => {
    if (auth.currentUser) {
      localStorage.setItem(`cart_${auth.currentUser.uid}`, JSON.stringify(cart));
    }
  };
  

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        setUsername("");
        toast.success('Logout successful');
      })
      .catch((error) => {
        console.error("Logout error:", error);
        toast.error('Logout failed');
      });
  };
  
  
  

  return (
    <>
      <BrowserRouter>
        <Navbar userName={username} cart={cart} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home userName={username} cart={cart} />} />
          <Route path="/allProducts" element={<AllProducts AddToCart={AddToCart} />} />
          <Route path="/about" element={<About AddToCart={AddToCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cart={cart} handleInc={handleInc} handleDec={handleDec} handleRemove={handleRemove} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productdetails/:productId" element={<ProductDetails AddToCart={AddToCart} />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
