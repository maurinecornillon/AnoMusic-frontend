// Import the useContext hook from the "react" library
import { useContext } from "react";

// Import the UserContext from a custom context module
import UserContext from "./UserContext";

// Create a custom  called "useAuth" for accessing the UserContext
const useAuth = () => {
	  // Use the useContext hook to access the UserContext and return its value
	return useContext(UserContext);
};


// Export the useAuth hook for use in other parts of the application
export default useAuth;
