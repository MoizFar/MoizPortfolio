import React, { useState } from 'react';

import { db } from './firebase-config'; // Import Firestore db
import { collection, addDoc } from 'firebase/firestore'; // Import Firestore functions
import '../App.css';


function ContactSection() {

    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: ''
    // });

    // const [formStatus, setFormStatus] = useState('');

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value
    //     }));
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('http://localhost:8000/api/contact', {
                
    //                 name: formData.name,
    //                 email: formData.email,
    //                 message: formData.message
                
    //         });

    //         if (response.status === 200) {
    //             setFormStatus('Message sent successfully!');
    //             setFormData({ name: '', email: '', message: '' }); 
    //         } else {
    //             setFormStatus('Failed to send message.');
    //         }
    //     } catch (error) {
    //         setFormStatus('An error occurred: ' + error.message);
    //     }
    // };
    // return (
    //     <div id="contact" className="contact-section">
    //         <h2>Contact Me</h2>
    //         <p>If you have any questions or opportunities, feel free to reach out!</p>
    //         <form onSubmit={handleSubmit}>
    //         {/* <form action="mailto:moiz.0282@gmail.com" method="post" enctype="text/plain"> */}
    //             <div className="form-group">
    //                 <label htmlFor="name">Name:</label>
    //                 <input type="text" id="name" name="name"  value={formData.name} onChange={handleChange} required />
    //             </div>
    //             <div className="form-group">
    //                 <label htmlFor="email">Email:</label>
    //                 <input type="email" id="email" name="email"  value={formData.email} onChange={handleChange} required />
    //             </div>
    //             <div className="form-group">
    //                 <label htmlFor="message">Message:</label>
    //                 <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
    //             </div>
    //             <button type="submit" className="submit-button">Send Message</button>
    //         </form>
    //         {formStatus && <p className="form-status">{formStatus}</p>}
    //     </div>
    // );

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Save form data to Firebase Firestore
            await addDoc(collection(db, 'contacts'), {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                timestamp: new Date()
            });

            setFormStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' }); // Reset form data
        } catch (error) {
            setFormStatus('An error occurred: ' + error.message);
        }
    };

    return (
        <div id="contact" className="contact-section">
            <h2>Contact Me</h2>
            <p>If you have any questions or opportunities, feel free to reach out!</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>
            {formStatus && <p className="form-status">{formStatus}</p>}
        </div>
    );
}

export default ContactSection;
