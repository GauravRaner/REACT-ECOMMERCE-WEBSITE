import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <div>
            <h2>ShopKart</h2>
          </div>

          <div>
            <h4>About</h4>
            <li>About us</li>
            <li>Contact us</li>
            <li>Careers</li>
            <li>press</li>
          </div>

          <div>
            <h4>Help</h4>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>FAQ</li>
          </div>

          <div>
            <h4>Consumer Policy</h4>
            <li>Security</li>
            <li>Return</li>
            <li>Privacy</li>
            <li>Terms Of Uses</li>
          </div>
        </div>
        <div className="social-media">
          <span>
            <BsFacebook />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaSquareXTwitter />
          </span>
          <span>
            <MdEmail />
          </span>
        </div>
        <div className="copyright">©2023 all rights reserved.</div>
      </footer>
    </>
  );
};

export default Footer;
