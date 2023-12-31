import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Nav() {
  const items = useSelector((state)=>state.cart)
  
  return (
    <div>
      <nav className="bg-blue-500 p-5 fixed w-full top-0">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="#" className="text-white font-bold text-xl">
            Redux Demo
          </Link>

          <div className="space-x-12">
            <Link className="text-white text-xl hover:text-gray-300" to="/">
              Home
            </Link>
            <Link
              className="text-white text-xl hover:text-gray-300"
              to="/Wishlist"
            >
              Wishlist
            </Link>
            <Link className="text-white text-xl hover:text-gray-300" to="/Cart">
              Cart
            </Link>

            <span className="text-white text-xl font-bold">CartCount : {items.length}</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
