import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Faq from "../../Components/Faq/Faq";
import { ReactComponent as ContentSVG } from "../../Assets/Images/content.svg";
import blog from "../../Assets/Blogs/blog.json";

const Home = () => {
  return (
    <>
      <Header />
      <section class="hero">
        <div class="hero-content">
          <h2>Your Course to Success</h2>
          <p>
            Build skills with courses, certificates, and degrees online from
            world-class universities and companies.
          </p>
          <button>Start now</button>
        </div>
        <div class="hero-svg">
          <ContentSVG />
        </div>
      </section>

      <section className="education-section">
        <div className="container-2">
          {/* Main heading and subheading */}
          <h2>EDUCATION FOR EVERYONE</h2>
          <p>
            Affordable Online Courses and Learning Opportunities.<br></br>{" "}
            Finding your own space and utilizing better learning options can
            result in faster learning than traditional ways. Enjoy the beauty of
            eLearning!
          </p>

          {/* Flexbox container for the individual boxes */}
          <div className="education-boxes">
            {/* Learn the Latest Top Skills */}
            <div className="education-box">
              <h3>Learn the Latest Top Skills</h3>
              <p>
                Learning top skills can bring extraordinary outcomes in a
                career.
              </p>
            </div>

            {/* Learn in Your Own Pace */}
            <div className="education-box">
              <h3>Learn in Your Own Pace</h3>
              <p>
                Everyone prefers to enjoy learning at their own pace, and that
                gives great results.
              </p>
            </div>

            {/* Learn From Industry Experts */}
            <div className="education-box">
              <h3>Learn From Industry Experts</h3>
              <p>
                Experienced teachers can assist in learning faster with their
                best approaches!
              </p>
            </div>

            {/* Enjoy Learning From Anywhere */}
            <div className="education-box">
              <h3>Enjoy Learning From Anywhere</h3>
              <p>
                We are delighted to give you options to enjoy learning from
                anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <Footer />
    </>
  );
};

export default Home;
