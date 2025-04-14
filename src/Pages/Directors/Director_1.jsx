import React from "react";
import Image from "../../assets/building_2.jpg";
import "../ChairPersons/ChairPersons-Directors-Controller.css";
import Director1 from "../../assets/Directors/Director1.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Director_1 = () => {
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
            <h3 className="hero-tit">
             Meet Our Executive Director:-
            </h3>
            <p className="hero-name">Mr. Akshaj Rastogi</p>
          </div>
        </div>
      </div>
      <div className="chairperson-section director">
        <div className="chairperson-img director-img">
          <img src={Director1} alt="" className=""/>
        </div>
        <div className="chairperson-content">
            <h3 className="chairperson-title">Message from Director</h3>
            <h2 className="chairperson-name">Mr. Akshaj Rastogi</h2>
          <p>
            "Dear Students, Your dedication inspires us! Keep striving for excellence Remember, every challenge is an opportunity to grow. Best wishes!"
          </p>
          <br />
          <p>
            "प्रिय छात्रों, आपकी प्रतिबद्धता हमें प्रेरित करती है! उत्कृष्टता की ओर प्रयास करते रहें। याद रखें, हर चुनौती विकसित होने का एक अवसर है। शुभकामनाएँ!"
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Director_1;