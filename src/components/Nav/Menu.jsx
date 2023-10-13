// MENU WHEN LOG IN AND LOT OUT

// IMPORT
import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import NavMainMenu from "../../components/Nav/NavMainMenu";

// SCSS
import "../../styles/Menu.scss";


//
const Menu = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  return (
    <>
      <NavMainMenu />
      {/* VERIFY IF WE ARE LOG IN*/}
      {isLoggedIn && (
        <>
          <section className="background-menu-login">
            <nav className="Menu">
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
                <div className="containerNum">
                  <span>04</span>
                  <NavLink to="/publish">
                    <p>PUBLISH</p>
                  </NavLink>
                </div>
                <div className="containerNum">
                  <span>05</span>
                  <NavLink to="/profile">
                    <p>PROFILE</p>
                  </NavLink>
                </div>
              </div>
            </nav>
          </section>
        </>
      )}

      {/* VERIFY IF WE ARE NOT LOG IN */}
      {!isLoggedIn && (
        <>
          <section>
            <nav className="Menu">
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
            </nav>
          </section>
        </>
      )}
    </>
  );
};

export default Menu;
