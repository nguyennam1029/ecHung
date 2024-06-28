/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./css/auth.css";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Lấy danh sách người dùng từ db.json (mô phỏng)
      const response = await axios.get("http://localhost:3000/users");
      const users = response.data;

      // Tìm người dùng có email và password khớp
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        toast.success("Login successfully!", {
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
        localStorage.setItem("currentUser", JSON.stringify(user));

        navigate("/");
      } else {
        toast.error("Please try again later", {
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
    } catch (error) {
      toast.error("Please try again later", {
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
            <h2 className="form_title">Login to your account</h2>
            <p className="auth_p">Enter your details below</p>
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
                Login
              </button>
            </div>
            <div className="form_group">
              <span>
                Do not have an account?{" "}
                <Link to="/signUp" className="form_auth_link">
                  Register
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
