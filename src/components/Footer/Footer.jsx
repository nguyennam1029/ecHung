/* eslint-disable no-unused-vars */
import React from 'react'
import "./style.css"
export default function Footer() {
  return (
      <footer className="footer">
      <div className="container footer_container">
        <div className="footer_item">
          <a href="#" className="footer_logo">Exclusive</a>
          <div className="footer_p">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Exercitationem fuga harum voluptate?
          </div>
        </div>
        <div className="footer_item">
          <h3 className="footer_item_titl">Support</h3>
          <ul className="footer_list">
            <li className="li footer_list_item">Stockholm, Sweden</li>
            <li className="li footer_list_item">email@gmail.com</li>
            <li className="li footer_list_item">+46 123 456 78</li>
            <li className="li footer_list_item">+46 72 345 67</li>
          </ul>
        </div>
        <div className="footer_item">
          <h3 className="footer_item_titl">Support</h3>
          <ul className="footer_list">
            <li className="li footer_list_item">Account</li>
            <li className="li footer_list_item">Login / Register</li>
            <li className="li footer_list_item">Cart</li>
            <li className="li footer_list_item">Shop</li>
          </ul>
        </div>
        <div className="footer_item">
          <h3 className="footer_item_titl">Support</h3>
          <ul className="footer_list">
            <li className="li footer_list_item">Privacy policy</li>
            <li className="li footer_list_item">Terms of use</li>
            <li className="li footer_list_item">FAQ is</li>
            <li className="li footer_list_item">Contact</li>
          </ul>
        </div>
      </div>
    </footer>


  )
}
