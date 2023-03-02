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
      <button onClick={() => SetModalVisiblity(true)}>
        {" "}
        <img
          src={displayed_images[CurrentImageIndex].img}
          className="md:rounded-lg"
          alt="main gallery image"
        />
      </button>

      <div className="grid grid-cols-4 gap-4 mt-10 px-5 md:px-0 mb-5 md:mb-0">
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
              <img src={closeIcon} />
            </button>
            {/* previous button */}
            <button
              onClick={() => {
                if (CurrentImageIndex == 0) {
                  setCurrentImageIndex(numImages - 1);
                } else {
                  setCurrentImageIndex(CurrentImageIndex - 1);
                }
              }}
              className="bg-white w-10 h-10 rounded-full absolute left-0 top-1/2"
            >
              <img src={iconPrevious} className="mx-auto" />
            </button>
            {/* Next button */}
            <button
              onClick={() =>
                setCurrentImageIndex((CurrentImageIndex + 1) % numImages)
              }
              className="bg-white w-10 h-10 rounded-full absolute right-0 top-1/2"
            >
              <img className="mx-auto" src={iconNext} />
            </button>

            {/* Main Lightbox Image */}
            <img
              className="mx-auto rounded-xl"
              src={displayed_images[CurrentImageIndex].img}
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
