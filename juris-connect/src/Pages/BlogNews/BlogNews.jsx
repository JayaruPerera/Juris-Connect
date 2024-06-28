import React, { useState } from "react";
import "./BlogNews.css";
import BlogCard from "../../components/BlogCard/BlogCard";
import BlogNewsData from "./BlogNewsData";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import newspaper from "../../assets/newspaper.jpg";

// import { Redirect } from "react-router-dom";

function BlogNews() {
  // const [selectedBlog, setSelectedBlog] = useState(null);

  // const handleOpenBlog = (item) => {
  //   setSelectedBlog(item);
  // };

  // const renderOpenBlog = () => {
  //   if (selectedBlog) {
  //     return (
  //       <Redirect
  //         to={{
  //           pathname: "/blognews/openblog",
  //           state: { item: selectedBlog },
  //         }}
  //       />
  //     );
  //   }
  // // const [selectedBlog, setSelectedBlog] = useState();

  // // const handleOpenBlog = (item) => {
  // //   if (item) {
  // //     setSelectedBlog(item);
  // //   } else {
  // //     console.error("Item is null");
  // //   }
  // // };
  // // const renderOpenBlog = () => {
  // //   if (selectedBlog) {
  // //     return (
  // //       <Redirect
  // //         to={{
  // //           pathname: "/blognews/openblog",
  // //           state: { item: selectedBlog },
  // //         }}
  // //       />
  // //     );
  // //   }
  // };

  return (
    <>
      <Navbar />
      <div className="header">
        <img src={newspaper} alt="Background-Image" />
        <div className="overlay">
          <h1>Stay Informed and Inspired</h1>
          <p>
            Welcome to our Blogs & News hub! Discover the latest updates, expert
            <br />
            insights, and inspiring stories from our community. Stay connected
            <br />
            with trends and tips that matter to you.
          </p>
          <div className="search-bar">
            <input type="text" placeholder=" Search..." />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="blognews">
        <h1>Recent Blog Posts</h1>
        <button>Saved Blogs</button>
      </div>

      <div className="blog-container">
        {BlogNewsData.map((item) => (
          <BlogCard
            key={item.id}
            image={item.image}
            title={item.title}
            desc={item.desc}
            author={item.author}
            url={item.url}
            onClick={() => handleOpenBlog(item)}
          />
        ))}
      </div>

      <Footer />
      {/* {renderOpenBlog()} */}
    </>
  );
}
export default BlogNews;
