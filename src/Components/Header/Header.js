import React from "react";
import Navbar from "./Navbar";
import { FiShoppingCart } from "react-icons/fi";

import { Link } from "react-router-dom";

import logo from "./logo2.svg";
import Logins from "../Sing/Logins";

export default function Header() {
  return (
    <div className="header">
      <div className="HeLogo">
        <div className="hed-l">
          <img className="logos" src={logo} alt="" />

          {/* <li className='pho'>< BiPhoneCall />1800-111-111</li> */}
          <div className="shar-bar">
            <li className="sherb-bar">
              <i className="fa-solid fa-magnifying-glass">
                {" "}
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="What are you looking for"
                />
              </i>{" "}
            </li>
          </div>
          <div className="opli">
          <div className="tsw">
            <li>
              {/* <Link className="nav-bar-ls" to="/Login">
                Log In{" "}
              </Link>
              <Link className="nav-bar-li" to="/Singup">
                Sing Up
              </Link> */}
             <Logins/>
             
            </li>
            <li>
              <FiShoppingCart /> Cart
            </li>
            <li>
              <i className="fa-regular fa-heart"></i> Wishlit
            </li>

            <li> Track Order</li>
          </div>
        </div>
        </div>
        
      </div>
      <div className="nav-bar-c">
        <Navbar />
      </div>
    </div>
  );
}
