/* HOME PAGE WHO IS DIFFERENT IF YOU ARE LOG OR NOT */

// IMPORT REACT
import React from "react";

// COMPONENT
import NavMain from "../components/Nav/NavMain";


import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../auth/useAuth";

// SCSS
import "../../src/styles/Home.scss";


// IMG
import logo from "../assets/img/Logoblanc.svg";
import like from "../assets/img/1.png";
import dislike from "../assets/img/Heartvide.png";
import play from "../assets/img/Play.png";
import more from "../assets/img/More.png";
import close from "../assets/img/14.png";

//
const Home = () => {
  // Get the authentication status from useAuth
  const { isLoggedIn } = useAuth();
  // State to store data from API
  const [data, setData] = useState();
  // State to manage favorite status
  const [isFavorite, setIsFavorite] = useState(false);
  // Get parameters and navigate function for routing
  const params = useParams();
  const navigate = useNavigate();

  // State to manage the audio player
  const [player, setPlayer] = useState({
    currentTrack: null,
    show: false,
  });

  // Function to play an audio track in the audio player
  function playAudio(audio) {
    setPlayer((currentState) => {
      return {
        show: true,
        currentTrack: audio,
      };
    });
  }

  // GET ALL PUBLISH OF ALL USER
  // Get all publications from the API
  useEffect(() => {
    try {
      const token = localStorage.getItem("authToken");

      const fetchData = async () => {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/publish/home`,
          {
            headers: {
              Authorization:
                token && `Bearer ${localStorage.getItem("authToken")}`,
            },
          }
        );
        console.log(response.data);
        setData(response.data.publishObject);
      };
      fetchData();
    } catch (error) {
      console.error(error);
      setData([]);
    }
  }, []);

  // ADD FAVORITE
  // Function to add a publication to favorites
  const addFavorite = async (id) => {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/favorite/add/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );
    setIsFavorite(true);
  };
  
  // Extract audio, cover, and title from the current track
  const audio = player.currentTrack?.audio.url;
  const cover = player.currentTrack?.cover.url;
  const title = player.currentTrack?.title;

  return (
    <>
      {isLoggedIn && (
        <>
          <NavMain />
          <div className="main-about-home">
            <div className="title">
              <span className="txt t1">
                - DISCOVER - DISCOVER - DISCOVER - DISCOVER&nbsp;
              </span>
              <span className="txt t2">
                - DISCOVER - DISCOVER - DISCOVER - DISCOVER&nbsp;
              </span>
            </div>
          </div>

          <section className="body-home">
            {data?.map((el, key) => {
              return (
                <>
                  <div className="section-fluid-main-home" key={key}>
                    <div className="section-row-home">
                      <div className="section-col-home">
                        <div className="section-home">
                          <div className="section-in-home">
                            <img src={el.cover.url} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="hover-text-home">
                        <h2>{el.title}</h2>
                      </div>
                    </div>
                    <div className="icone">
                      <p>
                        {el.isFav ? (
                          <img
                            className="like"
                            src={like}
                            alt=""
                            onClick={() => addFavorite(el._id)}
                          />
                        ) : (
                          <img
                            className="like"
                            src={dislike}
                            alt=""
                            onClick={() => addFavorite(el._id)}
                          />
                        )}
                      </p>
                      <p>
                        <img
                          className="like"
                          src={play}
                          alt=""
                          onClick={() => {
                            playAudio(el);
                          }}
                        />
                      </p>
                      <p>
                        <img
                          className="like"
                          src={more}
                          alt=""
                          onClick={() => navigate(`/music/${el._id}`)}
                        />
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </section>

          {player.show && (
            <div
              className="modal"
              style={{
                position: "fixed",
                height: "6rem",
                width: "100vw",
                bottom: "0",
                zIndex: "1",
              }}
            >
              <div className="info-audio">
                <img src={cover} className="audio-cover" alt="" />
                <div className="audio-title">{title}</div>
                <div className="audio">
                  <ReactAudioPlayer
                    src={audio}
                    autoPlay
                    controls
                    crossOrigin="anonymous"
                  />
                </div>
                <div className="container-close">
                  <img
                    className="close"
                    src={close}
                    onClick={() => setPlayer({ ...player, show: false })}
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {!isLoggedIn && (
        <>
          <NavMain />

          <div className="HomeMain">
            <div className="LeftHome">
              <img src={logo} alt="" />
            </div>
            <div className="RightHome">
              <div> CREATE -</div>
              <div> UPLOAD -</div>
              <div> SHARE -</div>
              <div> LISTEN -</div>
              <NavLink to="/formauthsignup">
                <button>START NOW</button>
              </NavLink>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
