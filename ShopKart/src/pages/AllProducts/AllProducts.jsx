import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AllProducts.css';
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import Navbar from '../../components/Navbar/Navbar';

const AllProducts = ({ AddToCart }) => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectProducts, setSelectProducts] = useState('');
  const [searchProduct, setSearchProduct] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;



  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await axios('https://dummyjson.com/products/categories');
        setCategory(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);

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

  useEffect(() => {
    const getFilteredProducts = async () => {
      try {
        if (selectProducts) {
          const res = await axios(`https://dummyjson.com/products/category/${selectProducts}`);
          setProducts(res.data.products);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getFilteredProducts();
  }, [selectProducts]);

  const filterProducts = (item) => {
    setSelectProducts(item);
  };

  const searchProducts = (e) => {
    setSearchProduct(e.target.value);
  };

  const handleSearchProducts = () => {
    const searchItem = products.filter((searchFilterItem) =>
      searchFilterItem.title.toLowerCase().includes(searchProduct.toLowerCase())
    );
    setProducts(searchItem);
  };

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className='filter-container'>
        {/* Category filter */}
        <div className='category-container'>
          <select onChange={(e) => filterProducts(e.target.value)}>
            <option>Sort by category</option>
            {category
              .filter((filterItems) => !['furniture', 'automotive', 'motorcycle', 'lighting'].includes(filterItems))
              .map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
          </select>
        </div>

        {/* Search bar */}
        <div className='search-container'>
          <input type="text" placeholder='Search product' onChange={searchProducts} />
          <button onClick={handleSearchProducts}><span><CiSearch /></span></button>
        </div>
      </div>

      {/* Product display */}
      <div className='product-container'>
        {currentProducts.map((product) => (
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

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
          <button key={i} onClick={() => paginate(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
