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

const displayed_images = [
  { img: product1, thumbnail: thumbnail1 },
  { img: product2, thumbnail: thumbnail2 },
  { img: product3, thumbnail: thumbnail3 },
  { img: product4, thumbnail: thumbnail4 },
];

const active_thumbnail_class = "bg-orange p-1 md:rounded-lg ";

function Gallery() {
  const [CurrentImageIndex, setCurrentImageIndex] = useState(0);
  const [ModalVisible, SetModalVisiblity] = useState(true);

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

      {/* Modal Div */}
      <div
        className={
          (ModalVisible ? "" : "hidden") +
          " fixed z-20 left-0 top-0 w-full h-full overflow-auto bg-black/[.8] pt-20"
        }
      >
        {/* Modal Content */}
        <div className="max-w-screen-sm mx-auto px-10">
          <div className="text-right">
            <button
              onClick={() => SetModalVisiblity(false)}
              className="text-right"
            >
              <img src={closeIcon} />
            </button>
          </div>
          <img className="" src={displayed_images[CurrentImageIndex].img} />
          <div className="grid grid-cols-4 gap-4 mt-10 px-5 md:px-0 mb-5 md:mb-0">
            {thumbnails}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
