// Cart assets
import product1 from "./images/image-product-1.jpg";
import iconDelete from "./images/icon-delete.svg";

const thumbnails = {
  0: product1,
};

function Cart({ cartItems, deleteCartItem }) {
  let cartSection;

  if (!cartItems || cartItems.length == 0) {
    cartSection = (
      <div className="h-32 grid place-items-center">
        <span className="font-bold text-dark-grayish-blue">
          Your cart is empty.
        </span>
      </div>
    );
  } else {
    let cartItemComponents = (
      <div>
        {cartItems.map((product) => (
          <div className="h-12 flex items-center my-3" key={product.id}>
            {/* Thumbnail */}
            <div className="flex items-center">
              <img
                className="rounded-lg w-12 h-12"
                src={thumbnails[product.id]}
              />
            </div>
            <div className="flex items-center px-3 ">
              {/* Product info */}
              <div>
                <span className="">{product.name}</span>
                <br />
                <span>
                  ${product.price} x {product.quantity}
                </span>
                <span className="font-bold">
                  &nbsp; ${product.price * product.quantity}
                </span>
              </div>
            </div>
            <div className="flex grow items-center">
              {/* Delete Button */}
              <button
                onClick={() => deleteCartItem(product.id)}
                className="mx-auto"
              >
                <img src={iconDelete} />
              </button>
            </div>
          </div>
        ))}
      </div>
    );

    cartSection = (
      <div className="h-40 grid px-3 text-sm">
        {cartItemComponents}
        <a
          href="/"
          className="h-12 bg-orange text-white rounded-lg font-bold text-center flex justify-center flex-col"
        >
          Checkout
        </a>
      </div>
    );
  }

  return (
    <div className="w-80 my-5 relative border-2 bg-white rounded-lg shadow-xl">
      <div className="border-b-2 py-2 px-3">
        <span>Cart</span>
      </div>
      {cartSection}
    </div>
  );
}

export default Cart;
