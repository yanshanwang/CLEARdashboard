import React from "react";
import Link from 'next/link'; 

export const hari = () => {
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
        src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-205.png"
      />
      <p className="nametitle">
        <span className="span">
        Hari Bharadwaj, PhD <br />
        </span>
        <span className="text-wrapper-2">Hearing Scientist and Test Protocol Developer</span>
      </p>
      <p className="professor-in-the">
      · Assistant Professor in the Department of Communication Science and Disorders at the University of Pittsburgh.
        <br />· Directs the Systems Neuroscience of Auditory Perception Lab (SNAPlab), which investigates how sound
        information is encoded and analyzed by our ears and brains in complex/noisy environments such as crowded
        restaurants and busy streets.
        <br />· Seeks to advance precision diagnostics for hearing problems, and improve assistive devices such hearing
        aids, cochlear implants, and brain-machine interfaces.
        <br />· Serves as associate editor for the Journal of the Acoustical Society of America.
      </p>
      <div className="back-wrapper">
        <div className="back"><Link href="/meetTheTeam">&lt; Back</Link></div>
      </div>
    </div>
  );
};

export default hari; 