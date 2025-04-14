import React from "react";
import Image from "../../assets/building_2.jpg";
import "./ChairPersons-Directors-Controller.css";
import Chairperson2 from "../../assets/ChairPersons/ChairPerson2.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ChairPerson2 = () => {
  return (
    <>
    <Navbar />
    <Header />
      <div>
        <div className="hero-sec ">
          {/* Background Image */}
          <div className="hero-bg " style={{ backgroundImage: `url(${Image})` }}>
            <div className="hero-ov"></div>
          </div>

          {/* Content */}
          <div className="hero-cont">
            <h1 className="hero-tit">
             Meet Our Chairperson:-
            </h1>
            <p className="hero-name">Shri Brij Bhusan Singhal</p>
          </div>
        </div>
      </div>
      <div className="chairperson-section">
        <div className="chairperson-img">
          <img src={Chairperson2} alt="" className="bg-transparent"/>
        </div>
        <div className="chairperson-content">
            <h1 className="chairperson-title">Message from Chairperson</h1>
            <h2 className="chairperson-name">Shri Brij Bhusan Singhal</h2>
          <p>
            "Dear Students, your commitment fuels our pride! Stay focused embrace challenges, and seize very opportunity. Your success is our priority Cheers!"
          </p>
          <br />
          <p>
            "प्रिय छात्रों, आपकी प्रतिबद्धता हमारी गर्व को बढ़ाती है! ध्यान केंद्रित रखें, चुनौतियों का सामना करें, और हर अवसर का लाभ उठाएं। आपकी सफलता हमारी प्राथमिकता है।"
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChairPerson2;