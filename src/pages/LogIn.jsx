
// IMPORT REACT
import React from "react";

// IMPORT COMPONENTS
import FormLogIn from "../components/Forms/FormLogIn";
import NavMain from "../components/Nav/NavMain";

// NAV
import { NavLink } from "react-router-dom";

// SCSS
import "./../styles/FormAuthLogIn.scss";

//IMG
import logo from "../assets/img/Logoblanc.svg";

function LogIn() {
  return (
    <>
      <NavMain />
      <div className="FormMain">
        <div className="LeftForm">
          <img src={logo} alt="" />
        </div>

        <div className="RightForm">
          <div className="HeaderForm">
            <NavLink to="/formauthsignup">
              <span>SIGN UP</span>
            </NavLink>
            <span className="login">LOG IN</span>
          </div>
          <FormLogIn />
        </div>
      </div>
    </>
  );
}

export default LogIn;
