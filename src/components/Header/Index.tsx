import React from "react";

import { Link } from "react-router-dom";

import { FiPlusCircle } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";
import { FiHome } from "react-icons/fi";

import Logo from "../Logo/Index";

import "./header.css";

function Header() {
  return (
    <header id="header-menu">
      <Logo />
      <ul>
        <li>
          <Link to="/">
            <FiHome />
          </Link>
        </li>

        <li>
          <Link to="/view">
            <FiBookOpen />
          </Link>
        </li>

        <li>
          <Link to="/create">
            <FiPlusCircle />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
