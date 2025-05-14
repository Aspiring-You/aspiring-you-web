import React from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Faq from "../../Components/Faq/Faq";
import { ReactComponent as ContentSVG } from "../../Assets/Images/content.svg";
import homeContent from "../../Assets/Home/Home.json";

const Home = () => {
  // console.log("Home Content:", homeContent);
  const {
    hero = {},
    educationSection = {},
    testimonialsSection = {},
    blogPosts = [],
    certifiedPartners = [],

    whyChooseUs = {},
  } = homeContent || {};

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero-content">
          <h2>{hero?.title || "Welcome!"}</h2>
          <p>{hero?.description || "Your journey to success starts here."}</p>
          <button>{hero?.buttonText || "Get Started"}</button>
        </div>
        <div className="hero-svg">
          <ContentSVG />
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <h2>{whyChooseUs?.heading || "Why Choose Us?"}</h2>
          <p>
            {whyChooseUs?.subheading ||
              "We provide unmatched benefits and features."}
          </p>
          <div className="choose-us-features">
            {whyChooseUs?.points?.length > 0 ? (
              whyChooseUs.points.map((point, index) => (
                <div className="choose-box" key={index}>
                  <img src={point?.icon} alt={point?.title} />
                  <h3>{point?.title || "Feature Title"}</h3>
                  <p>{point?.description || "Feature description."}</p>
                </div>
              ))
            ) : (
              <p>No features available.</p>
            )}
          </div>
        </div>
      </section>

      {/* <section className="education-section">
        <div className="container-2">
          <h2>{educationSection?.heading || "Explore Our Courses"}</h2>
          <p>{educationSection?.subheading || "Learn from the best."}</p>
          <div className="education-boxes">
            {educationSection?.boxes?.length > 0 ? (
              educationSection.boxes.map((box, index) => (
                <div className="education-box" key={index}>
                  <h3>{box?.title || "Course Title"}</h3>
                  <p>{box?.description || "Course description goes here."}</p>
                </div>
              ))
            ) : (
              <p>No courses available at the moment.</p>
            )}
          </div>
        </div>
      </section> */}

      <section className="testimonials-section">
        <h2>{testimonialsSection?.heading || "What Our Students Say"}</h2>
        {testimonialsSection?.testimonials?.length > 0 ? (
          <Slider {...sliderSettings}>
            {testimonialsSection.testimonials.map((testimonial, index) => (
              <div className="testimonials" key={index}>
                <img src={testimonial?.photo} alt={testimonial?.name} />
                <h3>{testimonial?.name || "Anonymous"}</h3>
                <p>{testimonial?.review || "No review available."}</p>
              </div>
            ))}
          </Slider>
        ) : (
          <p>No testimonials available.</p>
        )}
      </section>

      <section id="blog" className="blog-container">
        <h2>Read our Recent Blogs</h2>
        <div className="blog-section">
          {blogPosts?.length > 0 ? (
            blogPosts.map((blog) => (
              <div key={blog.id} className="blog-card">
                <img src={blog?.img} alt={blog?.title} className="blog-image" />
                <h3 className="blog-title">{blog?.title || "Blog Title"}</h3>
                <p className="blog-content">
                  {blog?.content?.length > 100
                    ? blog.content.substring(0, 100) + "..."
                    : blog?.content}
                  <Link to={`/blog/${blog.id}`} className="read-more">
                    Read More
                  </Link>
                </p>
              </div>
            ))
          ) : (
            <p>No blogs available.</p>
          )}
        </div>
      </section>

      <section className="certified-partners">
        <h2>Our Certified Partners</h2>
        <p>Partnering with World's leading universities</p>
        <div className="partners-logos">
          {certifiedPartners?.length > 0 ? (
            certifiedPartners.map((partner, index) => (
              <img
                key={index}
                src={partner?.logo}
                alt={partner?.name}
                className="partner-logo"
              />
            ))
          ) : (
            <p>No partners listed.</p>
          )}
        </div>
      </section>

      <Faq />
      <Footer />
    </>
  );
};

export default Home;
