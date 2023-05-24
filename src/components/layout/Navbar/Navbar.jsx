import React from "react";
import "./navbar.css";
import { ALL_ROUTES } from "../../../routes/AllRoutes";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container navbra_main">
        <div className="navbar_wrapper">
          <Link style={{ textDecoration: "none" }} to="/">
            <h3 className="navbar_title">BILET</h3>
          </Link>
        </div>
        <div className="navbar_wrapper">
          <div className="nav_block-list">
            {ALL_ROUTES?.slice(1, 4).map((route) => (
              <Link className="nav_list-link" key={route.id} to={route.link}>
                <div className="nav_list-item">{route.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
