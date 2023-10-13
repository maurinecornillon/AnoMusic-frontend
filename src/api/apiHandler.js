import axios from "axios";

// A REVOIR

const apiHandler = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

apiHandler.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

//! Error handling to use in the catch
function errorHandler(error) {
  if (error.data) {
    console.log(error.data && error.data.message);
    throw error;
  }
  throw error;
}


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
