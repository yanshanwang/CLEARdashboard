import React from "react";
import Link from 'next/link'; 

export const catherine = () => {
  return (
    <div className="teammembers">
      <img
        className="image"
        alt="Image"
        src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/655e24b3473d840adddd3c96/img/image-125.png"
      />
      <div className="frame1">
      <a href="/">
        <img
          className="img"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-166.png"
        />
        </a>
        <div className="div-wrapper">
          <div className="text-wrapper"><Link href="/signIn">Get started</Link></div>
        </div>
      </div>
      <img
        className="image-2"
        alt="Image"
        src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-198.png"
      />
      <p className="nametitle">
        <span className="span">
          Catherine Palmer, PhD <br />
        </span>
        <span className="text-wrapper-2">Audiologist and Research Team Leader</span>
      </p>
      <p className="professor-in-the">
        · Professor in the Departments of Communication Science and Disorders and Otolaryngology at the University of
        Pittsburgh.
        <br />· Director of Audiology for the UPMC Integrated Health System.
        <br />· Conducts research in the areas of auditory learning post hearing aid fitting, the relationship between
        hearing, cognitive health and health outcomes, and matching technology to individual needs.
        <br />· Published over 100 articles and book chapters in these topic areas as well as provided over 200 national
        and international presentations.
        <br />· Teaches the graduate level amplification courses at the University of Pittsburgh.
      </p>
      <div className="back-wrapper">
        <div className="back"><Link href="/meetTheTeam">&lt; Back</Link></div>
      </div>
    </div>
  );
};

export default catherine; 