// src/components/Projects.js
import React from 'react';
import '../App.css';
import profileImage from '../abc.jfif'; // Replace with the path to your image
import DisplayLottie from './DisplayLottie'; // Adjust the import according to your project structure
import landingPerson from '../assets/lottie/landingPerson.json';

function ProjectsSection() {
    return (
      <div className="projects-section">

                  <h2 class="skills-heading">Big Projects</h2>
                     <p class="subTitle project-subtitle">SOME PROJECTS THAT I HAVE DEVELOPED</p>
                        <div class="projects-container">



                        <div class="project-card project-card-light">
                                    <div class="project-image">
                                    
                                    <img 
                                    alt="HRM (Human Resource Management System)"
                                    src={require("../assets/images/hrms_logo.png")}

                                    style={{ width: '258px', height: '138px' }}
                                    ></img>
                                    </div>
  
                                    <div class="project-detail">
                                      
                                        <h5 class="card-title">HRM (Human Resource Management System)</h5>

                                        <p>
                                        Technologies: PHP, Laravel, Bootstrap, MySQL, JavaScript, jQuery
                                        </p>


                                        <ul>



                                          <li>

                                          Developed a comprehensive HRM system with modules such as employee creation, attendance, leaves, termination, resignation, transfer management and payroll.

                                          </li>
                                          <li>
                                          Integrated a biometric device for attendance tracking and real-time updates.

                                          </li>
                                          <li> 
                                          Implemented job creation and recruitment workflows, including scheduling interviews and tracking
candidate statuses.

                                          </li>
                                          <li> 


                                          Managed different roles with varied access control, including Admin HR, Managers, and Employee roles,
                                          each with specific pages and permissions.

                                          </li>
                                          <li>
                                          Included features for managing branches, departments, interview schedules, event scheduling, and
employee performance reviews.

                                          </li>
                                          <li> 

                                          Built dynamic reporting tools for analytics on employee attendance, leave patterns, and payroll.


                                          </li>

                                        

                                        </ul>


                                        {/* <p class="card-subtitle">
                                        CHIP Training & Consulting is a for-profit management and consulting company with regional offices in Karachi, Islamabad, Peshawar, and Quetta. 
                                        Additionally, they maintain an international presence in four countries, including the UK, Nigeria, Kenya, and Afghanistan, with offices located in London, Abuja, and Nairobi. 
                                        Since 2007, they have been providing services to various UN organizations, Shell Pakistan, the World Bank, government sectors, and both international and national NGOs. 
                                         
                                          </p> */}
                                        {/* <div class="project-card-footer">
                                          <span class="project-tag">Visit Website</span>
                                        </div> */}
                                    </div> 
                                          
                              </div>


                        <div class="project-card project-card-light">
                                    <div class="project-image">
                                    
                                    <img 
                                    alt="E-Leasing Platform
                                    "
                                    src={require("../assets/images/black_image.jpg")}

                                    style={{ width: '258px', height: '138px' }}
                                    ></img>
                                    </div>
  
                                    <div class="project-detail">
                                      
                                        <h5 class="card-title">E-Leasing Platform</h5>

                                        <p>
                                        Technologies: PHP, Laravel, Bootstrap, MySQL, JavaScript, jQuery
                                        </p>


                                        <ul>

                                          <li>
                                          Developed a leasing platform with a hierarchical roles system to manage properties and lands.

                                          </li>
                                          <li>
                                          Enabled upper-level users to assign properties and make public listings for auctions with custom visibility
options.
                                          </li>
                                          <li> 
                                          Built a leasing platform facilitating online applications, approvals, and payments.

                                          </li>
                                          <li> 
                                          Ensured smooth integration of roles for administrators and other stakeholders in the leasing process.

                                          </li>
                                          <li>
                                          Integrated advanced search and filter functionalities for property listings and auctions.

                                          </li>
                                          <li> 
                                          Designed automated notification systems for bidding updates, approvals, and payments.

                                          </li>

                                          <li>

                                          Implemented a secure payment system with support for multiple payment gateways.
                                          </li>

                                          <li>

                                          Added modules for tracking property ownership history, tenant management, and lease renewals.

                                          </li>

                                          <li>

                                          Ensured scalability and ease of management through modular development.
                                          </li>

                                          <li>
                                          Created a user-friendly interface for property management and auctions.
                                          </li>

                                          <li>
                                          Ensured smooth integration of roles for administrators and other stakeholders in the leasing process.

                                          </li>

                                        </ul>


                                        {/* <p class="card-subtitle">
                                        CHIP Training & Consulting is a for-profit management and consulting company with regional offices in Karachi, Islamabad, Peshawar, and Quetta. 
                                        Additionally, they maintain an international presence in four countries, including the UK, Nigeria, Kenya, and Afghanistan, with offices located in London, Abuja, and Nairobi. 
                                        Since 2007, they have been providing services to various UN organizations, Shell Pakistan, the World Bank, government sectors, and both international and national NGOs. 
                                         
                                          </p> */}
                                        {/* <div class="project-card-footer">
                                          <span class="project-tag">Visit Website</span>
                                        </div> */}
                                    </div> 
                                          
                              </div>



                              <div class="project-card project-card-light">
                                    <div class="project-image">
                                    
                                    <img 
                                    alt="CareerConnect"
                                    src={require("../assets/images/black_image.jpg")}

                                    style={{ width: '258px', height: '138px' }}
                                    ></img>
                                    </div>
  
                                    <div class="project-detail">
                                      
                                        <h5 class="card-title">CareerConnect</h5>

                                        <p>
                                        Technologies: PHP, Laravel, MySQL, Bootstrap, JavaScript, jQuery

                                        </p>
                                        <ul>

                                          <li>
                                              Developed a platform for job applications with separate portals for Admin and Candidates.
                                          </li>
                                          <li>
                                              Enabled candidates to set up detailed profiles, apply for jobs, and check application statuses.
                                          </li>
                                          <li> 
                                              Integrated cron jobs to sync job postings across two secure databases.
                                          </li>
                                          <li> 
                                              Implemented email verification for enhanced security.
                                          </li>
                                          <li>
                                              Handling data for over 10,000 clients.
                                          </li>
                                          <li> 
                                              Implemented secure authentication and authorization mechanisms.
                                          </li>

                                          <li>
                                              Enhanced reporting capabilities with dynamic PDF and Excel generation
                                          </li>
                                        </ul>

                                        {/* <p class="card-subtitle">
                                        CHIP Training & Consulting is a for-profit management and consulting company with regional offices in Karachi, Islamabad, Peshawar, and Quetta. 
                                        Additionally, they maintain an international presence in four countries, including the UK, Nigeria, Kenya, and Afghanistan, with offices located in London, Abuja, and Nairobi. 
                                        Since 2007, they have been providing services to various UN organizations, Shell Pakistan, the World Bank, government sectors, and both international and national NGOs. 
                                         
                                          </p> */}
                                        {/* <div class="project-card-footer">
                                          <span class="project-tag">Visit Website</span>
                                        </div> */}
                                    </div> 
                                          
                              </div>



                              <div class="project-card project-card-light">

                                    <div class="project-image">

                                    <img 
                                    alt="Tidal Trips Logo"
                                    src={require("../assets/images/tidaltrip.png")}
                                    style={{ width: '258px', height: '100px' }}
                                    ></img>
                                    </div>

                                    <div class="project-detail">
                                      
                                        <h5 class="card-title">Tidal Trip</h5>

                                        <p>
                                        Technologies: PHP, MySQL, JavaScript, jQuery, Bootstrap, Stripe

                                        </p>
                                        <ul>
                                          <li>Developed a platform with three distinct portals: Admin, Host, and Traveler.</li>
                                          <li>Integrated a chat system for seamless communication between hosts and travelers.</li>
                                          <li>Enabled booking of trips, secure payments using Stripe, and rating of hosts.</li>
                                          <li>Included features for trip listings, destination highlights, activities, and email verification.</li>
                                          <li>Developed a travel platform enabling users to book adventure tours, with a user-friendly search engine and
                                            activity catalog.</li>
                                          <li>Integrated online payment systems for secure transactions.</li>


                                        </ul>

                                        {/* <p class="card-subtitle">
                                          Tidal Trip is a travels and tours website that makes adventure travel easy
                                          and accessible to everyone. Tidal Trip makes it easy to find the perfect adventure for
                                          you. Whether you’re looking for a relaxing kayaking tour or an exciting scuba diving
                                          excursion, they’ve got you covered. With their user-friendly search engine and
                                          extensive selection of activities, you can easily find the perfect adventure for you.

                                          
                                          </p> */}
                                        {/* <div class="project-card-footer">
                                          <span class="project-tag">Visit Website</span>
                                        </div> */}
                                    </div> 

                                          
                              </div>
                              <div class="project-card project-card-light">
                               
                                    <div class="project-image">
                                    
                                    <img 
                                    alt="Excel Labs Logo"
                                    src={require("../assets/images/excel-logo.webp")}
                                    style={{ width: '258px', height: '100px' }}
                                    ></img>
                                    </div>
  
                                    <div class="project-detail">
                                      
                                        <h5 class="card-title">Excel Labs</h5>
                                        <p>Technologies: PHP, CodeIgniter 4, Bootstrap, JavaScript, jQuery, MySQL</p>
                                        <ul>
                                            <li>Completed frontend development for over 25 unique Figma screens with full mobile responsiveness.</li>
                                            <li>Integrated APIs for seamless transitions from test bookings to the checkout process.</li>
                                            <li>Designed a self-care tool integrating over 4,500 diagnostic tests.</li>
                                            <li>Implemented a custom reporting system for patient test results with real-time updates.</li>
                                        
                                        </ul>
                                        {/* <p class="card-subtitle">
                                        Excel Labs is one of the top laboratories recognized nationally as one of
                                        the leaders in maintaining a strict standard of quality and service by using the latest
                                        state of the art technology. This app offers a range of self-care tools and resources,
                                        including meditations, expert tips and advice and guided breathing exercises. It has a
                                        test menu of over 4500 tests in Collaboration with LabCorp and Centogene in the USA
                                        and Germany. It also has a signature daily check-in experience that helps you take
                                        actionable steps to improve your mental health and practice self-care in just 5 minutes
                                        daily. 
                                         
                                         
                                          </p> */}
                                      
                                    </div>   
                                    
                              </div>
   
                              
   
                             
                           


                             

                              <div class="project-card project-card-light">
                                    <div class="project-image">
                                    
                                    <img 
                                    alt="Excel Labs Logo"
                                    src={require("../assets/images/black_image.jpg")}
                                    style={{ width: '258px', height: '100px' }}
                                    ></img>
                                    </div>
  
                                    <div class="project-detail">
                                      
                                        <h5 class="card-title">Mind Set</h5>
                                          <p class="card-subtitle">
                                            Technologies: Laravel, MySQL, Rest APIs, FHIR API

                                       
                                          </p>

                                          <ul>
                                            <li>
                                            Designed the database schema and implemented FHIR API for accessing and exchanging medical and
                                            patient data.
                                            </li>

                                            <li>
                                            Developed a mental well-being app offering meditations, sleep stories, and journaling tools to promote user wellness.
                                            </li>


                                            <li>
                                            Integrated a daily check-in feature with personalized recommendations based on user responses.

                                            </li>


                                           

                                            <li>
Built admin tools for managing content updates, user feedback, and analytics.

                                            </li>

<li>
Ensured compliance with medical data privacy standards through secure API integrations.

</li>
                                          </ul>

                    



                                        {/* <div class="project-card-footer">
                                          <span class="project-tag">Visit Website</span>
                                        </div> */}
                                    </div>   
                                  
                                          
                              </div>


                              <div class="project-card project-card-light">
                                    <div class="project-image">
                                    
                                    <img 
                                    alt="Baladi Express Logo"
                                    src={require("../assets/images/black_image.jpg")}
                                    style={{ width: '258px', height: '100px' }}
                                    ></img>
                                    </div>
  
                                    <div class="project-detail">
                                      
                                        <h5 class="card-title">Baladi Express
                                        </h5>
                                          <p class="card-subtitle">
                                          Technologies: PHP, Laravel, Bootstrap, JavaScript, jQuery, MySQL, Stripe Payment


                                       
                                          </p>

                                         





                                          <ul>
                                            <li>
                                            Built an e-commerce platform serving customers across Qatar, with Stripe integration for seamless
                                            payments.
                                            </li>

                                            <li>
                                            Implemented features for document signing and PDF generation.
                                            </li>


                                            <li>
                                            Designed a user-friendly product search with filters for an enhanced shopping experience.

                                            </li>


                                           

                                            <li>
                                            Integrated multi-currency support to cater to a global audience.


                                            </li>

                                              <li>
                                              Developed a robust order tracking system with real-time updates.
                                              </li>
                                          </ul>

                    



                                        {/* <div class="project-card-footer">
                                          <span class="project-tag">Visit Website</span>
                                        </div> */}
                                    </div>   
                                  
                                          
                              </div>

                              <div class="project-card project-card-light">
                                    <div class="project-image">
                                    
                                    <img 
                                    alt="Sharc Logo"
                                    src={require("../assets/images/black_image.jpg")}
                                    style={{ width: '258px', height: '100px' }}
                                    ></img>
                                    </div>
  
                                    <div class="project-detail">
                                      
                                        <h5 class="card-title">Sharc
                                        </h5>
                                          <p class="card-subtitle">
                                          Technologies: PHP, CodeIgniter 4, Bootstrap, JavaScript, jQuery, MySQL, Stripe Payment

                                       
                                          </p>


                                          






                                          <ul>
                                            <li>
                                            Developed a yacht and cruise booking system with live availability updates and seamless booking
                                            workflows.
                                            </li>

                                            <li>
                                            Integrated stripe for payment processing and document management.
                                            </li>


                                            <li>
                                            Added document management features for booking confirmations and agreements.

                                            </li>


                                           

                                            <li>
                                            Designed a custom admin panel for managing fleet schedules and pricing.


                                            </li>

                                              <li>
                                              Enhanced user experience with real-time booking updates and notification alerts.
                                              </li>
                                          </ul>

                    



                                        {/* <div class="project-card-footer">
                                          <span class="project-tag">Visit Website</span>
                                        </div> */}
                                    </div>   
                                  
                                          
                              </div>


                               <div class="project-card project-card-light">
                              
                                    <div class="project-image">
                                    
                                    <img 
                                    alt="IG Tech Logo"
                                    src={require("../assets/images/igtech_logo.jpg")}
                                    style={{ width: '258px', height: '258px' }}
                                    ></img>
                                    </div>
  
                                    <div class="project-detail">
                                      
                                        <h5 class="card-title">IG Tech Services</h5>

                                        <p class="card-subtitle">
                                       
                                        Technologies: PHP, Laravel, Bootstrap, JavaScript, jQuery, MySQL, Google Maps, Stripe Payment

                                          </p>

                                      

                                          <ul>
                                            <li>
                                            Built a CRM system with features for customer management and extensive support.

                                            </li>
                                            Enhanced usability with Google Maps and ReCAPTCHA integration.

                                            <li>
                                            Developed a comprehensive analytics dashboard for tracking customer interactions and sales performance.

                                            </li>
                                          </ul>

                                        {/* <div class="project-card-footer">
                                          <span class="project-tag">Visit Website</span>
                                        </div> */}
                                    </div>   
                              </div>

                              
                        </div>
              </div>
    );
  }
  
  export default ProjectsSection;
