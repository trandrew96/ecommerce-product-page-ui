import React, { useState } from "react";

import logo from "./images/logo.svg";
import cartIcon from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png";

function Nav({ toggleCart }) {
  const [sidebarOpen, setOpen] = useState(false);

  return (
    <div className="">
      {/* Mobile Menu (sidebar) */}
      <div
        className={
          "h-full fixed z-10 top-0 left-0 overflow-hidden transition-width duration-300 bg-white font-bold " +
          (sidebarOpen ? " w-60 " : " w-0 ")
        }
      >
        <div className="flex flex-col ">
          <div className="mb-2 px-5 py-4">
            <button className="my-2" onClick={() => setOpen(false)}>
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#69707D"
                  fillRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <a className="my-2 px-5 py-1" href="#">
            Collections
          </a>
          <a className="my-2 px-5 py-1" href="#">
            Men
          </a>
          <a className="my-2 px-5 py-1" href="#">
            Women
          </a>
          <a className="my-2 px-5 py-1" href="#">
            About
          </a>
          <a className="my-2 px-5 py-1" href="#">
            Contact
          </a>
        </div>
      </div>

      {/* Navbar from left to right: mobile hamburger button, logos, links, cart, avatar */}
      {/* On Mobile: display hamburger/logo, then hide links, then display cart/avatar */}
      <div className="flex px-5 md:px-0">
        {/* Hamburger */}
        <div className="flex lg:hidden mr-2">
          <button className="" onClick={() => setOpen(true)}>
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
                fill="#69707D"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center lg:border-b-2 border-dark-grayish-blue">
          <a
            className="md:flex items-center border-b-4 border-transparent lg:mr-8 ml-3 lg:ml-0"
            href="#"
          >
            <img className="" src={logo} alt="sneakers logo" />
          </a>
        </div>

        {/* Entire right side of navbar. Keep links, cart, profile in same div so border-bottom works nicely */}
        <div className="lg:border-b-2 border-dark-grayish-blue flex items-center grow">
          {/* Links (hidden on mobile) */}
          <div className="hidden lg:flex text-dark-grayish-blue font-bold">
            <a
              className="h-32 box-border border-b-4 border-transparent hover:border-orange mx-8 md:flex items-center"
              href="#"
            >
              Collections
            </a>
            <a
              className="h-32 box-border border-b-4 border-transparent hover:border-orange mx-8 flex items-center"
              href="#"
            >
              Men
            </a>
            <a
              className="h-32 box-border border-b-4 border-transparent hover:border-orange mx-8 flex items-center"
              href="#"
            >
              Women
            </a>
            <a
              className="h-32 box-border border-b-4 border-transparent hover:border-orange mx-8 flex items-center"
              href="#"
            >
              About
            </a>
            <a
              className="h-32 box-border border-b-4 border-transparent hover:border-orange mx-8 flex items-center"
              href="#"
            >
              Contact
            </a>
          </div>

          {/* Cart, Profile */}
          <div className="flex ml-auto">
            {/* Cart */}
            <button onClick={toggleCart} className="mr-5 md:mx-10">
              <img src={cartIcon} alt="cart icon" />
            </button>
            {/* Avatar */}
            <button className="w-8 my-2 md:my-0 md:w-16 hover:bg-orange p-1 rounded-full">
              <img src={avatar} alt="avatar" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
