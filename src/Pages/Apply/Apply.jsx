import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Fee from "../assets/FeeStructure_2024-25.png";
import "./apply.css";
import { motion } from "framer-motion";
const Apply = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ID", "template_ID", form.current, {
        publicKey: "",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="contact-container">
        <h2 className="admission-heading">Admission Open For 2025-26</h2>
        <p className="admission-subheading">
          Secure your future with world-class education and industry-aligned
          courses.
        </p>

        <motion.div className="info-form-grid">
          <div className="info-box">
            <h2 className="info-heading">Why Choose BIMT College?</h2>
            <div className="info-points">
              <div className="info-point">
                <h3>Industry-Integrated Learning</h3>
                <p>
                  Partnerships with leading companies ensure practical, relevant
                  education.
                </p>
              </div>
              <div className="info-point">
                <h3>World-Class Infrastructure</h3>
                <p>
                  State-of-the-art facilities and modern learning environments.
                </p>
              </div>
              <div className="info-point">
                <h3>Expert Faculty</h3>
                <p>
                  Learn from experienced professors and industry professionals.
                </p>
              </div>
              <div className="info-point">
                <h3>Career Support</h3>
                <p>
                  Dedicated placement cell and industry connections for better
                  opportunities.
                </p>
              </div>
            </div>

            <div className="contact-details">
              <h3>Contact Information</h3>
              <p>
                <strong>Address:</strong> Kakrala Road, Budaun, India
              </p>
              <p>
                <strong>Email:</strong> contact@bimtcollege.com
              </p>
              <p>
                <strong>Phone:</strong> +123 456 7890
              </p>
            </div>
          </div>

          <motion.div
            className="form-box"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <form ref={form} onSubmit={sendEmail} className="admission-form">
              <h2 className="form-title">Admission Query</h2>

              <label>Name *</label>
              <input required type="text" name="from_name" />

              <label>Email *</label>
              <input required type="email" name="from_email" />

              <label>Phone *</label>
              <input required type="tel" name="phone" />

              <label>Course</label>
              <input required type="text" name="course" />

              <label>Message</label>
              <textarea required name="message" />

              <motion.input
                type="submit"
                value="Send"
                className="submit-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
              {isSubmitted && (
                <p className="submitted-msg">Form successfully submitted!</p>
              )}
            </form>
          </motion.div>
        </motion.div>

        <div className="fee-structure">
          <h2 className="fee-title">Fee Structure</h2>
          <img src={Fee} alt="Fee Structure" className="fee-image" />
        </div>
      </div>
    </>
  );
};

export default Apply;
