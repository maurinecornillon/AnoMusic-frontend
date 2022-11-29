import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import "../../styles/Nav.scss";
import menu from "../../assets/img/Menu.png";

const NavMain = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();

  return (
    <>
      <nav className="NavMain">
        <NavLink to="/menu">
          <img className="menu" src={menu} alt="" />
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

export default NavMain;
