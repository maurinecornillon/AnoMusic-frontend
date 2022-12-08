import "../../src/styles/Articles.scss";
import test from "../assets/img/11.png";
import NavMain from "../components/Nav/NavMain";

function Articles() {
  return (
    <>
      <NavMain />
      <div className="main-about-articles">
        <div className="title">
          <span className="txt t1">
            - ARTICLES - ARTICLES - ARTICLES - ARTICLES&nbsp;
          </span>
          <span className="txt t2">
            - ARTICLES - ARTICLES - ARTICLES - ARTICLES&nbsp;
          </span>
        </div>
      </div>
      <section className="body">
        <div className="section-fluid-main">
          <div className="section-row">
            <div className="section-col">
              <div className="section">
                <div className="section-in">
                  <img src={test} alt="" />
                </div>
              </div>
            </div>
            <div className="hover-text">
              <h2>The Best Album of 2022</h2>
            </div>
            <div className="section-col">
              <div className="section">
                <div className="section-in">
                  <img src={test} alt="" />
                </div>
              </div>
            </div>
            <div className="hover-text">
              <h2>Discover Shame</h2>
            </div>
            <div className="section-col">
              <div className="section">
                <div className="section-in">
                  <img src={test} alt="" />
                </div>
              </div>
            </div>
            <div className="hover-text">
              <h2>Artists Portraits</h2>
            </div>
            <div className="section-col">
              <div className="section">
                <div className="section-in">
                  <img src={test} alt="" />
                </div>
              </div>
            </div>
            <div className="hover-text">
              <h2>Why french rap became popular ?</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Articles;
