import React from "react";
import Image from "../../assets/building_2.jpg";
import "../ChairPersons/ChairPersons-Directors-Controller.css";
import Director2 from "../../assets/Directors/Director3.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Director_3 = () => {
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
            <h3 className="hero-tit">Meet Our Director:-</h3>
            <p className="hero-name">Mr. Vikas Ahuja</p>
          </div>
        </div>
      </div>
      <div className="chairperson-section director">
        <div className="chairperson-img director-img">
          <img src={Director2} alt="" className="" />
        </div>
        <div className="chairperson-content">
          <h3 className="chairperson-title">Message from Director</h3>
          <h2 className="chairperson-name">Mr. Vikas Ahuja</h2>
          <p>
            Education is not just about the subjects that are
            learnt and taught in BIMT. It is a life long exercise that can be
            unbelievably exciting if only we wish to jump on to the train of
            experience, the first for knowledge is not restricted to the child.
            Institute and faculty members must ensure that students have a
            society of enriching experiences develop a child's creativity and
            imagination make students grow up to be productive adult.
          </p>
          <br />
          <p>
            शिक्षा केवल उन विषयों के बारे में नहीं है जो बीआईएमटी में सीखे और
            पढ़ाए जाते हैं। यह एक जीवन भर चलने वाला व्यायाम है जो अविश्वसनीय रूप
            से रोमांचक हो सकता है यदि केवल हम अनुभव की ट्रेन में कूदना चाहते
            हैं। ज्ञान के लिए पहला बच्चे तक ही सीमित नहीं है। संस्थान और संकाय
            सदस्यों को यह सुनिश्चित करना चाहिए कि छात्रों के पास समृद्ध अनुभवों
            का समाज हो, बच्चे की रचनात्मकता और कल्पना विकसित हो, जिससे छात्र
            बड़े होकर उत्पादक वयस्क बन सकें।
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Director_3;
