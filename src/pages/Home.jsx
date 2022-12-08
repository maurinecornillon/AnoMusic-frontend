import React from "react";
import "../../src/styles/Home.scss";

//COMPONENT
import NavMain from "../components/Nav/NavMain";

//PACKAGE
import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../auth/useAuth";

//IMG
import logo from "../assets/img/Logoblanc.svg";
import like from "../assets/img/1.png";
import dislike from "../assets/img/Heartvide.png";
import play from "../assets/img/Play.png";
import more from "../assets/img/More.png";
import close from "../assets/img/14.png";

//
const Home = () => {
  const { isLoggedIn } = useAuth();
  const [data, setData] = useState();
  const [isFavorite, setIsFavorite] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const [player, setPlayer] = useState({
    currentTrack: null,
    show: false,
  });

  function playAudio(audio) {
    setPlayer((currentState) => {
      return {
        show: true,
        currentTrack: audio,
      };
    });
  }

  // GET ALL PUBLISH OF ALL USER
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/publish/home`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log(response.data);
      setData(response.data.publishObject);
    };
    fetchData();
  }, []);

  // ADD FAVORITE
  const addFavorite = async (id) => {
    const response = await axios.post(
      `http://localhost:8080/api/favorite/add/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      }
    );
    console.log(response.data);
    setIsFavorite(true);
  };

  const audio = player.currentTrack?.audio.url;
  const cover = player.currentTrack?.cover.url;
  const title = player.currentTrack?.title;

  if (!data) return <p>Loading</p>;
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
                  <ReactAudioPlayer src={audio} autoPlay controls />
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
            <div className="RightHome"> DISCOVER NEW MUSIC </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
