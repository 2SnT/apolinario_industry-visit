import { FaFacebook, FaInstagram } from 'react-icons/fa';  // Social Icons
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';  // Contact Icons
import { SiGithub, SiLinkedin } from 'react-icons/si';  // GitHub and LinkedIn Icons
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-heading">Educational Tour</h3>
            <p className="footer-text">
            A memorable journey through Manila — exploring diverse industries, rich culture, and timeless landmarks during our educational tour.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact</h3>
            <ul className="contact-list">
              <li className="contact-item">
                {/* <a href="mailto:shayneapolinario35@gmail.com" className="contact-link"> */}
                  <FiMail size={16} className="contact-icon" />
                  shayneapolinario35@gmail.com
                {/* </a> */}
              </li>
              <li className="contact-item">
                <FiPhone size={16} className="contact-icon" />
                09972988300
              </li>
              <li className="contact-item">
                <FiMapPin size={16} className="contact-icon" />
                Zamboanga City, Philippines
              </li>
            </ul>
            {/* <h3 className="footer-heading">Follow Me</h3> */}
            <div className="social-links">
              <a href="https://github.com/2SnT" target="_blank" className="social-link" rel="noopener noreferrer">
                <SiGithub size={20} />
              </a>
              <a href="www.linkedin.com/in/shayne-apolinario-732b0b361" target="_blank" className="social-link" rel="noopener noreferrer">
                <SiLinkedin size={20} />
              </a>
              <a href="https://www.facebook.com/share/198dGsgU99/" target="_blank" className="social-link" rel="noopener noreferrer">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/shayneapolinario_16?igsh=MWlzNXZ3emQxemNwdA==" target="_blank" className="social-link" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Educational Tour. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
