import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import NavMainMenu from "../../components/Nav/NavMainMenu";
import "../../styles/Menu.scss";

const Menu = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  return (
    <>
      <NavMainMenu />
      <section>
        <nav className="Menu">
          {isLoggedIn && (
            <>
              <p>Test connecté</p>
            </>
          )}
          {!isLoggedIn && (
            <>
              <div className="MenuLogout">
                <div className="containerNum">
                  <span>01</span>
                  <NavLink to="/">
                    <p>HOME</p>
                  </NavLink>
                </div>
                <div className="containerNum">
                  <span>02</span>
                  <NavLink to="/about">
                    <p>ABOUT</p>
                  </NavLink>
                </div>
                <div className="containerNum">
                  <span>03</span>
                  <NavLink to="/articles">
                    <p>ARTICLES</p>
                  </NavLink>
                </div>
              </div>
            </>
          )}
        </nav>
      </section>
    </>
  );
};

export default Menu;
