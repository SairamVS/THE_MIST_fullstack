import { Link } from 'react-router-dom';
import '/src/assets/css/Footer.css'; 
import { Facebook, Twitter, Instagram} from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/plan">Plan Your Event</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook/></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter/></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram/></a>
          </div>
        </div>
        <div className="footer-contact">
          <h4>Get In Touch</h4>
          <p>Email: contact@nexaglow.com</p>
          <p>Phone: +91 7598936500</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
