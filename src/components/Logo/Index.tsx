import React from "react";
import { FiCoffee } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./logo.css";

function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <FiCoffee />
        <h1>CoffeTime</h1>
      </Link>
    </div>
  );
}

export default Logo;
