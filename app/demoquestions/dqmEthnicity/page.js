import React from "react";
import { Frame } from "@/components/Frame";
import Link from "next/link"; 

export const dqmEthnicity = () => {
  return (
    <div className="dqethnicity property-default-wrapper">
      <p className="text-wrapper">Which race/ethnicity best describes you?</p>
      <div className="div">
        <img
          className="image"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65836c2a44d595eb7d3c2a67/img/image-139@2x.png"
        />
        <div className="text-wrapper-2"><Link href="/demoquestions/dqmIdentity">Back</Link></div>
      </div>
      <div className="frame-2">
        <img
          className="img"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-166.png"
        />
        <div className="frame-3">
          <div className="text-wrapper-3"><Link href="/selectionquestions/q1">Skip To Filter Devices</Link></div>
          <img
            className="image-2"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65835895ed443e6187713963/img/image-138.png"
          />
        </div>
      </div>
      <a href="/demoquestions/dqmLocation">
      <div className="group">
        <Frame className="frame-378" elementYearsClassName="frame-instance" text="American Indian or Alaska Native" />
        <Frame className="frame-378-instance" elementYearsClassName="design-component-instance-node" text="Asian" />
        <Frame className="frame-4" elementYearsClassName="frame-instance" text="Black or African American" />
        <Frame className="frame-5" elementYearsClassName="frame-6" text="Multiracial" />
        <Frame className="frame-7" elementYearsClassName="frame-8" text="Native Hawaiian or Other Pacific Islander" />
        <Frame className="frame-9" elementYearsClassName="design-component-instance-node" text="White" />
        <Frame className="frame-10" elementYearsClassName="design-component-instance-node" text="Other" />
        <Frame className="frame-11" elementYearsClassName="design-component-instance-node" text="Prefer not to say" />
      </div>
      </a>
      
      <div className="frame-12">
        <div className="frame-13" />
        <div className="frame-14" />
        <div className="frame-14" />
        <div className="frame-14" />
        <div className="frame-15" />
        <div className="frame-15" />
        <div className="frame-15" />
        <div className="frame-16" />
      </div>
    </div>
  );
};

export default dqmEthnicity; 