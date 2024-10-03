import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="logo">
            <img src="logo.jpg" alt="" height={100} width={100} />
            <NavLink className="navbar-brand" to="#">
              EcoSavvy
            </NavLink>
          </div>
          <ul className="form">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/rewards">Rewards</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
