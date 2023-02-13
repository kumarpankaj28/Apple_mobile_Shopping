import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './HeaderElements';
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";


const Header = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h5>Apple <span>Mart</span></h5>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/product' activeStyle>
            Product
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact Us
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtn><Login/></NavBtn>
          <NavBtn><Signup/></NavBtn>
          <NavBtn><CartBtn/></NavBtn>
          {/* <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          <NavBtnLink to='/signin'>Sign Up</NavBtnLink> */}
        </NavBtn>
      </Nav>
    </>
  );
};

export default Header;
































// import React from "react";
// import { Link } from "react-router-dom";
// import CartBtn from "./buttons/CartBtn";
// import Login from "./buttons/Login";
// import Signup from "./buttons/Signup";

// const Header = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid py-2">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <Link className="navbar-brand mx-auto fw-bold" to="#">
//             APPLE MART
//           </Link>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link " aria-current="page" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/product">
//                   Product
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/about">
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contact">
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           <Login/>
//           <Signup/>
//           <CartBtn/>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Header;
