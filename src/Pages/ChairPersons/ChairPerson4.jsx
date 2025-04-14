
import React from "react";
import Image from "../../assets/building_2.jpg";
import "./ChairPersons-Directors-Controller.css";
import Chairperson4 from "../../assets/ChairPersons/ChairPerson4.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ChairPerson4 = () => {
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
             Meet Our Chairperson:-
            </h3>
            <p className="hero-name">Shri Sushil Arora</p>
          </div>
        </div>
      </div>
      <div className="chairperson-section">
        <div className="chairperson-img">
          <img src={Chairperson4} alt="" className="bg-transparent"/>
        </div>
        <div className="chairperson-content">
            <h3 className="chairperson-title">Message from Chairperson</h3>
            <h2 className="chairperson-name">Shri Sushil Arora</h2>
          <p>
            "Dear Students, Your commitment to learning inspires us. Let's strive fore excellence together, creating a legacy of knowlodge and innovation. Keep soaring!"
            </p>
          <br />
          <p>
            "प्रिय छात्रों, आपकी अध्ययन के प्रति प्रतिबद्धता हमें प्रेरित करती है। चलो उत्कृष्टता की ओर साथ मिलकर प्रयास करें, ज्ञान और नवाचार की एक विरासत बनाते हुए। आगे बढ़ते रहें!"
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChairPerson4;