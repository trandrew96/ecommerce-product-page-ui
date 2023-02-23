import { useState } from "react";

import product1 from "./images/image-product-1.jpg";
import product2 from "./images/image-product-2.jpg";
import product3 from "./images/image-product-3.jpg";
import product4 from "./images/image-product-4.jpg";
import thumbnail1 from "./images/image-product-1-thumbnail.jpg";
import thumbnail2 from "./images/image-product-2-thumbnail.jpg";
import thumbnail3 from "./images/image-product-3-thumbnail.jpg";
import thumbnail4 from "./images/image-product-4-thumbnail.jpg";

const displayed_images = [
  { img: product1, thumbnail: thumbnail1 },
  { img: product2, thumbnail: thumbnail2 },
  { img: product3, thumbnail: thumbnail3 },
  { img: product4, thumbnail: thumbnail4 },
];

const active_thumbnail_class = "bg-orange p-1 md:rounded-lg opacity-70";

function Gallery() {
  const [CurrentImageIndex, setCurrentImageIndex] = useState(2);

  let thumbnails = displayed_images.map((image, index) => (
    <button
      onClick={() => setCurrentImageIndex(index)}
      className={index === CurrentImageIndex ? active_thumbnail_class : ""}
      key={index}
    >
      <img src={image.thumbnail} className="rounded-lg" />
    </button>
  ));

  return (
    <div>
      <img
        src={displayed_images[CurrentImageIndex].img}
        className="md:rounded-lg"
      />
      <div className="grid grid-cols-4 gap-4 mt-10">{thumbnails}</div>
    </div>
  );
}

export default Gallery;
