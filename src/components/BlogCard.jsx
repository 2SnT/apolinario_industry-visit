import { useState } from "react"
import "../styles/BlogCard.css"
import { FaCalendarAlt } from "react-icons/fa"

const BlogCard = ({ post, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`blog-card ${isHovered ? "hovered" : ""}`}
      onClick={() => onClick(post.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="blog-card-image-container">
        <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="blog-card-image" />
        <div className="blog-card-overlay">
          <span>Read More</span>
        </div>
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
