import React from "react";
import "../../src/styles/Profile.scss";

//COMPONENT
import NavMain from "../components/Nav/NavMain";

//PACKAGES
import { useParams } from "react-router-dom";
import useAuth from "../auth/useAuth";
import { NavLink } from "react-router-dom";

//IMG
import like from "../assets/img/1.png";
import params from "../assets/img/Params.png";

function Profile() {
  const { currentUser } = useAuth();
  const { id } = useParams();

  if (!currentUser) return <div className="loading">Loading...</div>;

  console.log(currentUser.publication);
  console.log(currentUser.publication[0]._id);

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
                <NavLink to="/favorite">
                  <img className="params" src={like} alt="" />
                </NavLink>
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
                <div className="section-fluid-main-profile" key={key}>
                  <div className="section-row-profile">
                    <div className="section-col-profile">
                      <div className="section-profile">
                        <div className="section-in-profile">
                          <img src={el.cover?.url} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="hover-text-profile">
                      <h2>{el.title}</h2>
                    </div>
                  </div>

                  {/* <div className="icone">
                    <p>
                      <img className="like" src={close} alt="" />
                    </p>
                  </div> */}
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
