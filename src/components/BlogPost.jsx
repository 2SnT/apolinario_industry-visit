import { useEffect, useRef } from "react"
import "../styles/BlogPost.css"
import { FaArrowLeft, FaCalendarAlt } from "react-icons/fa"

const BlogPost = ({ post, onBack }) => {
  const postRef = useRef(null)

  useEffect(() => {
    // Add scroll reveal effect for elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Select all elements to animate
    if (postRef.current) {
      const elements = postRef.current.querySelectorAll(".animate-on-scroll")
      elements.forEach((el) => observer.observe(el))
    }

    return () => {
      if (postRef.current) {
        const elements = postRef.current.querySelectorAll(".animate-on-scroll")
        elements.forEach((el) => observer.unobserve(el))
      }
    }
  }, [post])

  return (
    <div className="blog-post-container" ref={postRef}>
      <div className="blog-header-sticky">
        <div className="blog-header animate-on-scroll">
          <h1 className="blog-main-title">Educational Tour Blog</h1>
        </div>

        <button onClick={onBack} className="back-button animate-on-scroll">
          <FaArrowLeft size={16} className="back-icon" />
          Back to posts
        </button>
      </div>

      <div className="blog-post">
        <h2 className="blog-post-title animate-on-scroll">{post.title}</h2>

        <div className="blog-post-date animate-on-scroll">
          <FaCalendarAlt size={16} className="date-icon" />
          <span>{post.date}</span>
        </div>

        <div className="blog-post-cover animate-on-scroll">
          <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="blog-post-cover-image" />
        </div>

        <div className="blog-post-content">
          <p className="blog-post-description animate-on-scroll">{post.description}</p>

          {post.places.map((place, index) => (
            <div key={index} className="blog-post-place">
              <div className="place-images">
                {place.images.map((image, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="place-image-container animate-on-scroll"
                    style={{ animationDelay: `${0.2 * imgIndex}s` }}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${place.name} - Image ${imgIndex + 1}`}
                      className="place-image"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <h3 className="place-name animate-on-scroll">{place.name}</h3>
              <p className="place-description animate-on-scroll">{place.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPost
