import React from 'react';
import '../App.css';

function EducationSection() {
    return (
        <div className="education-section">
            <h2 className='education_heading'>Education</h2>
           
          <img 
          alt="Comsats Logo"
          src={require("../assets/images/comsats_logo.jpg")}
          style={{ width: '86px', height: '80px' }}
          ></img>
{/* <br></br> */}
<hr></hr>
          <h5>Comsats University Islamabad</h5>
          <h6>Bachelors of Science in Software Engineering</h6>
          <p>February 2018 - February 2022</p>
          <ul>
            <li> <b>Teacher's Assistant:</b> Assisted professors in Calculus coursework, helping to guide and mentor students through complex mathematical concepts. </li>
            <li> <b>Coursework Highlights:</b> Object-Oriented Programming (OOP), Software Development, Database Systems, Web Technologies, Algorithms, Data Structures, Artificial Intelligence, and Machine Learning. </li>
            <li> <b>Projects:</b> Developed various academic projects including an E-voting system, Learning Management System (LMS) in PHP and frameworks, and conducted linear regression analysis in machine learning, demonstrating strong problem-solving skills and the ability to work effectively in teams. </li>
            <li> <b>Extracurricular Activities:</b> Engaged in university clubs such as Sports Saga, contributing to managing all events.</li> 
          
          
          
          </ul>
        </div>
    );
}

export default EducationSection;