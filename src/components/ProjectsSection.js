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
                     <p class="subTitle project-subtitle">SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH</p>
                        <div class="projects-container">


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
                                        <p class="card-subtitle">
                                        Excel Labs is one of the top laboratories recognized nationally as one of
                                        the leaders in maintaining a strict standard of quality and service by using the latest
                                        state of the art technology. This app offers a range of self-care tools and resources,
                                        including meditations, expert tips and advice and guided breathing exercises. It has a
                                        test menu of over 4500 tests in Collaboration with LabCorp and Centogene in the USA
                                        and Germany. It also has a signature daily check-in experience that helps you take
                                        actionable steps to improve your mental health and practice self-care in just 5 minutes
                                        daily. 
                                         
                                         
                                          </p>
                                      
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
                                        <p class="card-subtitle">
                                          Tidal Trip is a travels and tours website that makes adventure travel easy
                                          and accessible to everyone. Tidal Trip makes it easy to find the perfect adventure for
                                          you. Whether you’re looking for a relaxing kayaking tour or an exciting scuba diving
                                          excursion, they’ve got you covered. With their user-friendly search engine and
                                          extensive selection of activities, you can easily find the perfect adventure for you.
 
                                          
                                          </p>
                                        {/* <div class="project-card-footer">
                                          <span class="project-tag">Visit Website</span>
                                        </div> */}
                                    </div> 
                                  
                                          
                              </div>
   
                              <div class="project-card project-card-light">
                                    <div class="project-image">
                                    
                                    <img 
                                    alt="Chip Training Logo"
                                    src={require("../assets/images/chip_logo.png")}

                                    style={{ width: '258px', height: '138px' }}
                                    ></img>
                                    </div>
  
                                    <div class="project-detail">
                                      
                                        <h5 class="card-title">Chip Training & Consulting (CTC)</h5>
                                        <p class="card-subtitle">
                                        CHIP Training & Consulting is a for-profit management and consulting company with regional offices in Karachi, Islamabad, Peshawar, and Quetta. 
                                        Additionally, they maintain an international presence in four countries, including the UK, Nigeria, Kenya, and Afghanistan, with offices located in London, Abuja, and Nairobi. 
                                        Since 2007, they have been providing services to various UN organizations, Shell Pakistan, the World Bank, government sectors, and both international and national NGOs. 
                                         
                                          </p>
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
                                        IG TECH Services is a web and mobile software development company whose objective is to provide Technology solutions that help organizations run, grow and transform business while mitigating technology related risks. 
                                        Founded in 2018 In Islamabad, Pakistan, their firm is dedicated to developing and providing technology solutions that are geared towards organizations' competitiveness while reducing IT costs, improving process management and reduce time-to-market for new products.                                         
                                         
                                          </p>

                                        {/* <div class="project-card-footer">
                                          <span class="project-tag">Visit Website</span>
                                        </div> */}
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
                                        Mindset, the daily self-care app revolutionizing the way you nurture your mental well-being. 
                                        This app provides a comprehensive suite of self-care tools and resources, including calming meditations, soothing sleep stories, reflective journaling prompts, community insights, expert advice, guided breathing exercises, and exclusive content from beloved celebrities. Experience their unique daily check-in feature, designed to help you take actionable steps to enhance your mental health and embrace self-care—all in just 5 minutes a day.
                                          </p>
                                        {/* <div class="project-card-footer">
                                          <span class="project-tag">Visit Website</span>
                                        </div> */}
                                    </div>   
                                  
                                          
                              </div>

                              <div class="project-card project-card-light">
                                  
                              <div class="project-image">

                                  <div className="m_design_styles">
                                  
                                            <img 
                                            alt="M Design Logo"
                                            src={require("../assets/images/m_design_logo.png")}
                                            style={{ width: '258px', height: '100px' }}
                                            ></img>
                                  </div>   
                                           
                                    </div>
  
                                    <div class="project-detail">
                                      
                                    <h5 class="card-title">M Design</h5>
                                          <p class="card-subtitle">
                                       
                                          M.Designs Architects, based in Mountain View, California, is an internationally recognized architecture, planning, and interior design firm with a focus on sustainable residential design, as well as commercial and industrial projects. 
                                          With over 47 years of management experience, they excel in every aspect of design, from documentation to construction support. 
                                          Their extensive background in construction and cost estimating ensures that each project is both beautifully executed and financially sound. 
                                          Their expertise spans a wide range, including home and office remodels, new homes, Eichler homes, townhouses, villas, estates, and mid-sized commercial projects.
                                        
                                          </p>
                                    </div>             
                              </div>
                               
                        </div>
              </div>
    );
  }
  
  export default ProjectsSection;
