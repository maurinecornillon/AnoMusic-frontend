import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import "../../styles/Nav.scss";
import search from "../../assets/img/12.png";

const NavMain = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();

  return (
    <>
      {isLoggedIn && (
        <>
          <nav className="NavMain">
            <NavLink to="/menu">
              <div className="hamburger">
                <div className="top-bun"></div>
                <div className="meat"></div>
                <div className="bottom-bun"></div>
              </div>
            </NavLink>
          </nav>

          <nav className="NavMainTwo">
            <div>
              <div className="nav-logout">
                <button className="logout" onClick={removeUser}>
                  LOG OUT
                </button>
              </div>
            </div>
          </nav>
        </>
      )}
      {!isLoggedIn && (
        <>
          <nav className="NavMain">
            <NavLink to="/menu">
              <div className="hamburger">
                <div className="top-bun"></div>
                <div className="meat"></div>
                <div className="bottom-bun"></div>
              </div>
            </NavLink>
          </nav>
          <nav className="NavMainTwo">
            <div>
              <div className="nav-logout">
                <NavLink to="/formauthsignup">SIGN UP</NavLink>
                <span> {"/"} </span>
                <NavLink to="/formauthsignup">LOG IN</NavLink>
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
};

export default NavMain;
