import React from "react";
import "../../src/styles/FormAuthSignUp.scss";

// IMPORT COMPONENTS
import FormSignUp from "../components/Forms/FormSignUp";
import NavMain from "../components/Nav/NavMain";

//NAV
import { NavLink } from "react-router-dom";

//IMG
import logo from "../assets/img/Logoblanc.svg";

function FormAuthSignUp() {
  return (
    <>
      <NavMain />
      <div className="FormMain">
        <div className="LeftForm">
          <img src={logo} alt="" />
        </div>

        <div className="RightForm">
          <div className="HeaderForm">
            <span className="signup">SIGN UP</span>
            <NavLink to="/login">
              <span>LOG IN</span>
            </NavLink>
          </div>
          <FormSignUp />
        </div>
      </div>
    </>
  );
}

export default FormAuthSignUp;
