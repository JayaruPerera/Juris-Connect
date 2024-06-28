import React from "react";
import Navbar from "../../../components/Header/Navbar";
import Footer from "../../../components/Footer/Footer";
// import { useLocation } from "react-router-dom";

function OpenBlog() {
  // const location = useLocation();
  // const item = location.state?.item || null;

  // if (!item) {
  //   return <div>Item not found</div>;
  // }

  return (
    <>
      <Navbar />
      <div className="blognews">
        <h1>{item.title}</h1>
      </div>
      <div className="open-blog">
        <img src={item.image} alt="" />
        <h3>By: {item.author}</h3>
        <p>{item.desc}</p>
      </div>

      <Footer />
    </>
  );
}

export default OpenBlog;
