import React from "react";
import { NavLink } from "react-router-dom";
import web from "./images/aboutimg.svg";

const About = () => {
  return (
    <>
      <div id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 className="aboutheading">
                    <strong>Payments infrastructure<br/>for the internet</strong>
                  </h1>
                  
                    <h4 className="my-3 abouttext">
                      Millions of businesses of all sizes—from startups to large
                      enterprises—use{" "}
                      <strong className="brand-name">Prime's</strong> software
                       and APIs to accept payments, send payouts, and manage
                      their businesses online.
                    </h4>
                 

                  <div className="mt-3">
                    <NavLink
                      to="/about"
                      className="btn-get-started"
                      type="submit"
                    >
                      Know More <i class="fa-solid fa-arrow-right"></i>
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-3 order-1 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="main file"
                  /> 
              </div>
            </div>
            </div>
          </div>

        </div>
       
      </div>
    </>
  );
};

export default About;
