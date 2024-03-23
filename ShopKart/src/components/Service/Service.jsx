import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoReturnDownBack } from "react-icons/io5";
import { MdProductionQuantityLimits } from "react-icons/md";
import "./Service.css";

const Service = () => {
  return (
    <>
      <div className="main-service">
        <div className="service">
          <span>
            <FaShippingFast />
          </span>
          <p>Free Shipping</p>
        </div>

        <div className="service">
          <span>
            <FaRegCreditCard />
          </span>
          <p>Secure Payments</p>
        </div>

        <div className="service">
          <span>
            <IoReturnDownBack />
          </span>
          <p>Easy Returns</p>
        </div>

        <div className="service">
          <span>
            <MdProductionQuantityLimits />
          </span>
          <p>Authenticate Products</p>
        </div>
      </div>
    </>
  );
};

export default Service;
