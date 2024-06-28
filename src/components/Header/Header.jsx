// import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import "./header.css"
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
export default function Header() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
    const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible);
  };
  const navigate = useNavigate();
    const check = localStorage.getItem('currentUser');

  useEffect(() => {
    // Kiểm tra xem có currentUser trong Local Storage hay không
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      setIsLoggedIn(true);
      
    } else {
      setIsLoggedIn(false);
    }
  }, [check]);
 const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('currentUser');
                      //  window.location=('/'); 
                      navigate('/')
        Swal.fire(
          'Logged out!',
          'You have been logged out successfully.',
          'success'
        );
      }
    });
  };
  return (
     <>
     <nav className="nav">
      <div className="container nav_container">
        <Link to="/"  href="#" className="nav_logo">EXCLUSIVE</Link>
        <ul className="nav_list">
          <li className="nav_item">
            <Link to="/"  href="./index.html" className="nav_link">Home</Link>
          </li>
          <li className="nav_item">
            <Link to="/products"  href="./products.html" className="nav_link">Products</Link>
          </li>
          <li className="nav_item">
            <Link to="/"  href="./about.html" className="nav_link">About</Link>
          </li>
          <li className="nav_item">
            <Link to="/"  href="./contact.html" className="nav_link">Contact</Link>
          </li>
        </ul>
        <div className="nav_items">
          
       
          <div className="auth-actions" style={{ display: isLoggedIn ? 'none' : 'flex' }}>
             <Link to="/signUp" className="button-4" role="button">Sign Up</Link>

           <Link to="/signIn" className="btn-login" role="button">Sign In</Link>
            <div></div>
          </div>
       
          <div className="user-actions" style={{ display: isLoggedIn ? 'flex' : 'none' }}>
            <Link to="liked" className="user-actions-liked">
              <img src="/image/heart.png" alt="" />
            </Link>

            <Link to="/cart" >
              <img src="/image/cart.png" alt="" />
            </Link>
            <Link to="/profile" >
              <img src="/image/user.png" alt="" />
            </Link>
            <p className="icon-logOut" onClick={handleLogout}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
</svg>

            </p>
          </div>
        </div>
        <span className="hamburger"  onClick={toggleMobileNav}>
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </span>
      </div>
    </nav>
    <nav className={`mobile_nav ${isMobileNavVisible ? '' : 'mobile_nav_hide'}`}>
      <div className="nav-mobile">
        <form action="#" className="nav_form">
          <input type="text" className="nav_input" placeholder="search here...." />
          <img src="./image/search.png" alt="" className="nav_search" />
        </form>
      
        <div className="auth-actions">
          <Link to="/signUp" className="button-4" role="button">Sign Up</Link>

          <Link to="/signIn" className="btn-login" role="button">Sign In</Link>
          <div></div>
        </div>
       
        <div className="user-actions">
          <a href="./liked.html" className="user-actions-liked">
            <img src="./image/heart.png" alt="" />
          </a>

          <a href="/cart.html">
            <img src="./image/cart.png" alt="" />
          </a>
          <a href="./profile.html">
            <img src="./image/user.png" alt="" />
          </a>
        </div>
      </div>
      <ul className="mobile_nav_list">
        <li className="mobile_nav_item">
          <Link to="/" className="mobile_nav_link">Home</Link>
        </li>
        <li className="mobile_nav_item">
          <Link to="/products" className="mobile_nav_link">Products</Link>
        </li>
        <li className="mobile_nav_item">
          <Link to="/about" className="mobile_nav_link">About</Link>
        </li>
        <li className="mobile_nav_item">
          <Link to="/contact" className="mobile_nav_link">Contact</Link>
        </li>
        <li className="mobile_nav_item">
          <Link to="/signUp" className="mobile_nav_link">Sign Up</Link>
        </li>
        <li className="mobile_nav_item">
          <Link to="/cart" className="mobile_nav_link">Cart</Link>
        </li>
        <li className="mobile_nav_item">
          <Link to="/cart" className="mobile_nav_link">Check Cout</Link>
        </li>
      </ul>
    </nav>
   </>
  )
}
