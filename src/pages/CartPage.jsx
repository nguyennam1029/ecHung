/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import "./css/cart.css"
import axios from 'axios';
export default function CartPage() {
      const [data, setData] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3000/cart')
            .then(response => {
                setData(response.data);  // Lưu dữ liệu từ API vào state
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

     const handleStepper = (id) => {
    const myInput = document.getElementById("my-input");
    const min = myInput.getAttribute("min");
    const max = myInput.getAttribute("max");
    const step = myInput.getAttribute("step");
    let val = parseInt(myInput.value);
    let calcStep = id === "increment" ? parseInt(step, 10) : -parseInt(step, 10);
    let newValue = val + calcStep;

    if (newValue >= min && newValue <= max) {
      myInput.value = newValue;
    }
  };
  
  return (
    <div className="container">
      <div className="sticky-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

             {data && data.map(item => (
 <tr key={item?.id}>
              <td>
                <div className="user">
                  <img src={item?.image} alt="" />
                  <span>{item?.title}</span>
                </div>
              </td>
              <td>${item?.price}</td>
              <td>
                <div className="quantity">
                  <button id="decrement" onClick={() => handleStepper("decrement")}>-</button>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="1"
                    value="1"
                    id="my-input"
                    
                  />
                  <button id="increment" onClick={() => handleStepper("increment")}>+</button>
                </div>
              </td>
              <td>$650</td>
              <td>
                <button className="bin-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 39 7"
                    className="bin-top"
                  >
                    <line
                      strokeWidth="4"
                      stroke="white"
                      y2="5"
                      x2="39"
                      y1="5"
                    ></line>
                    <line
                      strokeWidth="3"
                      stroke="white"
                      y2="1.5"
                      x2="26.0357"
                      y1="1.5"
                      x1="12"
                    ></line>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 33 39"
                    className="bin-bottom"
                  >
                    <mask fill="white" id="path-1-inside-1_8_19">
                      <path
                        d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"
                      ></path>
                    </mask>
                    <path
                      mask="url(#path-1-inside-1_8_19)"
                      fill="white"
                      d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                    ></path>
                    <path
                      strokeWidth="4"
                      stroke="white"
                      d="M12 6L12 29"
                    ></path>
                    <path strokeWidth="4" stroke="white" d="M21 6V29"></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 89 80"
                    className="garbage"
                  >
                    <path
                      fill="white"
                      d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
                    ></path>
                  </svg>
                </button>
              </td>
            </tr>
             ))}
           

            {!data && <div>Not Found</div>}
          </tbody>
        </table>
      </div>

      <div className="cart-total">
        <h2 className="cart-total-heading">Cart Total</h2>
        <div className="cart-total-label">
          <p>Subtotal:</p>
          <span>$1750</span>
        </div>
        <div className="cart-total-label">
          <p>Shipping:</p>
          <span>Free</span>
        </div>
        <div className="cart-total-label">
          <p>Total:</p>
          <span>$1750</span>
        </div>

        <a href="./checkOut.html" className="btn-next">
          <span>Continue</span>
          <svg
            width="34"
            height="34"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="37"
              cy="37"
              r="35.5"
              stroke="black"
              strokeWidth="3"
            ></circle>
            <path
              d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
              fill="black"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  )
}
