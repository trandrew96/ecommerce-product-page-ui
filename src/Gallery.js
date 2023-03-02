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

const active_thumbnail_class = "bg-orange p-1 md:rounded-lg ";

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
      className={index === CurrentImageIndex ? active_thumbnail_class : ""}
      key={index}
    >
      <img src={image.thumbnail} className="rounded-lg" alt="gallery button" />
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
          <div className="relative px-5 text-right">
            <button onClick={() => SetModalVisiblity(false)}>
              <img src={closeIcon} alt="close lightbox" />
            </button>
            {/* previous button */}
            <button
              onClick={goPreviousImage}
              className="bg-white w-10 h-10 rounded-full absolute left-0 top-1/2"
            >
              <img
                src={iconPrevious}
                className="mx-auto"
                alt="previous button"
              />
            </button>
            {/* Next button */}
            <button
              onClick={goNextImage}
              className="bg-white w-10 h-10 rounded-full absolute right-0 top-1/2"
            >
              <img className="mx-auto" src={iconNext} alt="next button" />
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
