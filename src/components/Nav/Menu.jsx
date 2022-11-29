import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import NavMainMenu from "../../components/Nav/NavMainMenu";
import "../../styles/Menu.scss";
import lines from "../../assets/img/Lignes.svg";

const Menu = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  return (
    <>
      <NavMainMenu />
      <nav className="Menu">
        {isLoggedIn && (
          <>
            <p>Test connecté</p>
          </>
        )}
        {!isLoggedIn && (
          <>
            <div className="MenuLogout">
              <p>HOME</p>
              <p>ABOUT</p>
              <p>ARTICLES</p>
            </div>

            <div className="BackgroundMenu">
              <img src={lines} alt="" />
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Menu;
