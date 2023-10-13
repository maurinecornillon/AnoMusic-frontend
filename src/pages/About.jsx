/* VIEW FOR ABOUT PAGE */

// IMPORT
import React from "react";

// IMPORT COMPONENT
import NavMain from "../components/Nav/NavMain";

// SCSS
import "../../src/styles/About.scss";

function About() {
  return (
    <>
      <NavMain />
      <div className="main-about">
        <div className="title">
          <span className="txt t1">- ABOUT - ABOUT - ABOUT - ABOUT&nbsp;</span>
          <span className="txt t2">- ABOUT - ABOUT - ABOUT - ABOUT&nbsp;</span>
        </div>
      </div>
    </>
  );
}

export default About;
