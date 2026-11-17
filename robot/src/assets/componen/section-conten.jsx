
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./section-conten.css";

  // ------------------------------------//
import gambar1 from "./gambar-project1/gambar1.jpg";
import gambar2 from "./gambar-project1/gambar2.jpg";
import gambar3 from "./gambar-project1/gambar3.jpg";
import gambar4 from "./gambar-project1/gambar4.jpg";
import gambar5 from "./gambar-project1/gambar5.jpg";
  

const portfolioImages = [
  { src: gambar1, alt: "Gambar 1" },
  { src: gambar2, alt: "Gambar 2" },
  { src: gambar3, alt: "Gambar 3" },
  { src: gambar4, alt: "Gambar 4" },
  { src: gambar5, alt: "Gambar 5" },
  // ------------------------------------//

];
// --------------------------------------------------//
import tokosepatu1 from "./gambar-project2/tokosepatu1.jpg";
import tokosepatu2 from "./gambar-project2/tokosepatu2.jpg";
import tokosepatu3 from "./gambar-project2/tokosepatu3.jpg";
import tokosepatu4 from "./gambar-project2/tokosepatu4.jpg";
import tokosepatu5 from "./gambar-project2/tokosepatu5.jpg";

const portofolioToko = [
   { src: tokosepatu1, alt: "tokosepatu 1" },
   { src: tokosepatu2, alt: "tokosepatu 2" },
   { src: tokosepatu3, alt: "tokosepatu 3" },
   { src: tokosepatu4, alt: "tokosepatu 4" },
   { src: tokosepatu5, alt: "tokosepatu 5" },
]



export default function SectionConten() {
  const [selectedImage, setSelectedImage] = useState(null);
  const swiperRef = useRef(null);

  const openImage = (image) => {
    swiperRef.current?.autoplay?.stop();
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
    swiperRef.current?.autoplay?.start();
  };

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="portfolio-swiper"
      >
        <SwiperSlide>
          <div className="portfolio-slide-gallery">
            {portfolioImages.map((image) => (
              <button
                className="portfolio-slide-image"
                key={image.src}
                type="button"
                aria-label={`Perbesar ${image.alt}`}
                onClick={() => openImage(image)}
              >
                <img src={image.src} alt={image.alt} />
              </button>
            ))}
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="portfolio-slide-gallery">
            {portofolioToko.map((image) => (
              <button
                className="portfolio-slide-image"
                key={image.src}
                type="button"
                aria-label={`Perbesar ${image.alt}`}
                onClick={() => openImage(image)}
              >
                <img src={image.src} alt={image.alt} />
              </button>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      {selectedImage && (
        <div
          className="portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          onClick={closeImage}
        >
          <button
            className="portfolio-lightbox__close"
            type="button"
            aria-label="Tutup gambar"
            onClick={closeImage}
          >
            &times;
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
