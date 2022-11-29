import useForm from "../../hooks/useForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiHandler from "../../api/apiHandler";

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
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>

        <input
          onChange={handleChange}
          value={values.username}
          placeholder="USERNAME"
          type="text"
          id="username"
          name="username"
        />

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
