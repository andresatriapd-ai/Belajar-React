
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./section-conten.css";

  // ------------------------------------//
import clinic1 from "./gambar-project1/clinic1.jpg";
import clinic2 from "./gambar-project1/clinic2.jpg";
import clinic3 from "./gambar-project1/clinic3.jpg";
import clinic4 from "./gambar-project1/clinic4.jpg";
import clinic5 from "./gambar-project1/clinic5.jpg";
  

const portoClinic = [
  { src: clinic1, alt: "clinic 1" },
  { src: clinic2, alt: "clinic 2" },
  { src: clinic3, alt: "clinic 3" },
  { src: clinic4, alt: "clinic 4" },
  { src: clinic5, alt: "clinic 5" },
  // ------------------------------------//

];
// --------------------------------------------------//
import kidroomGirl1 from "./gambar-project2/kidroomGirl1.jpg";
import kidroomGirl2 from "./gambar-project2/kidroomGirl2.jpg";
import kidroomGirl3 from "./gambar-project2/kidroomGirl3.jpg";
import kidroomGirl4 from "./gambar-project2/kidroomGirl4.jpg";
import kidroomGirl5 from "./gambar-project2/kidroomGirl5.jpg";


const portoKidroomGirl = [
   { src: kidroomGirl1, alt: "kidroomGirl 1" },
   { src: kidroomGirl2, alt: "kidroomGirl 2" },
   { src: kidroomGirl3, alt: "kidroomGirl 3" },
   { src: kidroomGirl4, alt: "kidroomGirl 4" },
   { src: kidroomGirl5, alt: "kidroomGirl 5" },
]

// // ---------------//
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
// // ---------------//

// // ---------------//
import tokosepatu1 from "./gambar-project4/tokosepatu1.jpg";
import tokosepatu2 from "./gambar-project4/tokosepatu2.jpg";
import tokosepatu3 from "./gambar-project4/tokosepatu3.jpg";
import tokosepatu4 from "./gambar-project4/tokosepatu4.jpg";
import tokosepatu5 from "./gambar-project4/tokosepatu5.jpg";

const portoTokosepatu = [
  { src: tokosepatu1, alt: "tokosepatu 1" },
  { src: tokosepatu2, alt: "tokosepatu 2" },
  { src: tokosepatu3, alt: "tokosepatu 3" },
  { src: tokosepatu4, alt: "tokosepatu 4" },
  { src: tokosepatu5, alt: "tokosepatu 5" },
]
// -----------------------
import biointi1 from "./gambar-project5/biointi1.jpg";
import biointi2 from "./gambar-project5/biointi2.jpg";
import biointi3 from "./gambar-project5/biointi3.jpg";
import biointi4 from "./gambar-project5/biointi4.jpg";
import biointi5 from "./gambar-project5/biointi5.jpg";

const portoBiointi = [
   
  { src: biointi1, alt: "biointi 1" },
  { src: biointi2, alt: "biointi 2" },
  { src: biointi3, alt: "biointi 3" },
  { src: biointi4, alt: "biointi 4" },
  { src: biointi5, alt: "biointi 5" },
]
// -------------------------

// --------------------------
import spa1 from "./gambar-project6/spa1.jpg";
import spa2 from "./gambar-project6/spa2.jpg";
import spa3 from "./gambar-project6/spa3.jpg";
import spa4 from "./gambar-project6/spa4.jpg";
import spa5 from "./gambar-project6/spa5.jpg";

const portospa = [
  { src: spa1, alt: "spa 1" },
  { src: spa2, alt: "spa 2" },
  { src: spa3, alt: "spa 3" },
  { src: spa4, alt: "spa 4" },
  { src: spa5, alt: "spa 5" },
]
// --------------------------------
import serenia1 from "./gambar-project7/serenia1.jpg";
import serenia2 from "./gambar-project7/serenia2.jpg";
import serenia3 from "./gambar-project7/serenia3.jpg";
import serenia4 from "./gambar-project7/serenia4.jpg";
import serenia5 from "./gambar-project7/serenia5.jpg";

const portoSerenia = [
  { src: serenia1, alt: "serenia 1" },
   { src: serenia2, alt: "serenia 2" },
    { src: serenia3, alt: "serenia 3" },
     { src: serenia4, alt: "serenia 4" },
      { src: serenia5, alt: "serenia 5" },
]
// ------------------

// ------------------
import duckil1 from "./gambar-project8/duckil1.jpg";
import duckil2 from "./gambar-project8/duckil2.jpg";
import duckil3 from "./gambar-project8/duckil3.jpg";

const portoDuckil = [
  { src: duckil1, alt: "duckil 1"},
    { src: duckil2, alt: "duckil 2"},
      { src: duckil3, alt: "duckil 3"},

]
// ---------------------------

import house1 from "./gambar-project9/house1.jpg";
import house2 from "./gambar-project9/house2.jpg";
import house3 from "./gambar-project9/house3.jpg";
import house4 from "./gambar-project9/house4.jpg";
import house5 from "./gambar-project9/house5.jpg";

const portoHouse = [
  { src: house1, alt: "house 1" },
  { src: house2, alt: "house 2" },
  { src: house3, alt: "house 3" },
  { src: house4, alt: "house 4" },
  { src: house5, alt: "house 5" },
  

]
// ----------------------------

// -------------------------
import pondok1 from "./gambar-project10/pondok1.jpg";
import pondok2 from "./gambar-project10/pondok2.jpg";
import pondok3 from "./gambar-project10/pondok3.jpg";
import pondok4 from "./gambar-project10/pondok4.jpg";
import pondok5 from "./gambar-project10/pondok5.jpg";

const portoPondok = [
  {src: pondok1, alt: "pondok 1"},
  {src: pondok2, alt: "pondok 2"},
  {src: pondok3, alt: "pondok 3"},
  {src: pondok4, alt: "pondok 4"},
  {src: pondok5, alt: "pondok 5"},
]


// --------------------------

// ---------------//
const portfolioSlides = [
  {
    title: { id: "Klinik Gigi", en: "Dental Clinic" },
    images: portoClinic,
  },
  {
    title: { id: "Kamar Anak Perempuan", en: "Girl's Bedroom" },
    images: portoKidroomGirl,
  },
  {
    title: { id: "Apartemen Residensial", en: "Residential Apartment" },
    images: portofolioApartemen,
  },
  {
    title: { id: "Toko Sepatu", en: "Retail - Shoe Store" },
    images: portoTokosepatu,
  },
  {
    title: { id: "Kantor Bio Inti Agrindo - Jakarta Selatan", en: "Bio Inti Agrindo Office - South Jakarta" },
    images: portoBiointi,
  },
  {
    title: { id: "Salon dan SPA Glow Up - Jakarta Selatan", en: "Glow Up Salon and Spa - South Jakarta" },
    
    images: portospa,
  },
  {
    title: { id: "Kamar Anak - Serenia Hills Jakarta", en: "Kids' Room - Serenia Hills Jakarta" },
    images: portoSerenia,
  },
  {
    title: { id: "Ruang Meeting & Display - Kantor Duckil Textile Indonesia - Banten", en: "Meeting & Display Room - Duckil Textile Indonesia Office - Banten" },
    
    images: portoDuckil,
  },
  {
    title: { id: "Rumah Ibu M - Jakarta Garden City", en: "Mrs. M's House - Jakarta Garden City" },
    images: portoHouse,
  },
  {
    title: { id: "Rumah Pondok Kopi - Bekasi", en: "Pondok Kopi House - Bekasi" },
    images: portoPondok,
  },
];



export default function SectionConten({ language = "id" }) {
  const isEnglish = language === "en";
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
          delay: 4000,
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
          <SwiperSlide key={slide.title.en}>
            {slide.images ? (
              <div className="portfolio-slide-gallery">
                {slide.images.map((image) => (
                  <button
                    className="portfolio-slide-image"
                    key={image.src}
                    type="button"
                    aria-label={isEnglish ? `Enlarge ${image.alt}` : `Perbesar ${image.alt}`}
                    onClick={() => openImage(image)}
                  >
                    <img src={image.src} alt={image.alt} />
                  </button>
                ))}
              </div>
            ) : (
              <div className="portfolio-slide-placeholder">
                {isEnglish ? "Add project visuals" : "Tambahkan visual proyek"}
              </div>
            )}
            <div className="portfolio-slide-caption">
              <h3>{slide.title[language]}</h3>
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
          aria-label={isEnglish ? `Image preview: ${selectedImage.alt}` : `Pratinjau gambar: ${selectedImage.alt}`}
          onClick={closeImage}
        >
          <button
            className="portfolio-lightbox__close"
            type="button"
            aria-label={isEnglish ? "Close image" : "Tutup gambar"}
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
