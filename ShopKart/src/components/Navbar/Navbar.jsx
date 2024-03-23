import React, { useState } from "react";
import logo from "../../assets/shopLogo.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { Button, Modal } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import "./Navbar.css";

const Navbar = ({ userName, cart, handleLogout }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggleChange = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoutConfirmation = () => {
    setOpenModal(true);
  };

  const handleConfirmLogout = () => {
    handleLogout();
    setOpenModal(false);
  };

  const handleCancelLogout = () => {
    setOpenModal(false);
  };

  return (
    <>
      <nav>
        <Link to="/">
          <div className="nav-logo">
            <img src={logo} alt="" />
            <p>
              Shop<span>Kart</span>
            </p>
          </div>
        </Link>

        <div className={isOpen ? "nav-elements2" : "nav-elements"}>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            onClick={toggleChange}
          >
            <li>Home</li>
          </Link>
          <Link
            to="/AllProducts"
            style={{ textDecoration: "none" }}
            onClick={toggleChange}
          >
            <li>All Products</li>
          </Link>
          <Link
            to="/about"
            style={{ textDecoration: "none" }}
            onClick={toggleChange}
          >
            <li>About</li>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none" }}
            onClick={toggleChange}
          >
            <li>Contact</li>
          </Link>
        </div>

        <div className="nav-items">
          {userName ? (
            <>
              <div className="user-profile">
                <span>
                  <FaUserCircle />
                </span>
                <span>{userName.toUpperCase()}</span>
              </div>
              <Button
                onClick={handleLogoutConfirmation}
                className="logout-btn bg-red-500"
                style={{ padding: "0px 8px", backgroundColor: "red" }}
              >
                Logout
              </Button>
              <Modal
                show={openModal}
                size="sm"
                onClose={() => setOpenModal(false)}
                popup
              >
                <Modal.Header />
                <Modal.Body>
                  <div className="text-center">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                      Are you sure you want to logout?
                    </h3>
                    <div className="flex justify-center gap-4">
                      <Button color="failure" onClick={handleConfirmLogout}>
                        Logout
                      </Button>
                      <Button color="gray" onClick={handleCancelLogout}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </Modal.Body>
              </Modal>
            </>
          ) : (
            <Link to="/login">
              <Button
                style={{ padding: "0px 8px", backgroundColor: "green" }}
                className="logout-btn bg-red-500"
              >
                Login
              </Button>
            </Link>
          )}
          <div className="nav-icon">
            <Link to="/cart">
              <span className="cart">
                <FaShoppingCart />
              </span>
              <p className="cart-qty">{cart && cart.length}</p>
            </Link>
            <span className="bar" onClick={toggleChange}>
              {isOpen ? <RxCross2 /> : <GiHamburgerMenu />}
            </span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
