/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Slider.css";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <div className="container slide">
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          //  autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-slide">
              <div className="slide-item">
                <div>
                  <p className="slide-item-des">Best Deal Online on smart watches</p>
                  <h2 className="slide-item-heading">SMART WEARABLE.</h2>
                  <p className="slide-item-label">UP to 80% OFF</p>
                </div>
                <img src="/image/slide3.png" alt="Slide 1" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-item">
              <div>
                <p className="slide-item-des">Best Deal Online on smart watches</p>
                <h2 className="slide-item-heading">SMART WEARABLE.</h2>
                <p className="slide-item-label">UP to 80% OFF</p>
              </div>
              <img src="/image/slide2.jpg" alt="Slide 2" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-item">
              <div>
                <p className="slide-item-des">Best Deal Online on smart watches</p>
                <h2 className="slide-item-heading">SMART WEARABLE.</h2>
                <p className="slide-item-label">UP to 80% OFF</p>
              </div>
              <img src="/image/slide4.png" alt="Slide 3" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-item">
              <div>
                <p className="slide-item-des">Best Deal Online on smart watches</p>
                <h2 className="slide-item-heading">SMART WEARABLE.</h2>
                <p className="slide-item-label">UP to 80% OFF</p>
              </div>
              <img src="/image/slide2.jpg" alt="Slide 4" />
            </div>
          </SwiperSlide>

          {/* Custom Navigation Buttons */}
          <div className="swiper-button-next">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 5L15.5 12L8.5 19"
                stroke="#008ECC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="swiper-button-prev">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 5L8.5 12L15.5 19"
                stroke="#008ECC"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Swiper>
      </div>
    </>
  );
}
