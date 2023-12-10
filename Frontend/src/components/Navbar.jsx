import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from ".";

const Navbar = () => {
  return (
    <header>
      <Container>
        <div className="flex justify-between">
          <div className="logo text-2xl">
            <NavLink to="/">Eduverse</NavLink>
          </div>

          <nav>
            <ul className="flex gap-5 text-xl">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/service">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
