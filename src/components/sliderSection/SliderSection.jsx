/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export default function SliderSection({label = "Today is", heading= "Today is"}) {

  const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3000/product')
            .then(response => {
                setData(response.data);  // Lưu dữ liệu từ API vào state
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);
    const addToCart = (product) => {
    axios.post('http://localhost:3000/cart', product)
      .then(response => {
         toast.success("Product added to cart", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
      });
      })
      .catch(error => {
         toast.error("Please try again", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      });
  };
  return (
    <section className="section">
      <div className="container">
        <div className="section_category">
          <p className="section_category_p">{label}</p>
        </div>
        <div className="section_header">
          <div className="section_header_left">
            <h3 className="section_title">{heading}</h3>
           
          </div>
          <div className="swiper-button-wrap">
            <div className="swiper-button-prev swiper-button-prev2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 5L4 12L11 19M4 12H20"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p></p>
            <div className="swiper-button-next swiper-button-next2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 12H20M20 12L13 5M20 12L13 19"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="swiper mySwiper2" id="flash_sale">
          <Swiper
            slidesPerView={2}
            spaceBetween={10}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 14,
              },
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="mySwiper"
          >
            <div className="swiper-wrapper">
               {data && data.map(item => (
                 <SwiperSlide key={item?.id}>
                <div className="swiper-slide">
                  <div  className="card">
                  <Link to={`/products/${item?.id}`}>
                    <div className="card_top">
                      <img
                        src={item.image}
                        alt=""
                        className="card_img"
                      />
                      <div className="card_tag">-40%</div>
                      <div className="card_top_icons">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="card_top_icon"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="card_top_icon"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                    </div>
                  </Link>

                    <div className="card_body">
                      <h3 className="card_title">{item.title}</h3>

                      <div className="card_list_price">
                        <p className="card_price">${item.price}</p>
                        <span className="card_del">${item.price_del}</span>
                      </div>
                      <div className="card_ratings">
                        <div className="card_stars">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <p className="card_rating_numbers">(88)</p>
                      </div>
                      <button className="add_to_cart" onClick={() => addToCart(item)}>
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 44 45"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            y="0.5"
                            width="44"
                            height="44"
                            rx="8"
                            fill="#029FAE"
                          />
                          <path
                            d="M12.75 13.75L14.83 14.11L15.793 25.583C15.83 26.0345 16.0358 26.4554 16.3695 26.7618C16.7031 27.0682 17.14 27.2375 17.593 27.236H28.503C28.9367 27.2365 29.3561 27.0803 29.6838 26.7963C30.0116 26.5122 30.2258 26.1194 30.287 25.69L31.237 19.132C31.2623 18.9576 31.253 18.7799 31.2096 18.6091C31.1662 18.4383 31.0896 18.2777 30.9841 18.1365C30.8786 17.9954 30.7463 17.8764 30.5947 17.7864C30.4432 17.6964 30.2754 17.6371 30.101 17.612C30.037 17.605 15.164 17.6 15.164 17.6"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M24.125 21.295H26.898"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.154 30.703C17.2273 30.6999 17.3006 30.7116 17.3692 30.7375C17.4379 30.7634 17.5007 30.8029 17.5537 30.8537C17.6067 30.9045 17.6488 30.9655 17.6777 31.033C17.7065 31.1005 17.7213 31.1731 17.7213 31.2465C17.7213 31.3199 17.7065 31.3926 17.6777 31.4601C17.6488 31.5276 17.6067 31.5886 17.5537 31.6393C17.5007 31.6901 17.4379 31.7296 17.3692 31.7555C17.3006 31.7814 17.2273 31.7932 17.154 31.79C17.0139 31.784 16.8815 31.7241 16.7845 31.6228C16.6875 31.5216 16.6333 31.3868 16.6333 31.2465C16.6333 31.1063 16.6875 30.9715 16.7845 30.8702C16.8815 30.7689 17.0139 30.709 17.154 30.703Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28.435 30.703C28.5795 30.703 28.7181 30.7604 28.8204 30.8626C28.9226 30.9648 28.98 31.1035 28.98 31.248C28.98 31.3925 28.9226 31.5312 28.8204 31.6334C28.7181 31.7356 28.5795 31.793 28.435 31.793C28.2904 31.793 28.1518 31.7356 28.0496 31.6334C27.9474 31.5312 27.89 31.3925 27.89 31.248C27.89 31.1035 27.9474 30.9648 28.0496 30.8626C28.1518 30.7604 28.2904 30.703 28.435 30.703Z"
                            fill="white"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
             
         
            </div>
          </Swiper>
        </div>
        <div className="container_btn">
          <a href="#" className="container_btn_a">
            VIEW ALL PRODUCTS
          </a>
        </div>
      </div>
    </section>
  );
}
