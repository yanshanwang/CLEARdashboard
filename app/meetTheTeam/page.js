import React from "react";
import Link from 'next/link'; 


export const meetTheTeam = () => {
  return ( 
    
    <div className="meettheteam">
      <img
            className="image"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/655e24b3473d840adddd3c96/img/image-125.png"
          />
      <div className="group">
        <div className="overlap">

          <p className="text-wrapper">The CLEARdashboard Team consists of:</p>
          <div className="frame1">
          <a href="/">
        <img
          className="img"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-166.png"
        />
        </a>
        
            <div className="div-wrapper">
              <div className="div"><Link href="/signIn">Get started</Link></div>
            </div>
           
            
          </div>
          <p className="p">Click on the photo to learn more about each team member.</p>
          <div className="flexcontainer">
            <p className="text">
              <span className="span">The research team who: </span>
              <span className="text-wrapper-2">
                <ul>
                <li> Works at the University of Pittsburgh. </li> 
                <li>Are in the School of Health and Rehabilitation Sciences. </li>
                <li> Are hearing specialists, hearing scientists and computer experts. </li>
                <li> Are not employed by hearing aid manufacturers.</li> 
                </ul>{"  "}
              </span>
              <br />
              <span className="span">A consumer panel who:</span>
              <span className="text-wrapper-2">
                {" "}
                <ul>
                <li> Knows about hearing loss and hearing aids from their own&nbsp;&nbsp; experience.</li>
                <li> Are from all walks of life.</li>
                <li> Are from different part of the Unites States.​</li>
                <li> Provided input which helped shape the CLEARdashboard.</li>
                </ul>
              </span>
            </p>
            <p className="text">
              <span className="text-wrapper-2"></span>
              <br />
              <span className="span">A listening panel with mild to moderate hearing loss who:</span>
              <span className="text-wrapper-2">
                {" "}
              <ul>
                <li> Works with our team to test new devices all the time.</li>
                <li>Takes listening tests for each device so a performance score can be calculated.</li>
                </ul>
              </span>
            </p>
          </div>
          <div className="overlap-group-wrapper1">
            <div className="overlap-group1">
              <p className="elaine-mormer-phd">
                Elaine Mormer, PhD <br />
                Audiologist and Consumer Panel Leader
              </p>
              <a href = "/bios/elaine">
              <img
                className="image-2"
                alt="Image"
                src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-199.png"
              />
              </a>
            </div>
          </div>
          <div className="frame-2">
          <a href = "/bios/catherine">
            <img
              className="image-2"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-198.png"
            />
             </a>
            <p className="catherine-palmer-phd">
              Catherine Palmer, PhD <br />
              Audiologist and Research Team Leader
            </p>
          </div>
          <div className="frame-3">
          <a href = "/bios/aravind">
            <img
              className="image-2"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-204.png"
            />
            </a>
            <p className="aravind">
              Aravind Parthasarathy, PhD <br />
              Hearing Scientist and Test Protocol Developer
            </p>
          </div>
          <div className="group-2">
          <a href = "/bios/hari">
            <img
              className="image-2"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-205.png"
            />
            </a>
          <p className="hari-bharadwaj-phd">
            Hari Bharadwaj, PhD <br />
            Hearing Scientist and Test Protocol Developer
          </p>
          </div>
          <div className="frame-4">
          <a href = "/bios/yanshan">
            <img
              className="image-2"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-206.png"
            />
            </a>
            <p className="yanshan-wang-phd">
              Yanshan Wang, PhD <br />
              Health Informatics Expert
            </p>
          </div>
          <div className="frame-5">
          <a href = "/bios/jamie">
            <img
              className="image-2"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-207.png"
            />
            </a>
            <p className="jamie-katz-aud">
              Jamie Katz, AuD <br />
              Audiologist and Project Manager
            </p>
            </div>
          </div>
          </div>
          </div>
       
   
  );

};


    
export default meetTheTeam; 