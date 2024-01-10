import React from "react";
import Link from 'next/link'

export const jamie = () => {
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
      <div className="overlap">
        <div className="overlap-group">
          <img
            className="image-2"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-207.png"
          />
          <p className="professor-in-the">
            · Research Audiologist in the Department of Communication Science and Disorders at the University of
            Pittsburgh.
            <br />· Supports hearing aid research as well as clinical and consumer education on Over the Counter (OTC)
            hearing aids.
            <br />· Hearing aid manufacturing experience in education and training, sales, and management.
            <br />· Clinical experience in private practice and medical (ENT) settings.
            <br />· Areas of interest include identification and rehabilitation of hearing loss with amplification.
          </p>
        </div>
        <p className="nametitle">
          <span className="span">
            Jamie Katz, AuD <br />
          </span>
          <span className="text-wrapper-2">Audiologist and Project Manager</span>
        </p>
        <div className="back-wrapper">
          <div className="back"><Link href="/meetTheTeam">&lt; Back</Link></div>
        </div>
      </div>
    </div>
  );
};

export default jamie; 