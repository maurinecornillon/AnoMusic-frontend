import React from "react";
import NavMain from "../components/Nav/NavMain";
import axios from "axios";
import { useState } from "react";
import "../../src/styles/Publish.scss";
import planet from "../assets/img/4.png";

function Publish() {
  const [publishment, setPublishment] = useState(false);

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState([]);
  const [cover, setCover] = useState(null);
  const [audio, setAudio] = useState(null);

  const [data, setData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPublishment(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("genre", genre);
    formData.append("cover", cover);
    formData.append("audio", audio);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/publish/music",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      setData(response.data);
      console.log(response.data);
      setPublishment(false);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <NavMain />
      <div className="UpdateMain">
        <div>TEST</div>
        <div className="container-updateprofile">
          <div className="update">
            <div className="header-updateprofile">
              <div>
                <img src={planet} alt="" />
              </div>
              <div className="title-update">SHARE YOUR MUSIC - </div>
            </div>
            <form className="form-update" onSubmit={handleSubmit}>
              <input
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                placeholder="TITLE"
                type="text"
                id="title"
                name="title"
              />

              <input
                type="file"
                onChange={(event) => {
                  setAudio(event.target.files[0]);
                }}
                placeholder="CHOOSE YOUR AUDIO"
                id="audio"
                name="audio"
              />
              <input
                type="file"
                onChange={(event) => {
                  setCover(event.target.files[0]);
                }}
                placeholder="CHOOSE YOUR COVER"
                id="cover"
                name="cover"
              />

              <button>PUBLISH</button>
            </form>
          </div>
        </div>
        <div>TEST</div>
      </div>
    </>
  );
}

export default Publish;
