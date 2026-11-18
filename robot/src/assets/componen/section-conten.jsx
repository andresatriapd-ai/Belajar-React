
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
// ---------------//
import apartemen1 from "./gambar-project3/apartemen1.jpg";
import apartemen2 from "./gambar-project3/apartemen2.jpg";
import apartemen3 from "./gambar-project3/apartemen3.jpg";
import apartemen4 from "./gambar-project3/apartemen4.jpg";
import apartemen5 from "./gambar-project3/apartemen5.jpg";

 const portofolioApartemen = [
  { src: apartemen1, alt: "apartemen 1" },
  { src: apartemen2, alt: "apartemen 2" },
  { src: apartemen3, alt: "apartemen 3" },
  { src: apartemen4, alt: "apartemen 4" },
  { src: apartemen5, alt: "apartemen 5" },
 ]
// ---------------//

// ---------------//
import kidroom1 from "./gambar-project4/kidroom1.jpg";
import kidroom2 from "./gambar-project4/kidroom2.jpg";
import kidroom3 from "./gambar-project4/kidroom3.jpg";
import kidroom4 from "./gambar-project4/kidroom4.jpg";
import kidroom5 from "./gambar-project4/kidroom5.jpg";

const portofolioKidroom = [
  { src: kidroom1, alt: "kidroom 1" },
  { src: kidroom2, alt: "kidroom 2" },
  { src: kidroom3, alt: "kidroom 3" },
  { src: kidroom4, alt: "kidroom 4" },
  { src: kidroom5, alt: "kidroom 5" },
]

// ---------------//
const portfolioSlides = [
  {
    title: "Ruangan Anak",
    description: "Desain interior ruangan anak.",
    images: portfolioImages,
  },
  {
    title: "Toko Sepatu",
    description: "Desain interior toko sepatu.",
    images: portofolioToko,
  },
  {
    title: "Apartemen",
    description: "Desain interior Apartemen.",
    images: portofolioApartemen,
  },
  {
    title: "Kid Room",
    description: "Desain Interior Kid Room",
    images: portofolioKidroom,
  },
  // {
  //   title: "------------",
  //   description: "--------------",
  //   images: -------------,
  // },
  // {
  //   title: "------------",
  //   description: "--------------",
  //   images: -------------,
  // },
  // {
  //   title: "------------",
  //   description: "--------------",
  //   images: -------------,
  // },
  // {
  //   title: "------------",
  //   description: "--------------",
  //   images: -------------,
  // },
  // {
  //   title: "------------",
  //   description: "--------------",
  //   images: -------------,
  // },
  // {
  //   title: "------------",
  //   description: "--------------",
  //   images: -------------,
  // },
  
  ...Array.from({ length: 11 }, (_, index) => ({
    title: `[Judul proyek ${index + 3}]`,
    description: `[Tambahkan deskripsi proyek ${index + 3}.]`,
  })),
];



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
        {portfolioSlides.map((slide) => (
          <SwiperSlide key={slide.title}>
            {slide.images ? (
              <div className="portfolio-slide-gallery">
                {slide.images.map((image) => (
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
            ) : (
              <div className="portfolio-slide-placeholder">
                Tambahkan visual proyek
              </div>
            )}
            <div className="portfolio-slide-caption">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </SwiperSlide>
        ))}
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
