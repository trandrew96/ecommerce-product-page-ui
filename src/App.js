import React, { useState } from "react";
import ProductForm from "./ProductForm.js";
import Gallery from "./Gallery.js";
import Description from "./Description.js";
import Nav from "./Nav.js";
import Cart from "./Cart.js";

import "./App.css";

const SneakerMetadata = {
  id: 0,
  name: "Fall Limited Edition Sneakers",
  price: 125.0,
  quantity: 0,
};

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

      setCartItems(newCartItems);

      // if item is not in cart, add it
    } else {
      let sneakerData = SneakerMetadata;
      sneakerData.quantity = quantityChange;
      setCartItems([sneakerData]);
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
        <div className="absolute md:right-0 sm:pr-5 md:pr-0 h-100 w-screen md:w-100">
          <div className="z-50 mx-auto md:mx-0 w-fit md:w-100 md:right-0 md:absolute relative">
            <Cart cartItems={cartItems} deleteCartItem={deleteCartItem}></Cart>
          </div>
        </div>
        {/* Transparent background, because we want the cart to close when the user clicks outside of the popup */}
        <div
          onClick={toggleCart}
          className="fixed top-0 left-0 right-0 bottom-0 block bg-transparent"
        ></div>
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
