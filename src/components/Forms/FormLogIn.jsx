import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import apiHandler from "../../api/apiHandler";
import useAuth from "../../auth/useAuth";
import { useNavigate } from "react-router-dom";

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
      <form onSubmit={handleSubmit}>
        <h2>Log In</h2>

        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
          value={username}
        />

        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
        <button>LOG IN</button>
      </form>
    </>
  );
};

export default FormLogIn;

// const token = localStorage.getItem('authToken')

// axios.get("http://localhost:8080/api/private", {
// 	headers: {
// 		Authorization: `Bearer ${token}` ,
// 	},
// })
