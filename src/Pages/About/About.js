import React from "react";
import "./About.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import content from "../../Assets/Aboutus/Aboutus.json";

// Image imports
import resolvedImagePath from "../../Assets/Images/image.png";
import aboutimage from "../../Assets/Images/aboutus.png";

const About = () => {
  if (!content || !content.aboutUs) {
    console.error("Error: AboutUs content is missing.");
    return <div>Error loading content. Please check your data.</div>;
  }

  // Extract data with fallback values
  const { aboutUs } = content;
  const {
    hero = {},
    mission = {},
    team = {},
    whyStandoutSection = {},
  } = aboutUs;
  const {
    heading = "Welcome",
    subheading = "",
    imageAltText = "About Us Image",
  } = hero;

  return (
    <>
      <Header />

      {/* Mission Section */}
      <section className="aboutus-details">
        <div className="aboutus-section">
          <div>
            <img src={aboutimage} alt="Mission Illustration" />
          </div>
          <div>
            <h2>
              OUR <span>MISSION</span>
            </h2>
            <p>{mission.description || "No mission description available."}</p>
          </div>
        </div>
      </section>

      <section className="why-standout">
        <div className="container">
          <h2>{whyStandoutSection?.heading || "Why Standout with Us?"}</h2>
          <p>
            {whyStandoutSection?.subheading ||
              "We offer unique benefits that help you achieve your career goals efficiently."}
          </p>
          <div className="standout-features">
            {whyStandoutSection?.features?.length > 0 ? (
              whyStandoutSection.features.map((feature, index) => (
                <div className="feature-box" key={index}>
                  <img src={feature?.icon} alt={feature?.title} />
                  <h3>{feature?.title || "Feature Title"}</h3>
                  <p>{feature?.description || "Feature description."}</p>
                </div>
              ))
            ) : (
              <p>No features available.</p>
            )}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section>
        <div className="aboutus-card">
          <h2>
            OUR <span>TEAM</span>
          </h2>
          <div className="team-members">
            {team.members && team.members.length > 0 ? (
              team.members.map((member, index) => (
                <div key={index} className="team-card">
                  <img src={member.img} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p>
                    <strong>{member.role}</strong>
                  </p>
                  <p>{member.description}</p>
                </div>
              ))
            ) : (
              <p>No team members available.</p>
            )}
          </div>
        </div>
      </section>

      {/* Hero Section
      <section className="aboutus-hero">
        <div className="aboutus-start">
          <h2>
            {heading}
            <br />
            <span style={{ color: "#dd5c3f" }}>{subheading}</span>
          </h2>
          <img src={resolvedImagePath} alt={imageAltText} />
        </div>
      </section> */}

      <Footer />
    </>
  );
};

export default About;
