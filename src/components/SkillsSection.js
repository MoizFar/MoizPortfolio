// src/components/About.js
import React from 'react';
import '../App.css';
import { FaHtml5, FaCss3, FaSass, FaDatabase, FaReact, FaNpm, FaPhp } from 'react-icons/fa';
import { MdDatabase } from 'react-icons/md';

import { SiLaravel, SiCodeigniter } from 'react-icons/si';

import DisplayLottie from './DisplayLottie'; // Adjust the import according to your project structure
import landingPerson from '../assets/lottie/landingPerson.json';
import codingPerson from "../assets/lottie/codingPerson.json";




function SkillsSection() {

  const illustration = {
    animated: true, // Change this based on your condition
};

  return (
    <div className="skills-section">
      
      {/* <div className="skills-container"> */}

      <div className="skills-left">
                {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../assets/images/developerActivity.svg")}
              ></img>
            )}
      </div>


      <div className="skills-right">
      <h2>What I Do</h2>
        <p>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>

        <div className="skills-list">
        <div className="skill-item">

        <FaHtml5 className="skill-icon" />
        <span>HTML5</span>

          </div>

          <div className="skill-item">
            <FaCss3 className="skill-icon" />
            <span>CSS3</span>
          </div>

          {/* <div className="skill-item">
            <FaSass className="skill-icon" />
            <span>Sass</span>
          </div> */}
          <div className="skill-item">
            <FaReact className="skill-icon" />
            <span>ReactJS</span>
          </div>

          <div className="skill-item">
            <FaNpm className="skill-icon" />
            <span>NPM</span>
          </div>
          <div className="skill-item">
            <FaDatabase className="skill-icon" />
            <span>MySQL</span>
          </div>
          <div className="skill-item">
            <FaPhp className="skill-icon" />
            <span>PHP</span>
          </div>
          <div className="skill-item">
            <SiLaravel className="skill-icon" />
            <span>Laravel</span>
          </div>

          <div className="skill-item">
            <SiCodeigniter className="skill-icon" />
            <span>CodeIgniter</span>
          </div>

          </div>

       
    </div>

    {/* <div className="what-i-offer">
    <h3>What I Offer</h3>

          <ul>
              <li>⚡ <b>**Develop highly interactive and responsive frontend designs**</b> for web applications that engage users and enhance their experience.</li>
              <li>⚡ <b>**Design and build scalable backend solutions**</b> using Core PHP, Laravel, and CodeIgniter, seamlessly integrated with robust MySQL databases.</li>
              <li>⚡ <b>**Implement RESTful APIs and integrate third-party services**</b> such as Stripe for payment processing, and social media platforms to extend functionality and reach.</li>
              <li>⚡ <b>**Utilize version control tools like Git**</b> to manage and collaborate on code efficiently, ensuring smooth and coordinated development processes.</li>
              <li>⚡ <b>**Craft diverse and impactful web solutions**</b> tailored to specific needs:
                <ul>
                  <li>🌟 <b>**SaaS Products**:</b> Building scalable Software as a Service applications that deliver value and innovation.</li>
                  <li>🛒 <b>**eCommerce Websites**:</b> Developing dynamic online stores with secure payment integrations and user-friendly interfaces.</li>
                  <li>🎨 <b>**Portfolio Websites**:</b> Creating personalized and visually appealing portfolio sites that showcase your work and skills effectively.</li>
                  <li>🌍 <b>**Tourism Platforms**:</b> Designing travel and tourism websites that offer engaging experiences and easy navigation.</li>
                  <li>📈 <b>**CRM Systems**:</b> Developing Customer Relationship Management systems to streamline and enhance business operations.</li>
                  <li>📊 <b>**Management Systems**:</b> Building robust management systems to handle various organizational processes with ease.</li>
                </ul>
              </li>
            </ul>

            </div> */}
            {/* </div> */}
    </div>
  );
}

export default SkillsSection;
