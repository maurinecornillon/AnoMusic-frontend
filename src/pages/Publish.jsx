/* TO PUBLISH */



// IMPORT REACT
import React from "react";

//COMPONENTN
import NavMain from "../components/Nav/NavMain";

//PACKAGES
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// SCSS
import "../../src/styles/Publish.scss";


//IMG
import planet from "../assets/img/4.png";

function Publish() {
  // Define state variables for title, genre, cover, audio, and response data
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState([]);
  const [cover, setCover] = useState(null);
  const [audio, setAudio] = useState(null);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object to send form data with file uploads
    const formData = new FormData();
    formData.append("title", title);
    formData.append("genre", genre);
    formData.append("cover", cover);
    formData.append("audio", audio);

    try {
       // Send a POST request to publish music
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/publish/music`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      // Store the response data and navigate back to the home page
      setData(response.data);
      navigate("/");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <NavMain />
      <div className="UpdateMain">
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
              <label for="audio">CHOOSE YOUR AUDIO</label>
              <input
                type="file"
                onChange={(event) => {
                  setAudio(event.target.files[0]);
                }}
                placeholder="CHOOSE YOUR AUDIO"
                id="audio"
                name="audio"
              ></input>

              <label for="cover">CHOOSE YOUR COVER</label>
              <input
                type="file"
                onChange={(event) => {
                  setCover(event.target.files[0]);
                }}
                placeholder="CHOOSE YOUR COVER"
                id="cover"
                name="cover"
              />

              <select
                // multiple="multiple"
                name="genre"
                onChange={(event) => {
                  setGenre(
                    Array(...event.target.options)
                      .filter((option) => option.selected)
                      .map((option) => option.value)
                  );
                }}
              >
                <option value="">--TRY TO DEFINE YOUR MUSIC--</option>
                <option value="cold-wave">cold-wave</option>
                <option value="post-punk">post-punk</option>
                <option value="new-wave">new-wave</option>
                <option value="hip-hop">hip-hop</option>
                <option value="rock">rock</option>
                <option value="pop">pop</option>
                <option value="indie-pop">indie-pop</option>
                <option value="EBM">EBM</option>
                <option value="EDM">EDM</option>
              </select>

              <button>PUBLISH</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Publish;
