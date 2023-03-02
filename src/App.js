import React, { useState } from "react";
import ProductForm from "./ProductForm.js";
import Gallery from "./Gallery.js";
import Description from "./Description.js";
import Nav from "./Nav.js";
import Cart from "./Cart.js";

import "./App.css";

const originalCartItems = [
  {
    id: 0,
    name: "Fall Limited Edition Sneakers",
    price: 125.0,
    quantity: 3,
  },
];

const maxQuantity = 11;

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(originalCartItems);

  const deleteCartItem = () => {
    setCartItems([]);
  };

  const addToCart = (productId, quantityChange) => {
    // find if the item is already and get its index
    let itemIndex = -1;
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id == productId) {
        itemIndex = i;
        break;
      }
    }

    // if item is already in cart, change its quantity
    if (itemIndex > -1) {
      let newCartItems = cartItems;
      newCartItems[itemIndex].quantity += quantityChange;

      console.log(newCartItems);
      setCartItems(newCartItems);
      console.log(cartItems);

      // if item is not in cart, add it
    } else {
    }
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className="App max-w-screen-xl mx-auto md:px-10">
      <Nav toggleCart={toggleCart}></Nav>

      {/* Cart */}
      <div className={cartOpen ? "relative" : "hidden"}>
        <div className="absolute right-0 sm:pr-5 md:pr-0">
          <Cart cartItems={cartItems} deleteCartItem={deleteCartItem}></Cart>
        </div>
      </div>

      {/* 2 planes on desktop, 1 plane on mobile */}
      {/* Gallery is on left plane, Description/Buttons on right plane */}
      <div className="grid md:grid-cols-2 md:mt-16 md:gap-14 mb-20">
        <Gallery></Gallery>

        <div className="grid content-center px-5 md:px-0">
          <div>
            {/* Description Section */}
            <Description></Description>
            {/* Form Section (quantity, add to cart) */}
            <div>
              <ProductForm
                maxQuantity={maxQuantity}
                addToCart={addToCart}
                productId={0}
              ></ProductForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
