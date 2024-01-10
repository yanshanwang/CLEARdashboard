import React from "react";
import Link from 'next/link'; 

export const elaine = () => {
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
        src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-199.png"
      />
      <p className="nametitle">
        <span className="span">
          Elaine Mormer, PhD <br />
        </span>
        <span className="text-wrapper-2">Audiologist and Consumer Panel Leader</span>
      </p>
      <p className="professor-in-the">
        · Professor and Vice Chair for Clinical Education in the Department of Communication Science and Disorders at
        the University of Pittsburgh.
        <br />· Teaches undergraduate and graduate students in the classroom.
        <br />· Serves as a clinical educator for AuD students.
        <br />· Fellow of the American Speech-Language-Hearing Association.
        <br />· Co-creator of American Pharmacists Association continuing education course: Pharmacy-Based OTC Hearing
        Aids.
        <br />· Director of community panel engagement on multiple funded research projects.
      </p>
      <div className="back-wrapper">
        <div className="back"><Link href="/meetTheTeam">&lt; Back</Link></div>
      </div>
    </div>
  );
};

export default elaine; 