/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { name, email, password };
      await axios.post("http://localhost:3000/users", newUser); // Gửi dữ liệu đến JSON Server
      toast.success("Account created successfully!", {
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
        // Lưu thông tin người dùng vào Local Storage
      const currentUser = {
        name,
        email,
        // Các thông tin khác có thể bạn muốn lưu vào Local Storage
      };
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
                navigate('/')

    } catch (error) {
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
    
    }
  };

  return (
    <section className="section">
      <div className="auth_container">
        <div className="auth_img">
          <img src="./image/auth-image.png" alt="" className="auth_image" />
        </div>
        <div className="auth_content">
          <form onSubmit={handleSubmit} className="auth_form">
            <h2 className="form_title">Create your account</h2>
            <p className="auth_p">Enter your details below</p>
            <div className="form_group">
              <input
                type="text"
                placeholder="Name"
                className="form_input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form_group">
              <input
                type="email"
                placeholder="Email"
                className="form_input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form_group form_pass">
              <input
                type="password"
                placeholder="Password"
                className="form_input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form_group">
              <button type="submit" className="form_btn">
                Create Account
              </button>
            </div>
            <div className="form_group">
              <span>
                Already have an account?{" "}
                <Link to="/signIn" className="form_auth_link">
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
