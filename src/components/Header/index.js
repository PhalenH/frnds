import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <div className="header-wrapper">
      <header className="title">FRNDS</header>
      <div className="navbar">
        <NavLink
          to="/"
          // className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          // className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Profile
        </NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </div>
    </div>
  );
}
