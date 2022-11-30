import React from "react";
import "../../src/styles/Home.scss";
import NavMain from "../components/Nav/NavMain";
import logo from "../assets/img/Logoblanc.svg";

const Home = () => {
  return (
    <>
      <NavMain />
      <div className="HomeMain">
        <div className="LeftHome">
          <img src={logo} alt="" />
        </div>
        <div className="RightHome">
          <section></section>
        </div>
      </div>
    </>
  );
};

export default Home;
