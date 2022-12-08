import React from "react";
import "../../src/styles/PublishFocus.scss";

//PACKAGE
import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { useParams } from "react-router-dom";
import NavMain from "../components/Nav/NavMain";
import axios from "axios";

//IMG
import like from "../assets/img/1.png";
import play from "../assets/img/Play.png";
import close from "../assets/img/14.png";

const PublishFocus = () => {
  const { id } = useParams();
  const [publish, setPublish] = useState({});
  const [lgShow, setLgShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/publish/music/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );
      console.log(response.data.user);

      setPublish(response.data);
    };
    fetchData();
  }, [id]);

  if (!publish) return <div className="loading">Loading...</div>;
  return (
    <>
      <>
        <NavMain />
        <div className="main-about-home">
          <div className="title">
            <span className="txt t1">
              - {publish.title} - {publish.title} - {publish.title} -
              {publish.title}&nbsp;
            </span>
            <span className="txt t2">
              - {publish.title} - {publish.title} - {publish.title} -
              {publish.title}&nbsp;
            </span>
          </div>
        </div>

        <section className="body-focus">
          <>
            <div className="section-fluid-main-focus">
              <div className="section-row-focus">
                <div className="section-col-focus">
                  <div className="section-focus">
                    <div className="section-in-focus">
                      <img src={publish.cover?.url} alt="" />
                    </div>
                  </div>
                </div>
                <div className="hover-text-focus">
                  <h2>{publish.title}</h2>
                </div>
              </div>
              <div className="icone-publish">
                <p>
                  <img className="like" src={like} alt="" />
                </p>
                <p>
                  <img
                    className="like"
                    src={play}
                    alt=""
                    onClick={() => setLgShow(true)}
                  />
                </p>
              </div>
              <div className="container-music">
                <p>Created By {publish.user?.username}</p>
                <div className="genre">{publish.genre}</div>
                <div className="audio"></div>
              </div>
            </div>
          </>
        </section>

        {lgShow && (
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
              <img src={publish.cover?.url} className="audio-cover" alt="" />
              <div className="audio-title">{publish.title}</div>
              <div className="audio">
                <ReactAudioPlayer
                  src={publish.audio?.url}
                  autoPlay
                  controls
                  crossOrigin="anonymous"
                />
              </div>
              <div className="container-close">
                <img
                  className="close"
                  src={close}
                  onClick={() => setLgShow(false)}
                  alt=""
                />
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default PublishFocus;
