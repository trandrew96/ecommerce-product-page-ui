import { useState } from "react";

import product1 from "./images/image-product-1.jpg";
import product2 from "./images/image-product-2.jpg";
import product3 from "./images/image-product-3.jpg";
import product4 from "./images/image-product-4.jpg";
import thumbnail1 from "./images/image-product-1-thumbnail.jpg";
import thumbnail2 from "./images/image-product-2-thumbnail.jpg";
import thumbnail3 from "./images/image-product-3-thumbnail.jpg";
import thumbnail4 from "./images/image-product-4-thumbnail.jpg";

import closeIcon from "./images/icon-close.svg";
import iconPrevious from "./images/icon-previous.svg";
import iconNext from "./images/icon-next.svg";

const displayed_images = [
  { img: product1, thumbnail: thumbnail1 },
  { img: product2, thumbnail: thumbnail2 },
  { img: product3, thumbnail: thumbnail3 },
  { img: product4, thumbnail: thumbnail4 },
];

const active_thumbnail_class = " outline outline-4 outline-orange ";

function Gallery() {
  const numImages = displayed_images.length;
  const [CurrentImageIndex, setCurrentImageIndex] = useState(0);
  const [ModalVisible, SetModalVisiblity] = useState(false);

  const goPreviousImage = () => {
    if (CurrentImageIndex === 0) {
      setCurrentImageIndex(numImages - 1);
    } else {
      setCurrentImageIndex(CurrentImageIndex - 1);
    }
  };

  const goNextImage = () => {
    setCurrentImageIndex((CurrentImageIndex + 1) % numImages);
  };

  let thumbnails = displayed_images.map((image, index) => (
    <button
      onClick={() => setCurrentImageIndex(index)}
      className={
        (index === CurrentImageIndex ? active_thumbnail_class : "") +
        "rounded-xl bg-clip-border bg-white"
      }
      key={index}
    >
      <img
        src={image.thumbnail}
        className="rounded-lg hover:opacity-50 "
        alt="gallery button"
      />
    </button>
  ));

  return (
    <div>
      {/* Main Gallery image is also a button on larger screens to open toggle lightbox*/}
      <button
        onClick={() => SetModalVisiblity(true)}
        className="hidden md:block"
      >
        <img
          src={displayed_images[CurrentImageIndex].img}
          className="md:rounded-lg"
          alt="product"
        />
      </button>

      {/* Main gallery image has previous/next buttons overlayed on top for mobile */}
      <div className="relative block md:hidden mb-10 md:mb-0">
        <img src={displayed_images[CurrentImageIndex].img} alt="product" />
        <button
          onClick={goPreviousImage}
          className="absolute left-0 top-1/2 bg-white rounded-full w-10 h-10 ml-2"
        >
          <img src={iconPrevious} className="mx-auto" alt="left arrow" />
        </button>
        <button
          onClick={goNextImage}
          className="absolute right-0 top-1/2 bg-white rounded-full w-10 h-10 mr-2"
        >
          <img src={iconNext} className="mx-auto" alt="right arrow" />
        </button>
      </div>

      {/* Thumbnail buttons to switch main image */}
      <div className="hidden md:grid grid-cols-4 gap-4 mt-10 px-5 md:px-0 mb-5 md:mb-0">
        {thumbnails}
      </div>

      {/* Lightbox */}
      <div
        className={
          (ModalVisible ? "" : "hidden") +
          " fixed z-20 left-0 top-0 w-full h-full overflow-auto bg-black/[.8] pt-20"
        }
      >
        {/* Modal Content */}
        <div className="max-w-screen-sm mx-auto ">
          {/* Main lightbox image, previous/next buttons, close btn*/}
          <div className="relative px-6 text-right">
            {/* Close button */}
            <button
              onClick={() => SetModalVisiblity(false)}
              className="w-6 h-6 mb-8"
            >
              <svg
                className="fill-[#69707D] hover:fill-orange"
                viewBox="0 0 14 15"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            {/* previous button */}
            <button
              onClick={goPreviousImage}
              className="bg-white w-14 h-14 rounded-full absolute left-0 top-1/2 flex justify-center align-middle items-center"
            >
              <svg
                className="stroke-[#1D2026] hover:stroke-orange p-5"
                viewBox="0 0 12 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1 3 9l8 8"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </button>
            {/* Next button */}
            <button
              onClick={goNextImage}
              className="bg-white w-14 h-14 rounded-full absolute right-0 top-1/2 flex justify-center align-middle items-center"
            >
              <svg
                className="stroke-[#1D2026] hover:stroke-orange p-5"
                viewBox="0 0 13 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m2 1 8 8-8 8"
                  stroke-width="3"
                  fill="none"
                  fill-rule="evenodd"
                />
              </svg>
            </button>

            {/* Main Lightbox Image */}
            <img
              className="mx-auto rounded-xl"
              src={displayed_images[CurrentImageIndex].img}
              alt="product"
            />
          </div>
          {/* Thumbnails in lightbox */}
          <div className="grid grid-cols-4 gap-4 mt-10 md:px-10 mb-5 md:mb-0">
            {thumbnails}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
