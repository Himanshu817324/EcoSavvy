import "./Registration.css";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target);

    const value = e.target.value;
    const name = e.target.name;
    setUser({
      ...user,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    alert(user);
    console.log(user);
    
  };



  return (
    <>
      <section>
        <div className="registration-page">
          <div className="r-left">
            <img src="/login.jpg" alt="" height={600} width={500} />
          </div>
          <div className="r-right">
            <div className="login">
              <div className="avatar">
                <i className="fas fa-user"></i>
              </div>
              <h2 className="text-white text-2xl font-bold mb-6">Sign In</h2>
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
                <div className="remember-me">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="#" className="text-white">
                    Forgot password?
                  </a>
                </div>
                <button className="login-btn">LOGIN</button>
                <div className="signup">
                  Dont have account? <a href="#">Sign up!</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
