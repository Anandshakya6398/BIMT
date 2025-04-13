
import React from "react";
import Image from "../../assets/building_2.jpg";
import "./ChairPersons.css";
import Chairperson1 from "../../assets/ChairPersons/ChairPerson1.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ChairPerson1 = () => {
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
            <h1 className="hero-tit">
             Meet Our Chairperson:
            </h1>
            <p className="hero-name">Shri Mukesh Rastogi</p>
          </div>
        </div>
      </div>
      <div className="chairperson-section">
        <div className="chairperson-img">
          <img src={Chairperson1} alt="" className=""/>
        </div>
        <div className="chairperson-content">
            <h1 className="chairperson-title">Message from Chairperson</h1>
            <h2 className="chairperson-name">Shri Mukesh Rastogi</h2>
          <p>
            "Dear Students, as your chairperson, I'm proud of your dedication.
            Let's embrace challenges, faster growth, and make our college
            community even stronger. Forward together!"
          </p>
          <br />
          <p>
            "प्रिय छात्रों, आपके अध्यक्ष के रूप में, मुझे आपके समर्पण पर गर्व
            है। आइए चुनौतियों को स्वीकार करें, तेजी से विकास करें, और अपने कॉलेज
            समुदाय को और भी मजबूत बनाएं। एक साथ आगे बढ़ें!"
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChairPerson1;