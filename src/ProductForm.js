import React, { useState } from "react";

const ProductForm = ({ maxQuantity, productId, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    if (quantity < maxQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <form>
      <div className="flex flex-wrap md:flex-nowrap mt-10">
        <div className="flex bg-light-grayish-blue md:mr-3 w-full md:w-max h-16">
          <div className="w-2/6 md:w-14 lg:w-20 flex text-center pl-5 md:pl-3">
            <button
              onClick={decrementQuantity}
              className="md:mx-auto hover:opacity-50"
              type="button"
            >
              <svg width="12" height="4" className="fill-orange">
                <path
                  d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                  id="a"
                />
              </svg>
            </button>
          </div>
          <div className="w-2/6 md:w-14 lg:w-20 flex text-center items-center">
            <span className="font-bold mx-auto">{quantity}</span>
          </div>
          <div className="w-2/6 md:w-14 lg:w-20 flex text-right md:text-center pr-5 md:pr-3">
            <button
              onClick={incrementQuantity}
              className="ml-auto md:mx-auto hover:opacity-50"
              type="button"
            >
              <svg width="12" height="12" className="fill-orange">
                <path
                  d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                  id="b"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full">
          <button
            onClick={() => addToCart(productId, quantity)}
            className="bg-orange text-white w-full rounded-lg py-5 my-5 md:my-0 font-bold flex justify-center items-center hover:opacity-50"
            type="button"
          >
            <svg
              width="22"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              className="inline fill-white mr-3"
            >
              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
            </svg>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
