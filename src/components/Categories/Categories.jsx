/* eslint-disable no-unused-vars */
import React from 'react'
import "./style.css"
export default function Categories() {
  return (
    <section className="section">
      <div className="container">
        <div className="section_category">
          <p className="section_category_p">categories</p>
        </div>
        <div className="section_header">
          <h3 className="section_title">Browse by Category</h3>
        </div>
        <div className="categories">
          <div className="category">
            <img src="/image/icons/camera.png" alt="" className="category_icon" />
            <p className="category_name">Cameras</p>
          </div>
          <div className="category">
            <img
              src="/image/icons/computer.png"
              alt=""
              className="category_icon"
            />
            <p className="category_name">Computers</p>
          </div>
          <div className="category">
            <img src="/image/icons/gaming.png" alt="" className="category_icon" />
            <p className="category_name">Gaming</p>
          </div>
          <div className="category">
            <img
              src="/image/icons/headphone.png"
              alt=""
              className="category_icon"
            />
            <p className="category_name">Headphones</p>
          </div>
          <div className="category">
            <img src="/image/icons/phone.png" alt="" className="category_icon" />
            <p className="category_name">Phones</p>
          </div>
          <div className="category">
            <img src="/image/icons/watch.png" alt="" className="category_icon" />
            <p className="category_name">Watches</p>
          </div>
        </div>
      </div>
    </section>

  )
}
