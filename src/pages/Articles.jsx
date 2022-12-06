import "../../src/styles/Articles.scss";
import test from "../assets/img/11.png";
import NavMain from "../components/Nav/NavMain";

function Articles() {
  return (
    <>
      <NavMain />
      <div className="main-about-articles">
        <div className="title">
          <span class="txt t1">
            - ARTICLES - ARTICLES - ARTICLES - ARTICLES&nbsp;
          </span>
          <span class="txt t2">
            - ARTICLES - ARTICLES - ARTICLES - ARTICLES&nbsp;
          </span>
        </div>
      </div>
      <section className="body">
        <div class="section-fluid-main">
          <div class="section-row">
            <div class="section-col">
              <div class="section">
                <div class="section-in">
                  <img src={test} alt="" />
                </div>
              </div>
            </div>
            <div class="hover-text">
              <h2>The Best Album of 2022</h2>
            </div>
            <div class="section-col">
              <div class="section">
                <div class="section-in">
                  <img src={test} alt="" />
                </div>
              </div>
            </div>
            <div class="hover-text">
              <h2>Toy Pig</h2>
            </div>
            <div class="section-col">
              <div class="section">
                <div class="section-in">
                  <img src={test} alt="" />
                </div>
              </div>
            </div>
            <div class="hover-text">
              <h2>Shy Portrait</h2>
            </div>
            <div class="section-col">
              <div class="section">
                <div class="section-in">
                  <img src={test} alt="" />
                </div>
              </div>
            </div>
            <div class="hover-text">
              <h2>Skateboard Face</h2>
            </div>
            <div class="section-col">
              <div class="section">
                <div class="section-in">
                  <img src={test} alt="" />
                </div>
              </div>
            </div>
            <div class="hover-text">
              <h2>Mirror Reflection</h2>
            </div>
            <div class="section-col">
              <div class="section">
                <div class="section-in">
                  <img src={test} alt="" />
                </div>
              </div>
            </div>
            <div class="hover-text">
              <h2>Funny Bunny</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Articles;
