import React from "react";
import Image from "../../assets/building_2.jpg";
import { FaUserGraduate, FaUsers, FaIndustry } from "react-icons/fa";
import Arvind from '../../assets/Teachers/Arvindsir.png'
import Manoj from "../../assets/Teachers/Manojsir.png";
import Sourav from "../../assets/Teachers/Souravsir.png";
import Shivam from "../../assets/Teachers/W2.png";
import Suryansh from "../../assets/Teachers/W4.png";
import WM1 from "../../assets/Teachers/Wm1.png";
import WM2 from "../../assets/Teachers/Wm2.png";
import WM3 from "../../assets/Teachers/Wm3.png";
import WM4 from "../../assets/Teachers/Wm4.png";
import "./Faculties.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Faculties = () => {
  return (
    <div>
        <Navbar />
        <Header />
        <div className="hero-section">
      {/* Background Image */}
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">Shape Your Future</h1>
        <p className="hero-subtitle">
          Discover 90+ programs across our world-class faculties
        </p>

        {/* Stats Section */}
        <div className="stats-container">
          <div className="stat-box">
            <FaUserGraduate className="stat-icon" />
            <div>
              <p className="stat-number">50+</p>
              <p className="stat-label">Experts</p>
            </div>
          </div>
          <div className="stat-box">
            <FaUsers className="stat-icon" />
            <div>
              <p className="stat-number">15,000+</p>
              <p className="stat-label">Students Enrolled</p>
            </div>
          </div>
          <div className="stat-box">
            <FaIndustry className="stat-icon" />
            <div>
              <p className="stat-number">50+</p>
              <p className="stat-label">Industry Collaborations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
<div className="faculty-section">

      <h2 className="faculty-heading">Faculty Members</h2>
      <div className="faculty-grid">
        {[  { img: Arvind, name: "Mr. Arvind Gupta", title: "Asst. Professor", desc: "(Dept. of Computer Science)" },
          { img: Manoj, name: "Mr. Manoj", title: "Asst. Professor", desc: "(Dept. of Computer Science)" },
          { img: Shivam, name: "Mr. Shivam", title: "Asst. Professor", desc: "(Dept. of Computer Science)" },
          { img: Sourav, name: "Mr. Saurabh Saxena", title: "Asst. Professor", desc: "(Dept. of Commerce & Mgmt.)"  },
          { img: Suryansh, name: "Mr. Suryansh Rastogi",title: "Asst. Professor", desc:  "(Dept. of Commerce & Mgmt.)" },
          { img: WM1, name: "Mrs. Deepasna",title: "Asst. Professor", desc: "(Dept. of Home Science)"  },
          { img: WM2, name: "Mrs. Shreyasi Mishra",title: "Asst. Professor", desc: "(Dept. of Home Science)" },
          { img: WM3, name: "Mrs. Ritika Pant",title: "Asst. Professor", desc: "(Dept. of Botany)" },
          { img: WM4, name: "Miss." },
        ].map((faculty, index) => (
          <div key={index} className="faculty-card">
            <img src={faculty.img} alt={faculty.name} className="faculty-img" />
            <p className="faculty-name">{faculty.name}</p>
            <p className="faculty-title">{faculty.title}</p>
            <p className="faculty-desc">{faculty.desc}</p>
          </div>
        ))}
      </div>
</div>
<Footer />
    </div>
  );
};

export default Faculties;