import React, { useState } from 'react';
import Modal from './Modal.js';
import '../App.css';
import DisplayLottie from './DisplayLottie';
import landingPerson from '../assets/lottie/landingPerson.json';


function HomeSection() {

  const illustration = {
    animated: true, 
};

const [isModalOpen, setModalOpen] = useState(false);

const openModal = () => setModalOpen(true);
const closeModal = () => setModalOpen(false);



    return (
        <div className="home-section">
            <div className="text-and-image">
                <div className="text-section">
                    <h1>Hi all, I'm Moiz <span className="shake">👋</span></h1>
                    <p>
                        I’m a passionate Full Stack Software Developer 🚀 specializing in crafting robust and scalable web applications. My expertise lies in building web applications with PHP, Laravel, CodeIgniter, React JS, JavaScript, Bootstrap, MySQL, and other cool libraries and frameworks. I have a proven track record of delivering high-quality solutions.
                    </p>
                    <p>Here you can find information about my skills, projects, and how to contact me.</p>
                    <p>Feel free to explore and reach out if you have any questions or opportunities!</p>
                    <div className="social-links">
                        <a href="mailto:moiz.0282@gmail.com" className="social-link">Email</a>
                        <a href="https://www.linkedin.com/in/abdul-moiz-f-34942494/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="skype:live:moiz.0282_1?call" className="social-link">Skype</a>
                        
                    </div>
                    <div className="action-buttons">
                        <a href="/Abdul_Moiz_Farooq_CV.pdf" download="Moiz_Farooq_CV.pdf" className="action-button">Download My Resume</a>
                       
                        <a 
                            href="https://wa.me/+923465888162" 
                            className="social-link action-button" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={openModal}
                        >
                            Ping Me
                        </a>
                        {/* <a href="#contact" className="action-button" onClick={openModal}>Ping Me</a> */}
                    </div>
                    <Modal isOpen={isModalOpen} onClose={closeModal} />
                </div>
                <div className="image-section">
                {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../assets/images/manOnTable.svg")}
              ></img>
            )}
                </div>
            </div>
        </div>
    );
}

export default HomeSection;
