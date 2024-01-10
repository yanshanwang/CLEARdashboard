import React from "react";
import Link from 'next/link'; 

export const aravind = () => {
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
        src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-204.png"
      />
      <p className="nametitle">
        <span className="span">
          Aravind Parthasarathy, PhD <br />
        </span>
        <span className="text-wrapper-2">Hearing Scientist and Test Protocol Developer</span>
      </p>
      <p className="professor-in-the">
        · Assistant Professor in the Department of Communication Science and Disorders at the University of Pittsburgh.
        <br />· Primary interest is in understanding how the peripheral auditory system and the central auditory pathway
        interact in various forms of hearing loss.
        <br />· Research program integrates study of human clinical populations and animal models using non-invasive,
        EEG-like evoked potentials as the translational bridge. The overall goal is to inform diagnosis and track the
        benefits of interventional therapies in clinical populations with hearing loss by utilizing insights obtained
        from animal models with similar forms of pathology.
      </p>
      <div className="back-wrapper">
        <div className="back"><Link href="/meetTheTeam">&lt; Back</Link></div>
      </div>
    </div>
  );
};

export default aravind; 