import React from "react";
import { Frame } from "@/components/Frame";
import Link from'next/link'; 

export const dqsIdentity = () => {
  return (
    <div className="dqmidentity property-default-wrapper">
      <div className="text-wrapper">How do they identify?</div>
      <div className="div">
        <img
          className="image"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65836c2a44d595eb7d3c2a67/img/image-139@2x.png"
        />
        <div className="text-wrapper-2"><Link href="/demoquestions/dqsAge">Back</Link></div>
       
      </div>
      <a href = "/demoquestions/dqsEthnicity">
      <Frame className="frame-378" text="Male" />
      <Frame className="frame-instance" text="Female" />
      <Frame className="frame-378-instance" text="Transgender" />
      <Frame className="design-component-instance-node" text="Non-binary" />
      <Frame className="frame-2" text="Other" />
      <Frame className="frame-3" text="Unknown" />
      <Frame className="frame-5" elementYearsClassName="frame-4" text="Prefer not to say" />
      </a>
      <div className="frame-6">
        <a href = "/">
        <img
          className="img"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-166.png"
        />
        </a>
        <div className="frame-7">
          <div className="text-wrapper-3"><Link href="/selectionquestions/q1">Skip To Filter Devices</Link></div>
          <img
            className="image-2"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65835895ed443e6187713963/img/image-138.png"
          />
        </div>
      </div>
      <div className="frame-8">
        <div className="frame-9" />
        <div className="frame-10" />
        <div className="frame-10" />
        <div className="frame-11" />
        <div className="frame-11" />
        <div className="frame-11" />
        <div className="frame-11" />
        <div className="frame-12" />
      </div>
    </div>
  );
};

export default dqsIdentity; 