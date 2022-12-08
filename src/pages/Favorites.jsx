import React, { useEffect, useState } from "react";
import "../../src/styles/Profile.scss";

//COMPONENTS
import NavMain from "../components/Nav/NavMain";

//PACKAGE
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../auth/useAuth";
import { NavLink } from "react-router-dom";
import axios from "axios";

//IMG
import params from "../assets/img/Params.png";
import more from "../assets/img/More.png";

const Favorite = () => {
  const [allFavorite, setAllFavorite] = useState([]);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  //GET ALL FAVORITES OF THE USER
  useEffect(() => {
    const getFavorite = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/favorite/getAll`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log(response.data);
      setAllFavorite(response.data);
    };
    getFavorite();
  }, []);

  if (!currentUser) return <div className="loading">Loading...</div>;

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
                <NavLink to="/profile">
                  <p>{currentUser.username} -</p>
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

          <div>
            {allFavorite.map((el) => {
              return (
                <>
                  <div className="section-fluid-main-home" key={el._id}>
                    <div className="section-row-home">
                      <div className="section-col-home">
                        <div className="section-home">
                          <div className="section-in-home">
                            <img src={el.publish.cover?.url} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="hover-text-home">
                        <h2>{el.publish.title}</h2>
                      </div>
                    </div>
                    <div className="icone">
                      <p>
                        <img
                          className="like"
                          src={more}
                          alt=""
                          onClick={() => navigate(`/music/${el.publish._id}`)}
                        />
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorite;