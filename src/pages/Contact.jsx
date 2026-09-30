import {
  MapPin,
  Phone,
  Mail,
  Clock
} from "lucide-react";

function Contact() {
  return (
    <section className="contact-page">

      <div className="page-heading">
        <span>GET IN TOUCH</span>
        <h1>Contact Us</h1>
        <p>
          Have a question? We would love to
          hear from you.
        </p>
      </div>

      <div className="contact-grid">

        <div className="contact-card">
          <MapPin size={24} />
          <h3>Location</h3>
          <p>
            Addis Ababa, Ethiopia
          </p>
        </div>

        <div className="contact-card">
          <Phone size={24} />
          <h3>Phone</h3>
          <p>
            +251 911 123 456
          </p>
        </div>

        <div className="contact-card">
          <Mail size={24} />
          <h3>Email</h3>
          <p>
            info@addiseats.com
          </p>
        </div>

        <div className="contact-card">
          <Clock size={24} />
          <h3>Opening Hours</h3>
          <p>
            10:00 AM - 10:00 PM
          </p>
        </div>

      </div>

    </section>
  );
}

export default Contact;