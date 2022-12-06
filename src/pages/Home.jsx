import React from "react";
import "../../src/styles/Home.scss";

//PACKAGE
import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import Modal from "react-bootstrap/Modal";
import ModalDialog from "react-bootstrap/ModalDialog";
import NavMain from "../components/Nav/NavMain";
import axios from "axios";
import useAuth from "../auth/useAuth";

//IMG
import logo from "../assets/img/Logoblanc.svg";
import like from "../assets/img/1.png";
import play from "../assets/img/Play.png";
import more from "../assets/img/More.png";

const Home = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  const [data, setData] = useState();
  const [audio, setAudio] = useState();
  const [cover, setCover] = useState();
  const [title, setTitle] = useState();

  const [lgShow, setLgShow] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://localhost:8080/api/publish/home`
      );

      setData(response.data);
      setAudio(response.data.publish[0].audio.url);
      setTitle(response.data.publish[0].title);
      setCover(response.data.publish[0].cover.url);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoggedIn && (
        <>
          <NavMain />
          <div className="main-about-home">
            <div className="title">
              <span class="txt t1">
                - DISCOVER - DISCOVER - DISCOVER - DISCOVER&nbsp;
              </span>
              <span class="txt t2">
                - DISCOVER - DISCOVER - DISCOVER - DISCOVER&nbsp;
              </span>
            </div>
          </div>
          <section className="body-home">
            {data.publish.map((el, key) => {
              return (
                <>
                  <div class="section-fluid-main-home" key={key}>
                    <div class="section-row-home">
                      <div class="section-col-home">
                        <div class="section-home">
                          <div class="section-in-home">
                            <img src={el.cover.url} alt="" />
                          </div>
                        </div>
                      </div>
                      <div class="hover-text-home">
                        <h2>{el.title}</h2>
                      </div>
                    </div>
                    <div className="icone">
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
                      <p>
                        <img className="like" src={more} alt="" />
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </section>
          {/* <div className="HomeMainLog">
            <div>TEST</div>

            <div className="main-home">
              {data.publish.map((el, key) => {
                return (
                  <>
                    <div className="card-main" key={key}>
                      <div className="img">
                        <img
                          src={el.cover.url}
                          alt=""
                          onClick={() => setLgShow(true)}
                        />
                      </div>

                      <div className="resum-card">
                        <div className="left-card">
                          <p className="name">MonaB</p>
                          <img src={like} alt="" />
                        </div>
                        <div className="right-card">
                          <p className="title">{el.title}</p>

                          <p>{el.genre[0]}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div> */}
          <div className="HomeMainLog">
            <Modal
              className="modal"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <div className="info-audio">
                <img src={cover} className="audio-cover" alt="" />
                <div className="audio-title">{title}</div>
                <div className="audio">
                  <ReactAudioPlayer src={audio} autoPlay controls />
                </div>
              </div>
              {/* <Modal.Header closeButton></Modal.Header> */}
            </Modal>
          </div>
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
              <section></section>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
