
import { useState } from "react";

// Create useForm for managing form input state
const useForm = (initialValues) => {
  // Initialize state to store form input values
  const [values, setValues] = useState(initialValues);
  // Function to handle changes in form inputs
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]:
        e.target.type === "file" ? e.target.files[0] : e.target.value,
    });
  };

  // Function to reset the form to its initial values
  const reset = () => {
    setValues(initialValues);
  };

  // Return an array containing form values, the handleChange function, the reset function, and the setValues function
  return [values, handleChange, reset, setValues];
};

export default useForm;
