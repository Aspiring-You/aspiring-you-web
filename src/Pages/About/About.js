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
  const { hero = {}, mission = {}, team = {} } = aboutUs;
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
              OUR <span style={{ color: "#dd5c3f" }}>MISSION</span>
            </h2>
            <p>{mission.description || "No mission description available."}</p>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section>
        <div className="aboutus-card">
          <h2>
            OUR <span style={{ color: "#dd5c3f" }}>TEAM</span>
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

      {/* Hero Section */}
      <section className="aboutus-hero">
        <div className="aboutus-start">
          <h2>
            {heading}
            <br />
            <span style={{ color: "#dd5c3f" }}>{subheading}</span>
          </h2>
          <img src={resolvedImagePath} alt={imageAltText} />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
