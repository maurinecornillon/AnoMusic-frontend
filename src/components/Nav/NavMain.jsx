import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import "../../styles/Nav.scss";

const NavMain = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();

  return (
    <>
      <nav className="NavMain">
        <NavLink to="/menu">
          <div class="hamburger">
            <div class="top-bun"></div>
            <div class="meat"></div>
            <div class="bottom-bun"></div>
          </div>
        </NavLink>
      </nav>
      <nav className="NavMainTwo">
        <div>
          {isLoggedIn && (
            <>
              <NavLink to="/profile">
                {currentUser && currentUser.email}
              </NavLink>
              <button onClick={removeUser}>Log-Out</button>
            </>
          )}
          {!isLoggedIn && (
            <>
              <div className="nav-logout">
                <NavLink to="/formauthsignup">SIGN UP</NavLink>
                <span> {"/"} </span>
                <NavLink to="/formauthsignup">LOG IN</NavLink>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavMain;
