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
  const { hero, educationSection, testimonialsSection, blogPosts } =
    homeContent;

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
          <h2>{hero.title}</h2>
          <p>{hero.description}</p>
          <button>{hero.buttonText}</button>
        </div>
        <div className="hero-svg">
          <ContentSVG />
        </div>
      </section>

      <section className="education-section">
        <div className="container-2">
          <h2>{educationSection.heading}</h2>
          <p>{educationSection.subheading}</p>
          <div className="education-boxes">
            {educationSection.boxes.map((box, index) => (
              <div className="education-box" key={index}>
                <h3>{box.title}</h3>
                <p>{box.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>{testimonialsSection.heading}</h2>
        <Slider {...sliderSettings}>
          {testimonialsSection.testimonials.map((testimonial, index) => (
            <div className="testimonials" key={index}>
              <img src={testimonial.photo} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p>{testimonial.review}</p>
            </div>
          ))}
        </Slider>
      </section>

      {/* Blog Post Section */}
      <section id="blog" className="blog-container">
        <h2>
          Read our <span style={{ color: "#dd5c3f" }}>Recent Blogs</span>
        </h2>
        <div className="blog-section">
          {blogPosts.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img src={blog.img} alt={blog.title} className="blog-image" />
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-content">
                {blog.content.length > 100
                  ? blog.content.substring(0, 100) + "..."
                  : blog.content}
                <Link to={`/blog/${blog.id}`} className="read-more">
                  Read More
                </Link>
              </p>
            </div>
          ))}
        </div>
      </section>

      <Faq />
      <Footer />
    </>
  );
};

export default Home;
