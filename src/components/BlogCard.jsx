"use client"

import "../styles/BlogCard.css"
import { FaCalendarAlt } from "react-icons/fa";

const BlogCard = ({ post, onClick }) => {
  return (
    <div className="blog-card" onClick={() => onClick(post.id)}>
      <div className="blog-card-image-container">
        <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="blog-card-image" />
      </div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{post.title}</h3>
        <div className="blog-card-date">
          <FaCalendarAlt size={16} className="date-icon" />
          <span>{post.date}</span>
        </div>
        <p className="blog-card-description">{post.shortDescription}</p>
      </div>
    </div>
  )
}

export default BlogCard
