import React from "react";
import Link from 'next/link'; 


export const yanshan = () => {
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
        src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-206.png"
      />
      <p className="nametitle">
        <span className="span">
          Yanshan Wang, PhD
          <br />
        </span>
        <span className="text-wrapper-2">Health Informatics Expert</span>
      </p>
      <p className="professor-in-the">
        · Vice Chair of Research and Assistant Professor within the Department of Health Information Management at the
        University of Pittsburgh
        <br />· Research interests focus on artificial intelligence (AI), natural language processing (NLP) and
        machine/deep learning methodologies and applications in health care. His research goal is to leverage different
        dimensions of data and data-driven computational approaches to meet the needs of clinicians, researchers,
        patients and customers.
        <br />· Proposed several novel NLP methodologies to improve information retrieval (IR) and information
        extraction (IE) from clinical notes and applied those novel NLP approaches in multiple disease areas.
        <br />· He has over 60 peer-reviewed publications.
        <br />· Reviewer for a dozen of prestigious journals, such as Nature Communications, Bioinformatics, Journal of
        the American Medical Informatics Association (JAMIA), Journal of Biomedical Informatics (JBI) and IEEE
        Transactions on Knowledge and Data Engineering (TKDE)
      </p>
      <div className="back-wrapper">
        <div className="back"><Link href="/meetTheTeam">&lt; Back</Link></div>
      </div>
    </div>
  );
};

export default yanshan; 