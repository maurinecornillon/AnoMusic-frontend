/* PAGE FOR UPDATE USER PROFILE */

// IMPORT REACT
import React from "react";

//COMPONENTN
import NavMain from "../components/Nav/NavMain";

//PACKAGES
import useAuth from "../auth/useAuth";
import { useNavigate } from "react-router-dom";
import useForm from "../hooks/useForm";
import { useState } from "react";
import apiHandler from "../api/apiHandler";

// SCSS
import "../../src/styles/UpdateProfile.scss";

//IMG
import planet from "../assets/img/4.png";

function UpdateProfile() {
   // Get the current user and the authentication function from the useAuth 
  const { currentUser, authenticateUser } = useAuth();
  // Initialize state variables for form values, errors, and navigation
  const [values, handleChange, resetValus, setValues] = useForm(currentUser);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // If there is a current user and form values are not set, populate the form with user data
  if (currentUser && !values) {
    setValues(currentUser);
  }


  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to send form data with file uploads
    const FD = new FormData();

    // Append form values to the FormData object
    for (let [key, value] of Object.entries(values)) {
      FD.append(key, value);
    }
    apiHandler
      .updateprofile(FD)
      .then(async () => {
        // Authenticate the user and navigate to the user's profile page
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
