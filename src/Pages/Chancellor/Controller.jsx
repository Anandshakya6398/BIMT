import React from "react";
import Image from "../../assets/building_2.jpg";
import "../ChairPersons/ChairPersons-Directors-Controller.css";
import Controller1 from "../../assets/Chancellor/Controller.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Controller = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div>
        <div className="hero-sec ">
          {/* Background Image */}
          <div className="hero-bg" style={{ backgroundImage: `url(${Image})` }}>
            <div className="hero-ov"></div>
          </div>

          {/* Content */}
          <div className="hero-cont">
            <h3 className="hero-tit">Meet Our Vice Chancellor</h3>
            <p className="hero-name">Mr. K.P. Singh</p>
          </div>
        </div>
      </div>
      <div className="chairperson-section director">
        <div className="chairperson-img director-img">
          <img src={Controller1} alt="" className="" />
        </div>
        <div className="chairperson-content">
          <h3 className="chairperson-title">Message from Vice Chancellor</h3>
          <h2 className="chairperson-name">Mr. K.P. Singh</h2>
          <p>
            The aim of education is to acquire knowledge, not only of facts, but
            of values... as we move towards becoming a developed nation, the
            role of youth of the country, becomes increasingly important. We
            wish to be a cutting-edge university, to anticipate the needs of the
            future and meet them here and to create a physical environment that
            supports teaching, learning and research. We realize that the rapid
            pace of development in the country has raised the expectations of
            the people from the institutions of higher learning.
          </p>
          <br />
          <p>
            The Mahatma Jyotiba Phule Rohilkhand University is making efforts to
            rise to the level of a world class institution to create new
            horizons in the arena of technical education and research.
            Curriculum Innovation is addressed as the top most priority by the
            University to make the courses industry and research oriented. The
            young dedicated and qualified faculty members are waiting to receive
            and lead you towards and excellent academic career for your better
            tomorrow.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Controller;
