/* eslint-disable no-unused-vars */
import React from 'react'
import "./style.css"
export default function Gallery() {
  return (
    <section className="section">
      <div className="container">
        <div className="section_category">
          <p className="section_category_p">Featured</p>
        </div>
        <div className="section_header">
          <h3 className="section_title">New Arrivals</h3>
        </div>
        <div className="gallery">
          <div className="gallery_item gallery_item_1">
            <img
              src="/image/gallery/gallery-1.png"
              alt=""
              className="gallery_item_img"
            />
            <div className="gallery_item_content">
              <div className="gallery_item_title">Playstation 5</div>
              <p className="gallery_item_p">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <a href="#" className="gallery_item_link">SHOP NOW</a>
            </div>
          </div>
          <div className="gallery_item gallery_item_2">
            <img
              src="/image/gallery/gallery-2.png"
              alt=""
              className="gallery_item_img"
            />
            <div className="gallery_item_content">
              <div className="gallery_item_title">Playstation 5</div>
              <p className="gallery_item_p">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <a href="#" className="gallery_item_link">SHOP NOW</a>
            </div>
          </div>
          <div className="gallery_item gallery_item_3">
            <img
              src="/image/gallery/gallery-3.png"
              alt=""
              className="gallery_item_img"
            />
            <div className="gallery_item_content">
              <div className="gallery_item_title">Playstation 5</div>
              <p className="gallery_item_p">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <a href="#" className="gallery_item_link">SHOP NOW</a>
            </div>
          </div>
          <div className="gallery_item gallery_item_4">
            <img
              src="/image/gallery/gallery-4.png"
              alt=""
              className="gallery_item_img"
            />
            <div className="gallery_item_content">
              <div className="gallery_item_title">Playstation 5</div>
              <p className="gallery_item_p">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
              <a href="#" className="gallery_item_link">SHOP NOW</a>
            </div>
          </div>
        </div>
      </div>
    </section>


  )
}
