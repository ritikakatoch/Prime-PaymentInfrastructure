import React from "react";
import web from "./images/img1.png";
import web1 from "./images/img2.png";
import web2 from "./images/img3.png";

const Service = () => {
  return (
    <>
      <section class="facilities">
        <section class="services mt-5 mb-5 py-3">
          <div class="container">
            <div class="section-title">
              <h2 class="text-center" id="services">
                A fully integrated suite of payments products
              </h2>
              <p class="serviceT">
                Products that allow to accept payments and move money globally
                with Primes's powerful APIs and software solutions designed to
                help you capture more revenue.
              </p>
            </div>

            <div class="row">
              <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div class="service shadow">
                  <div class="icon">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="main file"
                  /> 
                  </div>
                  <h4>
                    <a href="#dental">Global Payments</a>
                  </h4>
                  <p>
                    From ecommerce stores, to subscription businesses, to
                    platforms and marketplaces, we offer a complete stack for
                    all your payments needs across channels.
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div class="service shadow">
                  <div class="icon">
                  <img
                    src={web1}
                    className="img-fluid animated"
                    alt="main file"
                  /> 
                  </div>
                  <h4>
                    <a href="#lungs">Revenue and Financial Manangement</a>
                  </h4>
                  <p>
                    Prime Billing is the fastest way for your business to bill
                    customers with subscriptions or invoices. Capture more
                    revenue,and accept recurring payments globally.
                  </p>
                </div>
              </div>

              <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div class="service shadow">
                  <div class="icon">
                  <img
                    src={web2}
                    className="img-fluid animated"
                    alt="main file"
                  /> 
                  </div>
                  <h4>
                    <a href="#cardiology">Banking-as-a-Service</a>
                  </h4>
                  <p>
                    Prime Connect is the fastest and easiest way to integrate
                    payments into your software platform or marketplace. Our set
                    of programmable APIs allows you to handle payments KYC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Service;
