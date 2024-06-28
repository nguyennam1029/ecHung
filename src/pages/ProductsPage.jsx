/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import "./css/products.css";
import axios from "axios";
import { Link } from "react-router-dom";
export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 4;

  useEffect(() => {
    handleSearch();
  }, [query, currentPage]); // Gọi lại khi query hoặc currentPage thay đổi

  const handleSearch = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3000/product?q=${query}&_page=${currentPage}&_limit=${pageSize}`
      );

      if (result.status == 200) {
        setProducts(result.data);

        setTotalProducts(result.headers["x-total-count"]);
      }
    } catch (error) {
      console.log("🚀 ~ handleSearch ~ error:", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(totalProducts / pageSize);
  return (
    <section>
      <div className="container">
        <p className="btn-filter" id="filter-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
            />
          </svg>
        </p>
        <div className="product-list-wrap">
          <aside className="filters" id="filters">
            <p id="filter-close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </p>
            <div className="filter-category">
              <h3>Category</h3>
              <ul>
                <li>
                  <label className="material-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Kid
                  </label>
                </li>
                <li>
                  <label className="material-checkbox">
                    <input type="checkbox" checked />
                    <span className="checkmark"></span>
                    Man
                  </label>
                </li>
                <li>
                  <label className="material-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Women
                  </label>
                </li>
                <li>
                  <label className="material-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Casual (67)
                  </label>
                </li>
                <li>
                  <label className="material-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Sport (34)
                  </label>
                </li>
                <li>
                  <label className="material-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Rainbow (12)
                  </label>
                </li>
              </ul>
            </div>
            <div className="filter-ratings">
              <h3>Ratings</h3>
              <ul>
                <div className="radio-button">
                  <input
                    name="radio-group"
                    id="radio1"
                    className="radio-button__input"
                    type="radio"
                  />
                  <label for="radio1" className="radio-button__label">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="78"
                      height="10"
                      viewBox="0 0 78 10"
                      fill="none"
                    >
                      <path
                        d="M4.46355 0.347861L3.24299 2.93348L0.512158 3.34944C0.0224388 3.42365 -0.173823 4.05443 0.181317 4.41572L2.15701 6.42719L1.68973 9.26863C1.60561 9.78224 2.12337 10.167 2.55701 9.92675L5 8.58512L7.44299 9.92675C7.87663 10.165 8.39439 9.78224 8.31028 9.26863L7.84299 6.42719L9.81868 4.41572C10.1738 4.05443 9.97756 3.42365 9.48784 3.34944L6.75701 2.93348L5.53645 0.347861C5.31776 -0.11302 4.68411 -0.118878 4.46355 0.347861Z"
                        fill="#E59819"
                      />
                      <path
                        d="M21.4636 0.347861L20.243 2.93348L17.5122 3.34944C17.0224 3.42365 16.8262 4.05443 17.1813 4.41572L19.157 6.42719L18.6897 9.26863C18.6056 9.78224 19.1234 10.167 19.557 9.92675L22 8.58512L24.443 9.92675C24.8766 10.165 25.3944 9.78224 25.3103 9.26863L24.843 6.42719L26.8187 4.41572C27.1738 4.05443 26.9776 3.42365 26.4878 3.34944L23.757 2.93348L22.5364 0.347861C22.3178 -0.11302 21.6841 -0.118878 21.4636 0.347861Z"
                        fill="#E59819"
                      />
                      <path
                        d="M38.4636 0.347861L37.243 2.93348L34.5122 3.34944C34.0224 3.42365 33.8262 4.05443 34.1813 4.41572L36.157 6.42719L35.6897 9.26863C35.6056 9.78224 36.1234 10.167 36.557 9.92675L39 8.58512L41.443 9.92675C41.8766 10.165 42.3944 9.78224 42.3103 9.26863L41.843 6.42719L43.8187 4.41572C44.1738 4.05443 43.9776 3.42365 43.4878 3.34944L40.757 2.93348L39.5364 0.347861C39.3178 -0.11302 38.6841 -0.118878 38.4636 0.347861Z"
                        fill="#E59819"
                      />
                      <path
                        d="M55.4636 0.347861L54.243 2.93348L51.5122 3.34944C51.0224 3.42365 50.8262 4.05443 51.1813 4.41572L53.157 6.42719L52.6897 9.26863C52.6056 9.78224 53.1234 10.167 53.557 9.92675L56 8.58512L58.443 9.92675C58.8766 10.165 59.3944 9.78224 59.3103 9.26863L58.843 6.42719L60.8187 4.41572C61.1738 4.05443 60.9776 3.42365 60.4878 3.34944L57.757 2.93348L56.5364 0.347861C56.3178 -0.11302 55.6841 -0.118878 55.4636 0.347861Z"
                        fill="#E59819"
                      />
                      <path
                        d="M72.4636 0.347861L71.243 2.93348L68.5122 3.34944C68.0224 3.42365 67.8262 4.05443 68.1813 4.41572L70.157 6.42719L69.6897 9.26863C69.6056 9.78224 70.1234 10.167 70.557 9.92675L73 8.58512L75.443 9.92675C75.8766 10.165 76.3944 9.78224 76.3103 9.26863L75.843 6.42719L77.8187 4.41572C78.1738 4.05443 77.9776 3.42365 77.4878 3.34944L74.757 2.93348L73.5364 0.347861C73.3178 -0.11302 72.6841 -0.118878 72.4636 0.347861Z"
                        fill="#E59819"
                      />
                    </svg>

                    <span className="radio-button__custom"></span>
                    <span>4.5& up</span>

                    <span>(28)</span>
                  </label>
                </div>
                <div className="radio-button">
                  <input
                    name="radio-group"
                    id="radio2"
                    className="radio-button__input"
                    type="radio"
                  />
                  <label for="radio2" className="radio-button__label">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="78"
                      height="10"
                      viewBox="0 0 78 10"
                      fill="none"
                    >
                      <path
                        d="M4.46355 0.347861L3.24299 2.93348L0.512158 3.34944C0.0224388 3.42365 -0.173823 4.05443 0.181317 4.41572L2.15701 6.42719L1.68973 9.26863C1.60561 9.78224 2.12337 10.167 2.55701 9.92675L5 8.58512L7.44299 9.92675C7.87663 10.165 8.39439 9.78224 8.31028 9.26863L7.84299 6.42719L9.81868 4.41572C10.1738 4.05443 9.97756 3.42365 9.48784 3.34944L6.75701 2.93348L5.53645 0.347861C5.31776 -0.11302 4.68411 -0.118878 4.46355 0.347861Z"
                        fill="#E59819"
                      />
                      <path
                        d="M21.4636 0.347861L20.243 2.93348L17.5122 3.34944C17.0224 3.42365 16.8262 4.05443 17.1813 4.41572L19.157 6.42719L18.6897 9.26863C18.6056 9.78224 19.1234 10.167 19.557 9.92675L22 8.58512L24.443 9.92675C24.8766 10.165 25.3944 9.78224 25.3103 9.26863L24.843 6.42719L26.8187 4.41572C27.1738 4.05443 26.9776 3.42365 26.4878 3.34944L23.757 2.93348L22.5364 0.347861C22.3178 -0.11302 21.6841 -0.118878 21.4636 0.347861Z"
                        fill="#E59819"
                      />
                      <path
                        d="M38.4636 0.347861L37.243 2.93348L34.5122 3.34944C34.0224 3.42365 33.8262 4.05443 34.1813 4.41572L36.157 6.42719L35.6897 9.26863C35.6056 9.78224 36.1234 10.167 36.557 9.92675L39 8.58512L41.443 9.92675C41.8766 10.165 42.3944 9.78224 42.3103 9.26863L41.843 6.42719L43.8187 4.41572C44.1738 4.05443 43.9776 3.42365 43.4878 3.34944L40.757 2.93348L39.5364 0.347861C39.3178 -0.11302 38.6841 -0.118878 38.4636 0.347861Z"
                        fill="#E59819"
                      />
                      <path
                        d="M55.4636 0.347861L54.243 2.93348L51.5122 3.34944C51.0224 3.42365 50.8262 4.05443 51.1813 4.41572L53.157 6.42719L52.6897 9.26863C52.6056 9.78224 53.1234 10.167 53.557 9.92675L56 8.58512L58.443 9.92675C58.8766 10.165 59.3944 9.78224 59.3103 9.26863L58.843 6.42719L60.8187 4.41572C61.1738 4.05443 60.9776 3.42365 60.4878 3.34944L57.757 2.93348L56.5364 0.347861C56.3178 -0.11302 55.6841 -0.118878 55.4636 0.347861Z"
                        fill="#E59819"
                      />
                    </svg>

                    <span className="radio-button__custom"></span>
                    <span>4.0 & up</span>
                    <span>(28)</span>
                  </label>
                </div>
                <div className="radio-button">
                  <input
                    name="radio-group"
                    id="radio3"
                    className="radio-button__input"
                    type="radio"
                  />
                  <label for="radio3" className="radio-button__label">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="78"
                      height="10"
                      viewBox="0 0 78 10"
                      fill="none"
                    >
                      <path
                        d="M4.46355 0.347861L3.24299 2.93348L0.512158 3.34944C0.0224388 3.42365 -0.173823 4.05443 0.181317 4.41572L2.15701 6.42719L1.68973 9.26863C1.60561 9.78224 2.12337 10.167 2.55701 9.92675L5 8.58512L7.44299 9.92675C7.87663 10.165 8.39439 9.78224 8.31028 9.26863L7.84299 6.42719L9.81868 4.41572C10.1738 4.05443 9.97756 3.42365 9.48784 3.34944L6.75701 2.93348L5.53645 0.347861C5.31776 -0.11302 4.68411 -0.118878 4.46355 0.347861Z"
                        fill="#E59819"
                      />
                      <path
                        d="M21.4636 0.347861L20.243 2.93348L17.5122 3.34944C17.0224 3.42365 16.8262 4.05443 17.1813 4.41572L19.157 6.42719L18.6897 9.26863C18.6056 9.78224 19.1234 10.167 19.557 9.92675L22 8.58512L24.443 9.92675C24.8766 10.165 25.3944 9.78224 25.3103 9.26863L24.843 6.42719L26.8187 4.41572C27.1738 4.05443 26.9776 3.42365 26.4878 3.34944L23.757 2.93348L22.5364 0.347861C22.3178 -0.11302 21.6841 -0.118878 21.4636 0.347861Z"
                        fill="#E59819"
                      />
                      <path
                        d="M38.4636 0.347861L37.243 2.93348L34.5122 3.34944C34.0224 3.42365 33.8262 4.05443 34.1813 4.41572L36.157 6.42719L35.6897 9.26863C35.6056 9.78224 36.1234 10.167 36.557 9.92675L39 8.58512L41.443 9.92675C41.8766 10.165 42.3944 9.78224 42.3103 9.26863L41.843 6.42719L43.8187 4.41572C44.1738 4.05443 43.9776 3.42365 43.4878 3.34944L40.757 2.93348L39.5364 0.347861C39.3178 -0.11302 38.6841 -0.118878 38.4636 0.347861Z"
                        fill="#E59819"
                      />
                    </svg>

                    <span className="radio-button__custom"></span>
                    <span>3.5 & up</span>
                    <span>(28)</span>
                  </label>
                </div>
              </ul>
            </div>
            <div className="filter-brand">
              <h3>Brand</h3>
              <ul>
                <li>
                  <label className="material-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Adidas (18)
                  </label>
                </li>
                <li>
                  <label className="material-checkbox">
                    <input type="checkbox" checked />
                    <span className="checkmark"></span>
                    Nick (12)
                  </label>
                </li>
                <li>
                  <label className="material-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Jacek & Co (23)
                  </label>
                </li>
                <li>
                  <label className="material-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    My Shooed (34)
                  </label>
                </li>
                <li>
                  <label className="material-checkbox">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                    Florida Fox (34)
                  </label>
                </li>
              </ul>
              <a href="#">Show more</a>
            </div>
            <div className="filter-price">
              <h3>Price</h3>
              <input type="range" min="0" max="200" value="100" />
              <span>$0 - $200</span>
            </div>
          </aside>
          <main className="products">
            <div className="products-header">
              <span>
                Showing {products && products.length} Results from total{" "}
                {totalProducts && totalProducts}
              </span>
              <div className="nav_items">
                <form action="#" className="nav_form">
                  <input
                    type="text"
                    className="nav_input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="search here...."
                  />
                  <img src="./image/search.png" alt="" className="nav_search" />
                </form>
              </div>
            </div>
            {!products || products.length === 0 ? (
              <p className="notFound">Not Found</p>
            ) : (
              <>
                <div className="product-list">
                  {products &&
                    products.map((item) => (
                      <Link
                        to={`/products/${item?.id}`}
                        className="card"
                        key={item.id}
                      >
                        <div className="card_top">
                          <img src={item.image} alt="" className="card_img" />
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
                          <button className="add_to_cart">
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
                      </Link>
                    ))}
                </div>
                <div className="pagination">
                  <a
                    href="#"
                    className="page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    Previous
                  </a>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <Link
                      to="#"
                      key={index + 1}
                      className={`page-link ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Link>
                  ))}
                  <a
                    href="#"
                    className="page-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next
                  </a>
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}
