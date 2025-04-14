import React, { useState, useEffect } from "react";
import './Home.css'
import { assets } from '../../assets/assets'
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";



const blogs = [
  {
    title: "Commerce & Management",
    description: "Unleash creativity and critical thinking through diverse disciplines in literature, psychology, and media.",
    image: `${assets.program1}`,
  },
  {
    title: "Science Related Programs",
    description: "Preserving ancient healing wisdom through Ayurveda, Yoga, and naturopathy.",
    image: `${assets.program2}`,
  },
  {
    title: "Engineering & AI Machine Learning",
    description: "Explore the wonders of science with cutting-edge programs in physics, chemistry, and biotechnology.",
    image: `${assets.program3}`,
  },
  {
    title:"Arts Related Science",
    description: "Explore the wonders of science with cutting-edge programs in physics, chemistry, and biotechnology.",
    image: `${assets.program4}`,
  },
  {
    title:"Humanity & Education",
    description: "Explore the wonders of science with cutting-edge programs in physics, chemistry, and biotechnology.",
    image: `${assets.program5}`,
  }
];



const programsData = [
  {
    id: 1,
    title: "Undergraduate Programmes",
    icon: "🎓",
    courses: ["Business Administration", "Engineering", "Design"],
  },
  {
    id: 2,
    title: "Postgraduate Programmes",
    icon: "📖",
    courses: ["Business Administration", "Engineering", "Design"],
  },
  {
    id: 3,
    title: "Enginnering Programmes",
    icon: "🏅",
    courses: ["Economics", "Engineering & Technology", "Sciences"],
  },
];



const Home = () => {

// ImageSlider JavaScript

  const images = [
    `${assets.slider1}`,
    `${assets.Slider2}`,
    `${assets.Slider3}`,
    `${assets.Slider4}`,
    `${assets.Slider5}`
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);


  //   StudentCounter JavaScript

  const [studentCount, setStudentCount] = useState(100); // Initial value 100
    const [teacherCount, setTeacherCount] = useState(1); // Initial value 1
    const [placementCount, setPlacementCount] = useState(1);// Initial value 100
    const [industryCount, setIndustryCount] = useState(1);// Initial value 100
    const duration = 10; // 1 seconds
    const endValue = 5000;
    const steps = 60; // Number of updates in 2 seconds

    useEffect(() => {

        // Student Record
        const increment = (endValue - 100) / steps; // Calculate step size
        let current = 100;
    
        const studentInterval = setInterval(() => {
          current += increment;
          if (current >= endValue) {
            setStudentCount(endValue);
            clearInterval(studentInterval);
          } else {
            setStudentCount(Math.round(current));
          }
        }, duration / steps);

        // TeacherRecord
        if (teacherCount<100) {
            const teacherInterval = setInterval(() => {
                setTeacherCount((prev) => prev + 1);
              }, 10);
              return() =>  clearInterval(teacherInterval);
        }

        // Placement Record
        if (placementCount < 910) {
            const placementInterval = setInterval(() => {
              setPlacementCount((prev) => prev + 10);
            }, 10);
      
            return () => clearInterval(placementInterval);
          }

        // Industry Record
        if (industryCount < 150) {
            const industryInterval = setInterval(() => {
              setIndustryCount((prev) => prev + 1);
            }, 10);
      
            return () => clearInterval(industryInterval);
          }
       

        return () => {
            clearInterval(studentInterval)
        }
    }, [teacherCount, placementCount, industryCount]);
  
    

   
    
      const [startIndex, setStartIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setStartIndex((prevIndex) => (prevIndex + 1) % blogs.length);
        }, 3000); // Change every 3s
    
        return () => clearInterval(interval);
      }, []);
    
      const getVisibleBlogs = () => {
        let visible = [];
        for (let i = 0; i < 3; i++) {
          visible.push(blogs[(startIndex + i) % blogs.length]); // Circular Logic
        }
        return visible;
      };


      // Intitute JavaScript

       const [visible, setVisible] = useState([]);
      
          useEffect(() => {
            const timers = [];
            for (let i = 0; i < 5; i++) {
              timers.push(
                setTimeout(() => {
                  setVisible((prev) => [...prev, i]);
                }, i * 800) // Har box 0.6s ke delay se appear hoga (total ~3s)
              );
            }
            return () => timers.forEach((t) => clearTimeout(t));
          }, []);
        
          const features = [
            { title: "NEP 2020-aligned curriculum", subtitle: "Future-proof education", className: "box1" },
            { title: "Industry-Driven Courses", subtitle: "& certifications", className: "box2" },
            { title: "AI-integrated learning", subtitle: "for job-ready graduates", className: "box3" },
            { title: "Cutting-Edge Labs", subtitle: "& innovation hubs", className: "box4" },
            { title: "Top Recruiters", subtitle: "& placement support", className: "box5" },
          ];
        
    


  return (
    <div className='home'>
      <Navbar />
      <Header />

      {/* <ImageSlider/> */}

      <div className="imageSlider">
      <div className="slider">
        {/* <button className="prev" onClick={goToPrevious}>
          &#10094;
        </button> */}

        <img src={images[currentIndex]} alt="Slider" className="sliderImage" />

        {/* <button className="next" onClick={goToNext}>
          &#10095;
        </button> */}
      </div>
      {/* <div className="sidebar">
        <div className="icons">
          <i className="fa-solid fa-phone-volume"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-solid fa-location-dot"></i>
        </div>
      </div> */}
    </div>
      {/* <StudentCounter /> */}
      <div className='studentCounter'>
        <div className="Record">
            <h1 className='counting'>{studentCount}+</h1>
            <p className='title_Record'>Student Enrolled</p>
        </div>
        <div className="Record">
            <h1 className='counting'>{teacherCount}+</h1>
            <p className='title_Record'>Experienced Faculty Members,</p>
        </div>
        <div className="Record">
            <h1 className='counting'>{placementCount}+</h1>
            <p className='title_Record'>Campus Placements</p>
        </div>
        <div className="Record">
            <h1 className='counting'>{industryCount}+</h1>
            <p className='title_Record'>Industries Collabs.</p>
        </div>
    </div>

      {/* <AboutSection /> */}

      <div className="aboutSection">
      <div className="titleBimt">
        <div className="textBimt">
          <h2 className="mainHeading">About  BIMT  Institute</h2>
          <p className="mainPara"><i>
            "Innovation, Research & Transformation - Shaping the Future of
            Education"</i>
          </p>
          <p className="aboutPara">
            <span className="bold">BIMT INSTITUTE </span> was established in 2009, with the <span className="bold"> intention
              to provide the right guidance </span> to students who are career minded and ambitious.
             <span className="bold"> right from its inception, BIMT had an obsession with quality which </span> till today is the  <span className="bold">cutting-edge technology,
             hallmark of the institute. </span> The interest of students is given top priority and counselling is taken up to help students identity their interests.
          </p>
          <button className="readBtn">Read More &rarr;</button>
        </div>
        <div className="vision">
          <div className="visionHeading">
            <p className="heading">Vision</p>
          </div>
          <div className="box">
            <div className="visionTop">
            <p className="visionHead">Our Vision</p>
            <p className="para1">Pioneering the BIMT of Education</p>
            </div>
            <p className="para2">
              <span className="bold">BIMT INSTITUTE</span> provides students with quality educational 
              experiences and supports services that lead to the successfull completion of degrees, transfer 
              certificates and basic skills proficiency. Through measurable learning outcomes , ethical data driver decisions 
              and students achievement.
            </p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={assets.admin} alt="" className="mainImg" />
      </div>
    </div>

      {/* <Programs /> */}
      <div className='programs'>
      <div className="programs-container1">
      <h2 className="programs-title">Programs</h2>
      <p className="programs-subtitle">
        Explore. Excel. Evolve.- Programs Designed for BIMT Leaders!
      </p>
    </div>

     {/* Programs in College */}
     <div className="program-blog-container">
      <div className="program-blog-section">
        {getVisibleBlogs().map((blog, index) => (
          <div key={index} className="program-blog-card">
            <div className="program-blog-image">
              <img src={blog.image} alt={blog.title} />
              <div className="program-overlay">
                <h3>{blog.title}</h3>
              </div>
            </div>
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="pagination">
        {blogs.map((_, index) => (
          <span key={index} className={`dot ${index === startIndex ? "active" : ""}`}></span>
        ))}
      </div>
    </div>
    </div>
      
      {/* <ExploreCampus /> */}

      <div className='exploreCampus'>

        {/* ExploreCampus */}
      <div className="campus-container">
      <div className="campus-content">
        <h2 className="campus-title">
          <span className="highlight">Explore</span> Our Campus
        </h2>
        <p className="campus-description">
          Discover our 20-acre state-of-the-art campus featuring cutting-edge
          facilities, green spaces, and innovative learning environments
          designed to inspire creativity and collaboration.
        </p>

        <div className="facilities">
          <div className="facility-card">
            <span className="icon">⭐</span> Smart Classrooms
          </div>
          <div className="facility-card">
            <span className="icon">⭐</span> Research Labs
          </div>
          <div className="facility-card">
            <span className="icon">⭐</span> Sports Complex
          </div>
          <div className="facility-card">
            <span className="icon">⭐</span> Student Housing
          </div>
        </div>
      </div>

      <div className="campus-video">
        <iframe
          width="100%"
          height="250"
          src="https://www.youtube.com/embed/8necRkCzyjI?si=Vem09sgAGSLGSSsz"
          title="Campus Tour"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
    </div>

      {/* <Academic /> */}

      <div className='academicPrograms'>
       <section className="academic-section">
      <h2 className="title">Academic Programs</h2>
      <p className="description">
        Explore our diverse range of academic offerings designed to shape future leaders
      </p>
    </section>

    {/* Program Blogs */}

    <div className="programs-container">
      {programsData.map((program) => (
        <div key={program.id} className="program-card">
          <div className="icon">{program.icon}</div>
          <h3 className="program-title">{program.title}</h3>
          <ul className="program-list">
            {program.courses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
          <a href="#" className="explore-link">
            Explore Programs →
          </a>
        </div>
      ))}
    </div>
    </div>

      {/* <Recruiter /> */}

       <div className='recruiter'>
            <section className="recruiters-container">
            <h2 className="recruiters-title">Our Top Recruiters</h2>
            <p className="recruiters-text">
              We collaborate with top companies across various industries to provide the best career opportunities for our students. 
              Our graduates have successfully joined leading global organizations.
            </p>
            <p className="recruiters-text">
              Our alumni work at companies like <strong>KIA, Hyundai, Reliance, Berger, DLF</strong>, and many more.
            </p>
            <p className="recruiters-text">Start your journey with us and become a part of a thriving professional network!</p>
          </section>
      
          {/* Company Images */}
      
          <div className="recruiters-marquee">
            <div className="marquee-content">
              <img src={assets.rlogo1} alt="logo1" />
              <img src={assets.rlogo2} alt="logo2" />
              <img src={assets.rlogo3} alt="logo3" />
              <img src={assets.rlogo4} alt="logo4" />
              <img src={assets.rlogo5} alt="logo5" />
              <img src={assets.rlogo6} alt="logo6" />
              <img src={assets.rlogo7} alt="logo7" />
              <img src={assets.rlogo8} alt="logo8" />
              <img src={assets.rlogo9} alt="logo9" />
              <img src={assets.rlogo10} alt="logo10" />
              <img src={assets.rlogo11} alt="logo11" />
              <img src={assets.rlogo12} alt="logo12" />
            </div>
          </div>
          </div>

      {/* <InstituteAd /> */}
  <div className='IntituteAd'>
        <div className="banner">
      <h2>
        <span className="italic">Why Choose</span>{" "}
        <span className="bold">BIMT INSTITUTE</span>?
      </h2>
    </div>

    {/*  Options to Choosing College */}
    <div className="features-container">
      <div className="background"></div>
      <div className="image-container">
        <img src={assets.Student} alt="Student" />
      </div>
      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className={`feature-box ${feature.className} ${visible.includes(index) ? "visible" : ""}`}>
            <strong>{feature.title}</strong>
            <p>{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

    <Footer />

      {/* <Menu /> */}

    </div>
  )
}

export default Home
