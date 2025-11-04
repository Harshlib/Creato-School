import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import OIP from '../Images/OIP.webp'
import oar from '../Images/oar.jpg'

const influencers = [
  {
    img: OIP,
    name: "Influencer 1",
  },
  {
    img: "https://your-image-link-2.jpg",
    name: "Influencer 2",
  },
  {
    img: oar,
    name: "Influencer 3",
  },
  {
    img: "https://your-image-link-4.jpg",
    name: "Influencer 4",
  },
  {
    img: "https://your-image-link-5.jpg",
    name: "Influencer 5",
  },
];

function Students() {
  return (
    <div className="w-full py-12 bg-white">
      <h2 className="text-center text-4xl font-bold mb-8">
        Our Brilliant <span className="text-green-600 italic">Students</span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        className="px-10"
      >
        {influencers.map((inf, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <img
                src={inf.img}
                alt={inf.name}
                className="w-full h-80 object-cover rounded-t-xl"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{inf.name}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Students;
