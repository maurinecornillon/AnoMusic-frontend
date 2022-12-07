import React from "react";
import "../../src/styles/Profile.scss";
import NavMain from "../components/Nav/NavMain";

import useAuth from "../auth/useAuth";
import { NavLink } from "react-router-dom";

import params from "../assets/img/Params.png";
import close from "../assets/img/14.png";

function Profile() {
  const { currentUser } = useAuth();
  if (!currentUser) return <div className="loading">Loading...</div>;

  console.log(currentUser.publication);
  return (
    <>
      <NavMain />
      <div className="container-profile">
        <div className="profile">
          <div className="nav-profile">
            <div className="container-avatar">
              <img className="avatar" src={currentUser.image?.url} alt="" />
            </div>
            <div className="test">
              <div className="info-profile">
                <p>{currentUser.username} -</p>
                <img className="params" src={like} alt="" />
                <NavLink to="/updateprofile">
                  <img className="params" src={params} alt="" />
                </NavLink>
              </div>
              <div className="description">
                <p>{currentUser.description}</p>
              </div>
            </div>
          </div>
          {currentUser.publication.map((el, key) => {
            return (
              <>
                <div className="section-fluid-main-home" key={key}>
                  <div className="section-row-home">
                    <div className="section-col-home">
                      <div className="section-home">
                        <div className="section-in-home">
                          <img src={el.cover?.url} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="hover-text-home">
                      <h2>{el.title}</h2>
                    </div>
                  </div>
                  <div className="icone">
                    <p>
                      <img className="like" src={close} alt="" />
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Profile;
