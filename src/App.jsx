import { Routes, Route } from "react-router-dom";
//COMPONENTS
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import LoggedOut from "./components/LoggedOut/LoggedOut";
import Menu from "./components/Nav/Menu";
//PAGES
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Articles from "./pages/Articles";
import FormAuthSignUp from "./pages/FormAuthSignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formauthsignup" element={<FormAuthSignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
