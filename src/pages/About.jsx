import React from "react";
import "../../src/styles/About.scss";
import NavMain from "../components/Nav/NavMain";

function About() {
  return (
    <>
      <NavMain />
      <div className="main-about">
        <div className="title">
          <span class="txt t1">- ABOUT - ABOUT - ABOUT - ABOUT&nbsp;</span>
          <span class="txt t2">- ABOUT - ABOUT - ABOUT - ABOUT&nbsp;</span>
        </div>
        <div className="about">
          <div className="text">text</div>
          <div className="colum">img</div>
        </div>
        <div className="hidden">vide</div>
      </div>
    </>
  );
}

export default About;
