import React from "react";
import Link from 'next/link'; 

const HomePage  = () => {
  return (
    <div className="index">
      <div className="overlap">
        <div className="overlap-group">
          <img
            className="image"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/655e24b3473d840adddd3c96/img/image-125.png"
          />
          <div className="ellipse" />
           <div className="frame1"> 
            <div className="text-wrapper">Welcome to the CLEARdashboard</div>
           </div> 
          <div className="div-wrapper">
            <p className="div">
              A user-friendly resource to help you find hearing aids to meet your hearing, communication, and lifestyle
              needs.
            </p>
          </div>
          <div className="frame-2">
            <img
              className="img"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/655e24b3473d840adddd3c96/img/image-168.png"
            />
            <div className="text-wrapper-2"><Link href="/meetTheTeam"> Meet the Research Team</Link></div>
            <img
              className="image-2"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/655e24b3473d840adddd3c96/img/image-162@2x.png"
            />
          </div>
          <div className="frame-3">
            <img
              className="image-3"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/655e24b3473d840adddd3c96/img/image-221@2x.png"
            />
            <p className="p"><Link href="/HAtutorial"> Learn more about hearing and hearing aids</Link></p>
            <img
              className="image-2"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/655e24b3473d840adddd3c96/img/image-162@2x.png"
            />
          </div>
          <div className="frame-4">
            <img
              className="img"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/655e24b3473d840adddd3c96/img/image-170.png"
            />
            <p className="text-wrapper-3"><Link href="/fdaGL"> Advice on when to seek health care services (FDA guidelines)</Link></p>
            <img
              className="image-2"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/655e24b3473d840adddd3c96/img/image-162@2x.png"
            />
          </div>
          <img
            className="image-4"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/655e24b3473d840adddd3c96/img/image-262.png"
          />
          <div className="group">
            <div className="overlap-group-2">
              <p className="text-wrapper-4">Consumer Led Evidence - Amplification Resources Dashboard</p>
              <img
                className="image-5"
                alt="Image"
                src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/655e24b3473d840adddd3c96/img/image-135.png"
              />
            </div>
          </div>
          <p className="text-wrapper-5">
            The information and links to products are for your convenience only. This website is not supported by free
            products, advertisement, or payments from manufacturers.
          </p>
          <p className="the-cleardashboard">
            The CLEARdashboard was created to help: <span>
            <ul >
            <li>Adults (18-years and older) with perceived hearing loss pick hearing aids that will best meet their needs.{" "}</li>
            <li>Learn about hearing aid styles and features.</li>
            <li>Compare features and performance across Direct-to-Consumer hearing aids.</li>
            <li>Make it easier to get the right hearing aids for you.</li>
            </ul>
            </span>
          </p>
        </div>
        <div className="frame-5">
          <div className="text-wrapper-6"><Link href="/signIn"> Get Started</Link></div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
