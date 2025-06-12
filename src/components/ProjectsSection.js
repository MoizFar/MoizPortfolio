// src/components/Projects.js
import React from 'react';
import '../App.css';
import profileImage from '../abc.jfif'; // Replace with the path to your image
import DisplayLottie from './DisplayLottie'; // Adjust the import according to your project structure
import landingPerson from '../assets/lottie/landingPerson.json';

function ProjectsSection() {
    return (
      <div className="projects-section">
      <h2 className="skills-heading">Big Projects</h2>
      <p className="subTitle project-subtitle">SOME PROJECTS THAT I HAVE DEVELOPED</p>
      <div className="projects-container">
        
          <div className="project-card project-card-light">
            <div className="project-image">
              <img 
              alt="ATCS – Aviation Tool Compliance System"
              src={require("../assets/images/atcs.png")}
              style={{ width: '303px', height: '166px' }}
              />
            </div>
            <div className="project-detail">
              <h5 className="card-title">ATCS – Aviation Tool Compliance System</h5>
              <p>
              A high-compliance system for aviation tool management, integrating biometric and barcode scanner devices, real-time inventory control, and advanced audit features to ensure safety and accountability.
              </p>
            </div>
          </div>
          

          <div className="project-card project-card-light">
            <div className="project-image">
              <img 
              alt="TicketWave"
              src={require("../assets/images/ticketwave.png")}
              style={{ width: '303px', height: '166px' }}
              />
            </div>
            <div className="project-detail">
              <h5 className="card-title">TicketWave</h5>
              <p>

          A helpdesk platform with real-time chat, ticket management, Kanban tracking, and automated email updates, enhancing customer support and agent efficiency.

              </p>
            </div>
          </div>

          <div className="project-card project-card-light">
            <div className="project-image">
              <img 
              alt="HRM (Human Resource Management System)"
              src={require("../assets/images/hrms_logo.png")}
              style={{ width: '303px', height: '166px' }}
              />
            </div>
            <div className="project-detail">
              <h5 className="card-title">HRMS</h5>
              <p>
              A comprehensive HR management platform with modules for attendance, payroll, recruitment, and performance tracking, integrated with biometric devices for real-time updates.
              </p>
            </div>
          </div>

          <div className="project-card project-card-light">
            <div className="project-image">
              <img 
              alt="E-Leasing Platform"
              src={require("../assets/images/e-leasing.PNG")}
              style={{ width: '258px', height: '138px' }}
              />
            </div>
            <div className="project-detail">
              <h5 className="card-title">E-Leasing Platform</h5>
              <p>
              A scalable leasing platform for property management, featuring online applications, secure payments, and advanced search functionalities for auctions and listings.
              </p>
            </div>
          </div>

          <div className="project-card project-card-light">
            <div className="project-image">
              <img 
              alt="CareerConnect"
              src={require("../assets/images/careerconnect.png")}
              style={{ width: '333px', height: '185px' }}
              />
            </div>
            <div className="project-detail">
              <h5 className="card-title">CareerConnect</h5>
              <p>
              A job application platform with dedicated portals for candidates and admins, offering profile management, job tracking, and secure authentication for over 10,000 users.
              </p>
            </div>
          </div>

          <div className="project-card project-card-light">
            <div className="project-image">
              <img 
              alt="Tidal Trips Logo"
              src={require("../assets/images/tidaltrip.png")}
              style={{ width: '258px', height: '100px' }}
              />
            </div>
            <div className="project-detail">
              <h5 className="card-title">Tidal Trip</h5>
              <p>
              A travel platform with booking, secure payments, and host-traveler communication, offering adventure tours with a user-friendly interface and Stripe integration.
              </p>
            </div>
          </div>

          <div className="project-card project-card-light">
            <div className="project-image">
              <img 
              alt="Excel Labs Logo"
              src={require("../assets/images/excel-logo.webp")}
              style={{ width: '258px', height: '119px' }}
              />
            </div>
            <div className="project-detail">
              <h5 className="card-title">Excel Labs</h5>
              <p>
              A diagnostic platform integrating APIs for test bookings, real-time updates, and a custom reporting system for over 4,500 tests, ensuring seamless user experience.
              </p>
            </div>
          </div>

          <div className="project-card project-card-light">
            <div className="project-image">
              <img 
              alt="Mind Set"
              src={require("../assets/images/black_image.jpg")}
              style={{ width: '258px', height: '119px' }}
              />
            </div>
            <div className="project-detail">
              <h5 className="card-title">Mind Set</h5>
              <p>
              A mental well-being app offering meditations, journaling tools, and personalized recommendations, built with secure APIs and compliance with medical data standards.
              </p>
            </div>
          </div>

          <div className="project-card project-card-light">
            <div className="project-image">
              <img 
              alt="Baladi Express Logo"
              src={require("../assets/images/baladi.png")}
              style={{ width: '258px', height: '100px' }}
              />
            </div>
            <div className="project-detail">
              <h5 className="card-title">Baladi Express</h5>
              <p>
              An e-commerce platform with multi-currency support, real-time order tracking, and Stripe integration, catering to a global audience with enhanced shopping features.
              </p>
            </div>
          </div>

          <div className="project-card project-card-light">
            <div className="project-image">
              <img 
              alt="Sharc Logo"
              src={require("../assets/images/sharc-gills-black.png")}
              style={{ width: '258px', height: '191px' }}
              />
            </div>
            <div className="project-detail">
              <h5 className="card-title">Sharc</h5>
              <p>
              A yacht and cruise booking system with live availability, payment processing, and a custom admin panel for fleet management and real-time updates.
              </p>
            </div>
          </div>

          <div className="project-card project-card-light">
            <div className="project-image">
              <img 
              alt="IG Tech Logo"
              src={require("../assets/images/igtech_logo.jpg")}
              style={{ width: '258px', height: '258px' }}
              />
            </div>
            <div className="project-detail">
              <h5 className="card-title">IG Tech Services</h5>
              <p>
              A CRM system with customer management, analytics dashboard, and Google Maps integration, enhancing usability and sales performance tracking.
              </p>
            </div>
          </div>

      </div>
      </div>
    );
  }
  
  export default ProjectsSection;
