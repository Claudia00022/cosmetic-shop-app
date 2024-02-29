// import React, {useState} from "react";
// import { NavLink } from "react-router-dom";

// function Navbar() {

//    const[expanded, setExpanded] = useState(false);

//   return (
//     <div>
//       <div className="container fixed-top">
//         <nav class="navbar navbar-expand-lg navbar-light bg-light">
//           <a class="navbar-brand" href="/">
//             logo
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarNavAltMarkup"
//             aria-controls="navbarNavAltMarkup"
//             aria-expanded="false"
//             aria-label="Toggle navigation"

//              onClick={() => setExpanded(!expanded)}
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>

//           <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div class="navbar-nav">
//               <NavLink to="/skinCare" className ="nav-item nav-link">
//                 skin care
//               </NavLink>
//               <NavLink to="/bodyCare" className ="nav-item nav-link">
//                 body care
//               </NavLink>
//               <NavLink to="/hairCare" className ="nav-item nav-link">
//                 hair care
//               </NavLink>

//               <a class="nav-item nav-link" href="#">
//                 Log In
//               </a>
//               <a class="nav-item nav-link" href="#">
//                 Img cart
//               </a>
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";


function CollapseNavbar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to ="skinCare" className ="nav-item nav-link">skin care</NavLink>
            <NavLink to ="bodyCare" className ="nav-item nav-link">body care</NavLink>
            <NavLink to ="HairCare" className ="nav-item nav-link">hair care</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapseNavbar;
