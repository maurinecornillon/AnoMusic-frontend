// TO LOGIN


// IMPORT 
import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import apiHandler from "../../api/apiHandler";
import useAuth from "../../auth/useAuth";
import { useNavigate } from "react-router-dom";

// SCSS
import "../../styles/FormLogIn.scss";


//
const FormLogIn = () => {
  const [{ username, password }, handleChange] = useForm({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    apiHandler
      .signin({ username, password })
      .then((res) => {
        console.log(res);
        storeToken(res.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((e) => {
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
