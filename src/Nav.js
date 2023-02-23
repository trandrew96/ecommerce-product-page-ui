import React, { useState } from "react";

import logo from "./images/logo.svg";
import cartIcon from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      {/* Mobile Menu (sidebar) */}
      <div
        className={
          (open ? "" : "hidden ") +
          "fixed z-10 h-full bg-white w-60 font-bold pt-6 px-5 transition ease-in-out delay-150"
        }
      >
        <div className="flex flex-col ">
          <div className="mb-10">
            <button className="my-2" onClick={() => setOpen(false)}>
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#69707D"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
          </div>
          <a className="my-2" href="#">
            Collections
          </a>
          <a className="my-2" href="#">
            Men
          </a>
          <a className="my-2" href="#">
            Women
          </a>
          <a className="my-2" href="#">
            About
          </a>
          <a className="my-2" href="#">
            Contact
          </a>
        </div>
      </div>

      {/* Navbar from left to right: mobile hamburger button, logos, links, cart, avatar */}
      {/* On Mobile: display hamburger/logo, then hide links, then display cart/avatar */}
      <div className="flex px-5">
        {/* Hamburger */}
        <div className="flex lg:hidden">
          <button className="" onClick={() => setOpen(true)}>
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
                fill="#69707D"
                fill-rule="evenodd"
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
            <button className="mx-10">
              <img src={cartIcon} alt="cart icon" />
            </button>
            <button className="w-16 hover:bg-orange p-1 rounded-full">
              <img src={avatar} alt="avatar" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
