// TO SIGN UP

// IMPORT
import useForm from "../../hooks/useForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import "../../styles/FormSignUp.scss";

const FormSignUp = () => {
  const [values, handleChange] = useForm({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    apiHandler
      .signup(values)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
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
