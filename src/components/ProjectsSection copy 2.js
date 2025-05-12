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
        {[
        {
          title: "ATCS – Aviation Tool Compliance System",
          description: "A high-compliance system for aviation tool management, integrating biometric and barcode scanner devices, real-time inventory control, and advanced audit features to ensure safety and accountability.",
          image: "../assets/images/hrms_logo.png",
          alt: "ATCS – Aviation Tool Compliance System",
        },
        {
          title: "TicketWave",
          description: "A helpdesk platform with real-time chat, ticket management, Kanban tracking, and automated email updates, enhancing customer support and agent efficiency.",
          image: "../assets/images/hrms_logo.png",
          alt: "TicketWave",
        },
        {
          title: "HRMS - Human Resource Management System",
          description: "A comprehensive HR platform with modules for attendance, payroll, recruitment, and performance tracking, integrated with biometric devices.",
          image: "../assets/images/hrms_logo.png",
          alt: "HRM (Human Resource Management System)",
        },
        {
          title: "E-Leasing Platform",
          description: "A scalable leasing platform for property management, featuring online applications, secure payments, and advanced search functionalities.",
          image: "../assets/images/black_image.jpg",
          alt: "E-Leasing Platform",
        },
        {
          title: "CareerConnect",
          description: "A job application platform with portals for candidates and admins, offering profile management, job tracking, and secure authentication.",
          image: "../assets/images/black_image.jpg",
          alt: "CareerConnect",
        },
        {
          title: "Tidal Trip",
          description: "A travel platform with booking, secure payments, and host-traveler communication, offering adventure tours with Stripe integration.",
          image: "../assets/images/tidaltrip.png",
          alt: "Tidal Trips Logo",
        },
        {
          title: "Excel Labs",
          description: "A diagnostic platform integrating APIs for test bookings, real-time updates, and a custom reporting system for over 4,500 tests.",
          image: "../assets/images/excel-logo.webp",
          alt: "Excel Labs Logo",
        },
        {
          title: "Mind Set",
          description: "A mental well-being app offering meditations, journaling tools, and personalized recommendations, built with secure APIs.",
          image: "../assets/images/black_image.jpg",
          alt: "Mind Set",
        },
        {
          title: "Baladi Express",
          description: "An e-commerce platform with multi-currency support, real-time order tracking, and Stripe integration for global audiences.",
          image: "../assets/images/black_image.jpg",
          alt: "Baladi Express Logo",
        },
        {
          title: "Sharc",
          description: "A yacht and cruise booking system with live availability, payment processing, and a custom admin panel for fleet management.",
          image: "../assets/images/black_image.jpg",
          alt: "Sharc Logo",
        },
        {
          title: "IG Tech Services",
          description: "A CRM system with customer management, analytics dashboard, and Google Maps integration for enhanced sales tracking.",
          image: "../assets/images/igtech_logo.jpg",
          alt: "IG Tech Logo",
        },
        ].map((project, index) => (
        <div key={index} className="project-card project-card-light">
          <div className="project-image">
          <img
            alt={project.alt}
            src={require(`${project.image}`)}
            style={{ width: '258px', height: project.alt.includes("Logo") ? '100px' : '138px' }}
          />
          </div>
          <div className="project-detail">
          <h5 className="card-title">{project.title}</h5>
          <p>{project.description}</p>
          </div>
        </div>
        ))}
      </div>
      </div>
    );
  }
  
  export default ProjectsSection;
