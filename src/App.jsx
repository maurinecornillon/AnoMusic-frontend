
// IMPORT ROUTING FROM REACT
import { Routes, Route, Navigate } from "react-router-dom";

// IMPORT USE AUTH
import useAuth from "../src/auth/useAuth";


//COMPONENTS
import Menu from "./components/Nav/Menu";


//PAGES
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Articles from "./pages/Articles";
import FormAuthSignUp from "./pages/FormAuthSignUp";
import UpdateProfile from "./pages/UpdateProfile";
import Publish from "./pages/Publish";
import PublishFocus from "./pages/PublishFocus";
import Favorites from "./pages/Favorites";

function App() {

 
  const { isLoggedIn } = useAuth();

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formauthsignup" element={<FormAuthSignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/profile"
            element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
          />
          <Route
            path="/publish"
            element={isLoggedIn ? <Publish /> : <Navigate to="/login" />}
          />
          <Route
            path="/music/:id"
            element={isLoggedIn ? <PublishFocus /> : <Navigate to="/login" />}
          />
          <Route
            path="/updateprofile"
            element={isLoggedIn ? <UpdateProfile /> : <Navigate to="/login" />}
          />
          <Route
            path="/favorite"
            element={isLoggedIn ? <Favorites /> : <Navigate to="/login" />}
          />
        </Routes>
    </div>
  );
}





export default App;
