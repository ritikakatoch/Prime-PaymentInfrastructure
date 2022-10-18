import React from "react";
import { NavLink } from "react-router-dom";
import web from "./images/logo1.png";


const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 msx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                <img
                    src={web}
                    className="img-fluid animated logo"
                    alt="main file"
                  /> Prime
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link active" aria-current="page" to="/home">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link" to="/about">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link" to="/service">
                        Products
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link" to="/userdata">
                        User Details
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link" to="/contact">
                        Review
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link" to="/signin">
                        Signin
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link" to="/signup">
                        Register Now
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
