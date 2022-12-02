import React from "react";
import NavMain from "../components/Nav/NavMain";

import useAuth from "../auth/useAuth";
import "../../src/styles/Profile.scss";
import params from "../assets/img/Params.png";
import { NavLink } from "react-router-dom";

function Profile() {
  const { currentUser } = useAuth();
  if (!currentUser) return <div className="loading">Loading...</div>;
  return (
    <>
      <NavMain />
      <div className="container-profile">
        <div className="profile">
          <div className="nav-profile">
            <div className="container-avatar">
              <img className="avatar" src={currentUser.image.url} alt="" />
            </div>
            <div className="test">
              <div className="info-profile">
                <p>{currentUser.username} -</p>
                <NavLink to="/updateprofile">
                  <img className="params" src={params} alt="" />
                </NavLink>
              </div>
              <div className="description">
                <p>{currentUser.description}</p>
              </div>
            </div>
          </div>

          <div className="publications"></div>
        </div>
      </div>
    </>
  );
}

export default Profile;
