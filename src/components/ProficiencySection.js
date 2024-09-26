import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../App.css';

function ProficiencySection() {
    return (
        <div className="proficiency-section">
            <h2 className="proficiency-heading">Proficiency</h2>
            <div className="proficiency">
            <div className="proficiency-item">
            <h6 className="proficiency-span1">Frontend</h6>
            <ProgressBar now={90} className="custom-progress-bar" />
          </div>
          
          <div className="proficiency-item">
            <h6 className="proficiency-span2">Backend</h6>
            <ProgressBar now={85} className="custom-progress-bar"/>
          </div>

          <div className="proficiency-item">
            <h6 className="proficiency-span3">Programming</h6>
            <ProgressBar now={80} className="custom-progress-bar" />
          </div>
          </div>
        </div>
    );
}

export default ProficiencySection;
