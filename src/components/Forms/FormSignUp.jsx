// TO SIGN UP

// IMPORT

import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Custom hook for handling form input
import useForm from "../../hooks/useForm";
// Module for making API requests
import apiHandler from "../../api/apiHandler";

// SCSS
import "../../styles/FormSignUp.scss";

const FormSignUp = () => {
    // Use the useForm to manage form input state
  const [values, handleChange] = useForm({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  // Initialize state for handling login errors
  const [error, setError] = useState(null);
  // Get the navigate function to redirect to different routes
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    apiHandler
      // Make a sign-up API requests
      .signup(values)
      .then(() => {
       // Redirect to the login page
        navigate("/login");
      })
      .catch((error) => {
        // Set an error message if the sign-in request fails
        setError(error.response.data);
      });
  };
  return (
    <>
      {error && <h3 className="error">{error.message}</h3>}
      <form
        autoComplete="off"
        className="container-signup"
        onSubmit={handleSubmit}
      >
        <h2>SIGN UP</h2>

        <input
          onChange={handleChange}
          value={values.username}
          placeholder="USERNAME"
          type="text"
          id="username"
          name="username"
        />
        <div className="container-name">
          <input
            onChange={handleChange}
            value={values.firstName}
            placeholder="FIRST NAME"
            type="text"
            id="firstName"
            name="firstName"
          />

          <input
            onChange={handleChange}
            value={values.lastName}
            placeholder="LAST NAME"
            type="text"
            id="lastName"
            name="lastName"
          />
        </div>
        <input
          onChange={handleChange}
          value={values.email}
          placeholder="EMAIL"
          type="email"
          id="email"
          name="email"
        />

        <input
          onChange={handleChange}
          value={values.password}
          placeholder="PASSWORD"
          type="password"
          id="password"
          name="password"
        />

        <button>REGISTER</button>
      </form>
    </>
  );
};

export default FormSignUp;
