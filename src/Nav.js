import React, { useState } from "react";

import logo from "./images/logo.svg";
import cartIcon from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png";

function Nav() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      {/* Mobile */}
      <div
        className={
          (open ? "" : "hidden ") +
          "fixed z-10 h-full bg-white w-60 font-bold pt-6"
        }
      >
        <div className="flex flex-col">
          <div className="mb-10">
            {/* Close Button */}
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
      <div className="block bg-white w-full overflow-hidden relative">
        <div className="flex ">
          <button className="" onClick={() => setOpen(true)}>
            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
                fill="#69707D"
                fill-rule="evenodd"
              />
            </svg>
          </button>

          <div className="flex items-center">
            <button className="mx-10">
              <img src={cartIcon} />
            </button>
            <button className="w-16 hover:bg-orange p-1 rounded-full">
              <img src={avatar} />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center border-b-2 border-dark-grayish-blue text-dark-grayish-blue font-bold">
        <a className="border-b-4 border-transparent mr-8" href="#">
          <img className="" src={logo} />
        </a>
        <a
          className="h-32 box-border border-b-4 border-transparent hover:border-orange mx-8 flex items-center"
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
        <div className="items-center flex ml-auto">
          <button className="mx-10">
            <img src={cartIcon} />
          </button>
          <button className="w-16 hover:bg-orange p-1 rounded-full">
            <img src={avatar} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
