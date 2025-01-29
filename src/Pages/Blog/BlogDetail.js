import React from "react";
import { useParams } from "react-router-dom";
import blogPosts from "../../Assets/Home/Home.json";
import "./BlogDetail.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogPosts.blogPosts.find((post) => post.id.toString() === id);

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <>
      <Header />
      <div className="blog-detail-container">
        <h1 className="blog-title">{blog.title}</h1>
        <img src={blog.img} alt={blog.title} className="blog-image" />
        <p className="blog-content">{blog.content}</p>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
