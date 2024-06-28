import React from "react";
import { Link } from "react-router-dom";
import "./BlogCard.css";

function BlogCard(props) {
  return (
    <Link
      to={props.url}
      className="blog-card"
      onClick={(event) => {
        event.stopPropagation();
        props.onClick();
      }}
    >
      <div>
        <img src={props.image} alt="BlogCardImg" />
        <div className="blog-card-content">
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
          <h3>{props.author}</h3>
        </div>
      </div>
    </Link>
  );
}
export default BlogCard;
