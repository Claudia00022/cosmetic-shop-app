import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">
            logo
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NavLink to = "/skinCare"> <a class="nav-item nav-link">
                skin care
              </a>
                
              </NavLink>
              <a class="nav-item nav-link" href="#">
                body care
              </a>
              <a class="nav-item nav-link" href="#">
                hair care
              </a>
              <a class="nav-item nav-link" href="#">
                Log In
              </a>
              <a class="nav-item nav-link" href="#">
                Img cart
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
