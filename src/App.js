import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Link } from 'react-scroll';
import ScrollToTopButton from './components/ScrollToTopButton';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomeSection  from './components/HomeSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import Skills from './components/Skills';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProficiencySection from './components/ProficiencySection';
import OfferSection from './components/OfferSection';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [isNightMode, setIsNightMode] = useState(false);
  const [showImage, setShowImage] = useState(true);

  const toggleMode = () => {
    setIsNightMode(!isNightMode);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 3000); // Set to 3000 for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (

<div className={isNightMode ? 'night-mode' : 'day-mode'}>

<div className="App">

    {/* Image display logic */}
     {showImage ? (
          <div className="image-container">
            <img src={require("./assets/images/download12.png")} alt="Loading..." style={{ width: '47%', height: '50%' }} />
          </div>
        ) : (
          <>

        <nav>
        {/* <img
                alt="mmmmmm"
                src={require("./assets/images/moiz_nav_logo.png")}
              ></img> */}
          <span>
          
            </span>
          <ul>
           

          <li><Link className="nav-link" to="home" smooth={true} duration={500}>Introduction</Link></li>
          <li><Link className="nav-link" to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link className="nav-link" to="experience" smooth={true} duration={500}>Work Experience</Link></li>
          <li><Link className="nav-link" to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link className="nav-link" to="contact" smooth={true} duration={500}>Contact</Link></li>

          <li>
            <label className="switch">
              <input type="checkbox" onChange={toggleMode} checked={isNightMode} />
              <span className="slider round"></span>
            </label>
          </li>
          </ul>
        </nav>

        <div id="home">
        <HomeSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>

      <div id="">
        <OfferSection />
      </div>


      <div id="">
        <ProficiencySection />
      </div>



      <div id="">
        <EducationSection />
      </div>
      
      
      
      <div id="experience">
        <ExperienceSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      
      <div id="contact">
        <ContactSection />
      </div>

      <ScrollToTopButton />

      </>
      )}
</div>
</div>
  );
}

export default App;
