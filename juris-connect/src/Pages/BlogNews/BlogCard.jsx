import React from 'react'
import './BlogNews.css'

function BlogCard(props) {
  return (
    <div className='blog-card'>
        <img src={props.image} alt="BlogCardImg" />
       <div>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <h3>{props.author}</h3>
       </div>
    </div>
  )
}

export default BlogCard