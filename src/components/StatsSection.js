// src/components/About.js
import React from 'react';
import '../App.css';
import { FaHtml5, FaCss3, FaSass, FaDatabase, FaReact, FaNpm, FaPhp } from 'react-icons/fa';
import { MdDatabase } from 'react-icons/md';

import { SiLaravel, SiCodeigniter } from 'react-icons/si';

import DisplayLottie from './DisplayLottie'; // Adjust the import according to your project structure
import landingPerson from '../assets/lottie/landingPerson.json';
import codingPerson from "../assets/lottie/codingPerson.json";
import { useEffect, useState } from 'react';




function StatsSection() {

  const illustration = {
    animated: true, // Change this based on your condition
};

return (
    <div className="stats-section" style={{ fontSize: 'x-large' }}>
        <div className="stats-container" style={{ display: 'inline-flex', gap: '93px' }}>
            <StatItem label="👨‍💻 Year of Experience" targetValue={3} suffix="+" />
            <StatItem label="📁 Projects Completed" targetValue={15} suffix="+" />
            <StatItem label="⏱️ Total Working Hours" targetValue={5000} suffix="+" />
        </div>
    </div>
);

function StatItem({ label, targetValue, suffix }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 3000; // 3 seconds
        const increment = targetValue / (duration / 50); // Update every 50ms

        const interval = setInterval(() => {
            start += increment;
            if (start >= targetValue) {
                start = targetValue;
                clearInterval(interval);
            }
            setCount(Math.floor(start));
        }, 50);

        return () => clearInterval(interval);
    }, [targetValue]);

    return (
        <div className="stat-item" style={{ display: 'inline-flex', gap: '20px' }}>
            <strong>{label}</strong>
            <p>{count}{suffix}</p>
        </div>
    );
}
}

export default StatsSection;
