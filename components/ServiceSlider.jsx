import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxDesktop,
    title: "Web Development",
    description: "Building responsive and scalable web applications using the MERN stack.",
  },
  {
    Icon: RxPencil2,
    title: "Frontend Development",
    description: "Crafting dynamic UIs with React, Redux, and Tailwind CSS.",
  },
  {
    Icon: RxRocket,
    title: "Backend Development",
    description: "Creating secure REST APIs with Node.js & Express, MongoDB integration.",
  },
  {
    Icon: RxReader,
    title: "Problem Solving (DSA)",
    description: "Solving Data Structures & Algorithms problems for optimized code.",
  },
  {
    Icon: RxCrop,
    title: "UI/UX Design",
    description: "Designing intuitive interfaces with Figma for smooth user experience.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[280px] sm:h-[320px] lg:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-4 sm:px-6 py-6 sm:py-8 flex sm:flex-col gap-x-4 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-3xl sm:text-4xl text-accent mb-2 sm:mb-4 flex-shrink-0">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-4 sm:mb-8 flex-1">
              <div className="mb-2 text-base sm:text-lg font-semibold">{item.title}</div>
              <p className="max-w-[350px] leading-normal text-sm sm:text-base text-white/80">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-2xl sm:text-3xl flex-shrink-0 self-start sm:self-auto">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
