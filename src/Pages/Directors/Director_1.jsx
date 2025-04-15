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
          Welcome to our esteemed degree college, where academic excellence meets holistic growth. As the Director, I am thrilled to embark on this journey with you. At our institution, we prioritize not just imparting knowledge, but also nurturing critical thinking, creativity, and leadership skills. Together, let's create an environment where every student can thrive and become future leaders in their chosen fields. Here's to an inspiring and rewarding academic experience ahead!"
          </p>
          <br />
          <p>
          हमारे प्रतिष्ठित डिग्री कॉलेज में आपका स्वागत है, जहां अकादमिक उत्कृष्टता समग्र विकास को पूरा करती है। निदेशक के रूप में, मैं आपके साथ इस यात्रा को शुरू करने के लिए रोमांचित हूं। हमारे संस्थान में, हम न केवल ज्ञान प्रदान करने को प्राथमिकता देते हैं, बल्कि महत्वपूर्ण सोच, रचनात्मकता और पोषण को भी बढ़ावा देते हैं। नेतृत्व कौशल, आइए मिलकर एक ऐसा वातावरण बनाएं जहां हर छात्र आगे बढ़ सके और अपने चुने हुए क्षेत्रों में भविष्य का नेता बन सके।
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Director_1;