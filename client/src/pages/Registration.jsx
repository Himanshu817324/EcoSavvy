import "./Registration.css";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";


function Registration() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    cnfPassword: "",
  });

  const  navigate = useNavigate();


  const handleInputChange = (e) => {
    console.log(e.target);

    const value = e.target.value;
    const name = e.target.name;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
          cnfPassword: "",
        });
        navigate("/login");
      }
      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <section className="reg">
        <div className="registration-page">
          <div className="r-left">
            <img src="/register.jpg" alt="" height={600} width={700} />
          </div>
          <div className="r-right">
            <div className="login">
              <div className="avatar">
                <i className="fas fa-user"></i>
              </div>
              <h2 className="text-white text-2xl font-bold mb-6">Sign Up</h2>
              <form onSubmit={handleSubmit}>
                <div className="input-container">
                  <i className="fas fa-user"></i>
                  <input
                    className="form-input"
                    type="text"
                    name="username"
                    placeholder="Enter a Username"
                    id="Username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-container">
                  <i className="fa-solid fa-envelope"></i>
                  <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Enter a email"
                    id="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-container">
                  <i className="fas fa-phone"></i>
                  <input
                    className="form-input"
                    type="number"
                    name="phone"
                    placeholder="Enter a Phone"
                    id="phone"
                    required
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-container">
                  <i className="fas fa-lock"></i>
                  <input
                    className="form-input"
                    type="password"
                    name="password"
                    placeholder="Enter a password"
                    id="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInputChange}
                  />
                  <i className="fas fa-eye"></i>
                </div>
                <div className="input-container">
                  <i className="fas fa-lock"></i>
                  <input
                    className="form-input"
                    type="password"
                    name="cnfPassword"
                    placeholder="Enter a password"
                    id="cnfPassword"
                    required
                    autoComplete="off"
                    value={user.cnfPassword}
                    onChange={handleInputChange}
                  />
                  <i className="fas fa-eye"></i>
                </div>
                <div className="remember-me">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                </div>
                <button className="login-btn" type="submit">
                  Register
                </button>
                <div className="signup">
                  Already have an account? <a href="#">Sign in!</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Registration;
