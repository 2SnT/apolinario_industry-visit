import "../styles/BlogPost.css"
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa";

const BlogPost = ({ post, onBack }) => {
  return (
    <div className="blog-post-container">
      <div className="blog-header">
        <h1 className="blog-main-title">Educational Tour Blog</h1>
      </div>

      <button onClick={onBack} className="back-button">
      <FaArrowLeft size={16} className="back-icon" />
        Back to posts
      </button>

      <div className="blog-post">
        <h2 className="blog-post-title">{post.title}</h2>

        <div className="blog-post-date">
        <FaCalendarAlt size={16} className="date-icon" />
          <span>{post.date}</span>
        </div>

        <div className="blog-post-cover">
          <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="blog-post-cover-image" />
        </div>

        <div className="blog-post-content">
          <p className="blog-post-description">{post.description}</p>

          {post.places.map((place, index) => (
            <div key={index} className="blog-post-place">
              <div className="place-images">
                {place.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="place-image-container">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${place.name} - Image ${imgIndex + 1}`}
                      className="place-image"
                    />
                  </div>
                ))}
              </div>
              <h3 className="place-name">{place.name}</h3>
              <p className="place-description">{place.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPost
