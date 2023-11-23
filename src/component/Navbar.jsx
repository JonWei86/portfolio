import React from "react";
import { NavHashLink } from "react-router-hash-link";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <h2>Jon Wei</h2>
      <ul>
        <li>
          <NavHashLink smooth to={"/#about"} className="navLink">
            About
          </NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to={"/#skills"} className="navLink">
            Skills
          </NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to={"/#projects"} className="navLink">
            Projects
          </NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to={"/#contact"} className="navLink">
            Contact Me
          </NavHashLink>
        </li>
        <li>
          <NavHashLink smooth to={"/#social"} className="navLink">
            Social Media
          </NavHashLink>
        </li>
      </ul>
    </div>
  );
};
