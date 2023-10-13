import { useState, useEffect } from "react";
// Import the UserContext for providing user authentication data
import UserContext from "./UserContext";
// Import the service for making API requests
import service from "../api/apiHandler";


// Create a UserProvider component that provides user authentication data to its children
const UserProvider = ({ children }) => {
    // Define the initial state for authentication
  const [auth, setAuth] = useState({
    currentUser: null,
    isLoading: true,
    isLoggedIn: false,
  });

   // Use the useEffect hook to authenticate the user when the component is mounted
  useEffect(() => {
    authenticateUser();
  }, []);
  
  // Function to authenticate the user by making an API request
  const authenticateUser = () => {
    service
      .isLoggedIn()
      .then((user) => {
        // Set the authentication state when the user is authenticated
        setAuth({ currentUser: user, isLoading: false, isLoggedIn: true });
      })
      // Set the authentication state when there's an error and log the error message
      .catch((e) => {
        setAuth({ currentUser: null, isLoading: false, isLoggedIn: false });
        console.error(e.message);
      });
  };

  // Function to remove the user's authentication and token
  const removeUser = async () => {
    removeToken();
    authenticateUser();
  };

  // Function to remove the authentication token from local storage
  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  // Function to store the authentication token in local storage
  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  // Create an object with authentication-related values to be provided to child components
  const authValues = {
    currentUser: auth.currentUser,
    isLoading: auth.isLoading,
    isLoggedIn: auth.isLoggedIn,
    removeUser,
    storeToken,
    authenticateUser,
  };

  // Provide the authentication context values to child components
  return (
    <UserContext.Provider value={authValues}>{children}</UserContext.Provider>
  );
};

// Export the UserProvider component for use in the application
export default UserProvider;
