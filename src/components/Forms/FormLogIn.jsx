// TO LOGIN


// IMPORT 
import React, { useState } from "react";
// Custom hook for handling form input
import useForm from "../../hooks/useForm";
// Module for making API requests
import apiHandler from "../../api/apiHandler";
// Custom hook for user authentication
import useAuth from "../../auth/useAuth";
import { useNavigate } from "react-router-dom";

// SCSS
import "../../styles/FormLogIn.scss";


//
const FormLogIn = () => {
  // Use the useForm to manage form input state
  const [{ username, password }, handleChange] = useForm({
    username: "",
    password: "",
  });

  // Initialize state for handling login errors
  const [error, setError] = useState(null);
  // Get the navigate function to redirect to different routes
  const navigate = useNavigate();
  // Get the storeToken and authenticateUser functions from the useAuth 
  const { storeToken, authenticateUser } = useAuth();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    apiHandler
    // Make a sign-in API requests
      .signin({ username, password })
      .then((res) => {
        console.log(res);
        // Store the authentication token in local storage
        storeToken(res.authToken);
        // Authenticate the user
        authenticateUser();
        // Redirect to the home page
        navigate("/");
      })
      .catch((e) => {
        // Set an error message if the sign-in request fails
        setError(e.response.data);
      });
  };

  return (
    <>
      {error && <h3 className="error">{error.message}</h3>}

      <form className="container-login" onSubmit={handleSubmit}>
        <h2>LOG IN</h2>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="USERNAME"
          onChange={handleChange}
          value={username}
          autoComplete="hey"
        />

        <input
          type="password"
          id="password"
          name="password"
          placeholder="PASSWORD"
          onChange={handleChange}
          value={password}
        />
        <button>LOG IN</button>
      </form>
    </>
  );
};

export default FormLogIn;
