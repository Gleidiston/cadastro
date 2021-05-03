import "./Logo.css";
import Logo from "../../assets/imags/logo.jpeg";
import React from "react";
import { Link } from "react-router-dom";

export default function logo(props) {
  return (
    <aside className="logo">
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" />
      </Link>
    </aside>
  );
}
