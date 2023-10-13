import axios from "axios";

// Create an instance of axios with a base URL
const apiHandler = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,// Use the backend URL from environment variables
});


// Interceptor to add an Authorization header with a JWT token from local storage
apiHandler.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

// Function for handling errors in API requests
function errorHandler(error) {
  if (error.data) {
    console.log(error.data && error.data.message);
    throw error;
  }
  throw error;
}

// Define a service object that extends the capabilities of the axios instance
const service = {
  // Service is spread to have access to the basics get/post...
  ...apiHandler,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },
  isLoggedIn() {
    return service
      .get("/api/auth/me")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/login", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  updateprofile(userInfo) {
    return service
      .post("/api/profile/updateme", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  publish(userInfo) {
    return service
      .post("/api/publish/music", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getFavorite(userInfo) {
    return service
      .post("/api/favorite/favorite", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },


};

// export default apiHandler

export default service;
