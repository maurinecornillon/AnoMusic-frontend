import React from "react";
import "../../src/styles/UpdateProfile.scss";

//COMPONENTN
import NavMain from "../components/Nav/NavMain";

//PACKAGES
import useAuth from "../auth/useAuth";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import { useState } from "react";
import apiHandler from "../api/apiHandler";

//IMG
import planet from "../assets/img/4.png";

function UpdateProfile() {
  const { currentUser, authenticateUser } = useAuth();
  const [values, handleChange, resetValus, setValues] = useForm(currentUser);

  if (currentUser && !values) {
    setValues(currentUser);
  }

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const FD = new FormData();

    for (let [key, value] of Object.entries(values)) {
      FD.append(key, value);
    }
    apiHandler
      .updateprofile(FD)
      .then(async () => {
        await authenticateUser();
        navigate("/profile");
      })
      .catch((error) => {
        setError(error.response.data);
      });
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
              <div className="title-update">UPDATE YOUR PROFILE - </div>
            </div>
            <form className="form-update" onSubmit={handleSubmit}>
              <div className="container-name">
                <input
                  onChange={handleChange}
                  value={values?.firstName}
                  placeholder="FIRST NAME"
                  type="text"
                  id="firstName"
                  name="firstName"
                />

                <input
                  onChange={handleChange}
                  value={values?.lastName}
                  placeholder="LAST NAME"
                  type="text"
                  id="lastName"
                  name="lastName"
                />
              </div>
              <input
                onChange={handleChange}
                value={values?.age}
                placeholder="AGE"
                type="text"
                id="age"
                name="age"
              />
              <label for="image">CHOOSE YOUR AVATAR</label>
              <input
                onChange={handleChange}
                type="file"
                name="image"
                id="image"
                accept="image/png, image/jpeg"
              />

              <input
                onChange={handleChange}
                value={values?.description}
                placeholder="DESCRIPTION"
                type="text"
                id="description"
                name="description"
              />

              <button>SAVE</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProfile;
