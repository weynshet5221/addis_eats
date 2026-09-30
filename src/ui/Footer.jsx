import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Clock
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <Link to="/" className="footer-logo">
            Addis <span>Eats</span>
          </Link>

          <p>
            Delicious Ethiopian food and more,
            delivered right to your door.
          </p>

          <div className="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="YouTube">YouTube</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <p>
            <MapPin size={15} />
            Addis Ababa, Ethiopia
          </p>

          <p>
            <Phone size={15} />
            +251 911 123 456
          </p>

          <p>
            <Mail size={15} />
            info@addiseats.com
          </p>
        </div>

        <div className="footer-column">
          <h3>Opening Hours</h3>

          <p>
            <Clock size={15} />
            Monday - Sunday
          </p>

          <p>2:00 AM - 2:00 PM</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Addis Eats. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;