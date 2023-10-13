// NAV WHEN WE ARE ON MENU


// IMPORT
import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";

//SCSS
import "../../styles/NavMenu.scss";

// IMPORT IMG
import croix from "../../assets/img/14.png";

const NavMainMenu = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();

  return (
    <>
      {isLoggedIn && (
        <>
          <nav className="NavMainMenu">
            <NavLink to="/">
              <img className="menu" src={croix} alt="" />
            </NavLink>
          </nav>
          <nav className="NavMainTwoMenu">
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
          <nav className="NavMainMenu">
            <NavLink to="/">
              <img className="menu" src={croix} alt="" />
            </NavLink>
          </nav>
          <nav className="NavMainTwoMenu">
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

export default NavMainMenu;
