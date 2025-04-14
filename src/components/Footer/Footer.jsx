import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <>
      {" "}
      <div className="footer">
        <div className="footer-section1">
          <h3>Act, Statutes, and Ordinances</h3>
          <ul>
            <li>Anti Ragging Committee</li>
            <li>ICC</li>
            <li>HR Manual</li>
            <li>Proctorial Board</li>
            <li>Annual Reports</li>
          </ul>
        </div>
        <div className="footer-section1">
          <h3>Programs</h3>
          <ul>
            <li>Doctoral Programs</li>
            <li>Post Graduate Programs</li>
            <li>Under Graduate Programs</li>
          </ul>
        </div>
        <div className="footer-section1">
          <h3>Admission Process</h3>
          <ul>
            <li>Fee Structure</li>
            <li>Scholarships</li>
            <li>Hostel Fee</li>
            <li>Transport Fee</li>
            <li>Application Form</li>
            <li>Education Loan</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Payment Policies</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-section1">
          <h3>How We Teach</h3>
          <ul>
            <li>Live Projects</li>
            <li>Industry Immersion</li>
            <li>Interdisciplinary Minors</li>
            <li>Curriculum Innovations</li>
            <li>Assessment And Evaluation</li>
            <li>Mentoring & Advising</li>
            <li>Internal Quality Assurance Cell (IQAC)</li>
          </ul>
        </div>
      </div>
      <footer className="footer-container">
        <div className="footer-content">
          {/* Left Section: Contact Info */}
          <div className="contact-section">
            <img
              src={assets.logo}
              alt="BIMT Institute"
              className="footer-logo"
            />
            <h3 className="footer-title">Connect With Us</h3>
            <p className="footer-text">
              <strong>BIMT Institute</strong> <br />
              Badaun To Kakrala Road <br />
              Near Mother Anthena School, Badaun <br />
              Uttar Pradesh 243601 <br />
              <span>+91-9897777709, +91-9897777797</span> <br />
              <a
                href="mailto:admissions@futureuniversity.in"
                className="admissionLink"
              >
                admissions@bimtbadaun.in
              </a>
            </p>
          </div>

          {/* Center Section: Social Media */}
          <div className="footer-social-media">
            <h3 className="footer-title">Follow Us</h3>
            <div className="footer-social-icons">
              <a
                href="https://www.facebook.com/BIMTcollegebudaun/"
                target="blank"
                className="footer-social-icon"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/b.i.m.t._badaun/"
                target="blank"
                className="footer-social-icon"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/school/budaun-institute-of-management-&-technology/about/"
                target="blank"
                className="footer-social-icon"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.youtube.com/@bimtlivenow1229"
                target="blank"
                className="footer-social-icon"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Right Section: Map */}
          <div className="map-section">
            <h3 className="footer-title">View in Map</h3>
            <iframe
              title="BIMT Institute Location"
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.6977856757553!2d79.14649487433559!3d28.003141176014314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39754365082f1d8d%3A0x60c074a43f991681!2sBadaun%20Institute%20Of%20Management%20%26Technology%20(BIMT)!5e0!3m2!1sen!2sin!4v1733980652555!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p>
            © 2025 All rights reserved. Developed by{" "}
            <span className="developer-name">Anand & Praveen </span>.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
