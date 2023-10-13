// IMPORT
import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";

// SCSS 
import "../../styles/Nav.scss";

const NavMain = () => {
  const { isLoggedIn, removeUser } = useAuth();

  return (
    <>
      {/* VERIFY IF WE ARE LOG IN*/}
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
      {/* VERIFY IF WE ARE NOT LOG IN*/}
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
