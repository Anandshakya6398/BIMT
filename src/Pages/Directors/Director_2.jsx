import React from "react";
import Image from "../../assets/building_2.jpg";
import "../ChairPersons/ChairPersons-Directors-Controller.css";
import Director2 from "../../assets/Directors/Director2.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Director_2 = () => {
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
             Meet Our Director:-
            </h3>
            <p className="hero-name">Mr. Ashish Singhal</p>
          </div>
        </div>
      </div>
      <div className="chairperson-section director">
        <div className="chairperson-img director-img">
          <img src={Director2} alt="" className=""/>
        </div>
        <div className="chairperson-content">
            <h3 className="chairperson-title">Message from Director</h3>
            <h2 className="chairperson-name">Mr. Ashish Singhal</h2>
          <p>
          We are in the midst of a revolution, the nation is basking in the glory of a new proud generation that is taking the world by storm. the entire intellectual commodity of the world has woken up to the reality that BIMT is a treasure house of talent and intelligence, the youth of today are taking budaun unparalleled heights of prosperity. I assured the students joining BIMT, that they will be given the best education to enable them to learn and lead the future with confidence as responsible citizens of the country.
          </p>
          <br />
          <p>
          हम पृथ्वी पर एक विशेष राष्ट्र में नई गर्वित पीढ़ी की महिमा का आनंद ले रहे है जो तूफान की तरह तेजी से आसमान की ओर ले जा रही है। आज की युवा पीढ़ी भी इस वास्तविकता से जाग गई है कि बी.आई.एम.टी. में प्रतिभा और बुद्धि का खजाना है। आज के युवा बदायूं को समृद्धि की बेमिसाल ऊंचाईयों पर ले जा रहे हैं। मैंने बी.आई.एम.टी. में शामिल होने वाले छात्रों को आश्वासन दिया कि उन्हें देश के जिम्मेदार नागरिकों के रूप में आत्मविश्वास के साथ सीखने और भविष्य का नेतृत्व करने में सक्षम बनाने के लिए उन्हें सर्वोत्तम शिक्षा दी जाएगी।
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Director_2;