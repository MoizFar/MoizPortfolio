import React from 'react';
import '../App.css';


function ExperienceSection() {
    return (
        <div className="work-experience-section">
            <h2>Experiences</h2>

            <div className='experience-cards-div'>

                <div class="experience-card">
                    <div class="experience-banner">
                        <div class="experience-blurred_div">
                        </div>
                            <div class="experience-div-company">
                                <h5 class="experience-text-company">IG Tech Services</h5>
                            </div>
                                  {/* <img crossorigin="anonymous" class="experience-roundedimg" src={require("../assets/images/black_image.jpg")} alt="Facebook"></img> */}
                    </div>
                    <div class="experience-text-details">
                    <h5 class="experience-text-role">Software Engineer</h5>
                    <h5 class="experience-text-date">November 2021 – Present</h5>
                    <ul>

                    <li class="subTitle">Developed and maintained SaaS, e-commerce platforms and web solutions, improving system efficiency by 20%.</li>
                    <li class="subTitle">Collaborated with cross-functional teams to deliver 10+ projects on time.</li>
                    <li class="subTitle">Designed efficient database schemas, supporting business processes and ensuring optimal performance.</li>
                    <li class="subTitle">•Mentored junior developers, fostering a culture of code quality and collaboration.</li>
                    <li class="subTitle">Streamlined existing CRM systems, reducing customer response time by 15%</li>
                    <li class="subTitle">Wrote clean, reusable code, enhancing maintainability and scalability.</li>


                    {/* <li class="subTitle">Worked on ERP, CRM, SaaS, portfolio, eCommerce, tourism, and management systems.</li> */}
                    {/* <li class="subTitle">Implemented 3rd party applications.</li> */}
                    {/* <li class="subTitle">Utilized PHP, Laravel, CodeIgniter, Bootstrap, Git, React JS, MySQL, and jQuery.</li> */}
                    {/* <li class="subTitle">Integrated payment gateways like Stripe.</li> */}
                    {/* <li class="subTitle">Coordinated with team members to develop and deliver solutions on time.</li> */}
                    {/* <li class="subTitle">Mentored junior developers.</li> */}
                    </ul>
                    </div>
                </div>
               
                <div class="experience-card">
                    <div class="experience-banner">
                        <div class="experience-blurred_div">
                        </div>
                            <div class="experience-div-company">
                                <h5 class="experience-text-company">PTCL Headquarters</h5>
                            </div>
                                  {/* <img crossorigin="anonymous" class="experience-roundedimg" src={require("../assets/images/black_image.jpg")} alt="Facebook"></img> */}
                    </div>
                                        <div class="experience-text-details">
                                            <h5 class="experience-text-role">Software Engineer Intern</h5>
                                            <h5 class="experience-text-date">August 2021 – October 2021</h5>
                                            {/* <p class="subTitle experience-text-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                                            <ul>

                                            <li class="subTitle">Participated in design discussions and pre-sprint planning exercises.</li>

                                                {/* <li class="subTitle">Enhanced user experience with various integrations and adherence to coding standards.</li> */}
                                                {/* <li class="subTitle">Developed maintainable and extensible code in a collaborative team environment.</li> */}
                                            </ul>
                                        </div>
                </div>
           
           
           
            </div>
            {/* <div className="job">
                <h3>Software Engineer | IG Tech Services</h3>
                <p><strong>Nov 2021 – Ongoing</strong></p>
                <ul>
                    <li>Worked on ERP and CRM projects.</li>
                    <li>Implemented Google Maps integration and Google ReCAPTCHA.</li>
                    <li>Utilized HTML, CSS, JavaScript, and jQuery for web application development.</li>
                    <li>Integrated payment gateways (PayPal, Stripe) and developed REST APIs.</li>
                    <li>Coordinated with team members to develop and deliver solutions on time.</li>
                    <li>Mentored junior developers.</li>
                </ul>
            </div> */}
            {/* <div className="job">
                <h3>Software Engineer | PTCL Headquarters</h3>
                <p><strong>Aug 2021 – Oct 2021</strong></p>
                <ul>
                    <li>Enhanced user experience with various integrations and adherence to coding standards.</li>
                    <li>Developed maintainable and extensible code in a collaborative team environment.</li>
                </ul>
            </div> */}
        </div>
    );
}

export default ExperienceSection;

