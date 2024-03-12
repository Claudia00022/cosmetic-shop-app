import React, {useState} from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpa } from "@fortawesome/free-solid-svg-icons";

const logo =  <FontAwesomeIcon icon={faSpa} size="lg" style={{color: "#ffffff",}} />;

function CollapseNavbar() {
 
  const[backgroundColor, setBackgroundColor]= useState("rgba(5, 5, 5, 0.42)");
  

  function handleButtonClicked(){
    setBackgroundColor("#98946B");
  }

  function handleButtonBack(){
    setBackgroundColor("rgba(5, 5, 5, 0.42)")
  }
  

  return (
    <Navbar collapseOnSelect expand="lg" className="navigation-home" style={{backgroundColor}} >
      <div className=" container-fluid">
        <Navbar.Brand onClick={handleButtonBack} className="me-5 text-white logo" href="#">
          logo <span className="ms-3">{logo}</span>
        </Navbar.Brand>
        <div className="right-border"></div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="w-100">
            <div className="d-flex align-items-center ">
              <NavLink
              onClick = {handleButtonClicked}
                to="skinCare"
                className="nav-item nav-link  text-white navbar-item "
              >
                skin care
              </NavLink>
              <div className="right-border"></div>
              <NavLink
              onClick = {handleButtonClicked}
                to="bodyCare"
                className="nav-item nav-link text-light  navbar-item "
              >
                body care
              </NavLink>
              <div className="right-border"></div>
              <NavLink
              onClick = {handleButtonClicked}
                to="HairCare"
                className="nav-item nav-link  text-white navbar-item "
              >
                hair care
              </NavLink>
              <div className="right-border"></div>
            </div>
            <div className="d-flex ms-md-auto align-items-center ">
              <button className="logIn-btn">
                <NavLink
                  to="HairCare"
                  className="nav-item nav-link text-white  "
                >
                  Log In
                </NavLink>
              </button>
              <div>
                {" "}
                <NavLink
                  to="HairCare"
                  className="nav-item nav-link text-white ms-3 me-5 fw-light"
                >
                  <span class="material-symbols-outlined">shopping_cart</span>
                </NavLink>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default CollapseNavbar;
