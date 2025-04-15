import React, { useState, useRef, useEffect } from "react";
import "./Header.css";
import Burger from "../../assets/Burger.png";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isOpenTo, setIsOpenTo] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpenTo(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpenTo(!isOpenTo);

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to='/'><img src={assets.logo} alt="" className="header-logo" /></Link>
        </div>
        {/* <img src={Burger} alt="" className='burger'/> */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {/* <span></span>
          <span></span>
          <span></span> */}
          <img src={Burger} alt="" className="burgerImg" />
        </div>
        <div className={`links ${isOpen ? "active" : ""}`}>
          <Link className="link active" to="/">
            <i className="fa-solid fa-house"></i>Home
          </Link>
          <Link className="link active" to="/about">
            About-us
          </Link>
          {/* <Link className='link active' >Administration</Link> */}
          <Link className="link active" to="/contact">
            Contact
          </Link>
          <Link className="link active" to='/courses'>Courses</Link>
          <Link className="link active" to='/faculties'>Faculty</Link>
          <Link className="link active">
            {/* DropDown */}
            <div className="dropdown-container" ref={dropdownRef}>
              <button className="dropdown-btn" onClick={toggleDropdown}>
                Administration ▼
              </button>

              {isOpenTo && (
                <div className="dropdown-menu">
                  <div className="dropdown-section">
                    <h4>Chairperson</h4>
                    <ul>
                      <Link className="link active" to='/chairperson1'>Smt. Sudesh Ahuja</Link><br />
                      <Link className="link active" to='/chairperson2'>Shri Brij Bhusan Singhal</Link><br />
                      <Link className="link active" to='/chairperson3'>Shri Mukesh Rastogi</Link><br />
                      <Link className="link active" to='/chairperson4'>Shri Sushil Arora</Link><br />
                    </ul>
                  </div>

                  <div className="dropdown-section">
                    <h4>Directors</h4>
                    <ul>
                      <Link className="link active" to='/director1'>Akshaj Rastogi</Link> <br />
                      <Link className="link active" to='/director2'>Ashish Singhal</Link> <br />
                      <Link className="link active" to='/director3'>Vikas Ahuja</Link> <br />
                    </ul>
                  </div>

                  <div className="dropdown-section">
                    <h4>Controller</h4>
                    <ul>
                      <Link className="link active" to='/controller'>Prof. K.P. Singh</Link>
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </Link>
          <Link
            id="apply-btn"
            onClick={() => {
              document
                .getElementById("")
                .scrollIntoView({ behavior: "smooth" });
            }}
            to='/apply'
          >
            Apply Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
