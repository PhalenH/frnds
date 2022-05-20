import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
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
      {/* <NavLink
        to="/products"
        // className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Products
      </NavLink>
      <NavLink
        to="/login"
        // className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Login
      </NavLink> */}
    </div>
  );
}
