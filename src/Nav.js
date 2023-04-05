import React, { useState } from "react";

import logo from "./images/logo.svg";
import cartIcon from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png";

function Nav({ toggleCart, numItems }) {
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
              className="h-32 box-border border-b-4 border-transparent hover:border-orange hover:text-black mx-8 md:flex items-center"
              href="#"
            >
              Collections
            </a>
            <a
              className="h-32 box-border border-b-4 border-transparent hover:border-orange hover:text-black mx-8 flex items-center"
              href="#"
            >
              Men
            </a>
            <a
              className="h-32 box-border border-b-4 border-transparent hover:border-orange hover:text-black mx-8 flex items-center"
              href="#"
            >
              Women
            </a>
            <a
              className="h-32 box-border border-b-4 border-transparent hover:border-orange hover:text-black mx-8 flex items-center"
              href="#"
            >
              About
            </a>
            <a
              className="h-32 box-border border-b-4 border-transparent hover:border-orange hover:text-black mx-8 flex items-center"
              href="#"
            >
              Contact
            </a>
          </div>

          {/* Cart, Profile */}
          <div className="flex ml-auto">
            {/* Cart */}
            <button onClick={toggleCart} className="mr-5 md:mx-10 relative">
              <div className="bg-orange rounded-full text-white px-2 text-xs absolute left-3 top-3">
                {numItems > 0 ? numItems : ""}
              </div>
              <svg
                className="fill-[#69707D] hover:fill-black"
                width="22"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
              </svg>
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
