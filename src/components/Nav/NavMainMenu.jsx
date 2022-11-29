import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import "../../styles/NavMenu.scss";
import croix from "../../assets/img/14.png";
import menu from "../../assets/img/Menu.png";

const NavMainMenu = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();

  return (
    <>
      <nav className="NavMainMenu">
        <NavLink to="/">
          <img className="menu" src={croix} alt="" />
        </NavLink>
      </nav>
      <nav className="NavMainTwoMenu">
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
                <NavLink to="/signup">SIGN UP</NavLink>
                <span> {"/"} </span>
                <NavLink to="/login">LOG IN</NavLink>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavMainMenu;
