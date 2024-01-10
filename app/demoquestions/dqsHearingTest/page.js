import React from "react";
import { Frame } from "@/components/Frame";


export const dqsHearingTest = () => {
  return (
    <div className="dqhearingtest">
      <p className="text-wrapper">The last hearing test that they had as an adult (18 years or older) was:</p>
      <div className="div">
        <img
          className="image"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65836c2a44d595eb7d3c2a67/img/image-139@2x.png"
        />
        <div className="text-wrapper-2">Back</div>
      </div>
      <div className="frame-2">
        <img
          className="img"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-166.png"
        />
        <div className="frame-3">
          <div className="text-wrapper-3">Skip To Filter Devices</div>
          <img
            className="image-2"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65835895ed443e6187713963/img/image-138.png"
          />
        </div>
      </div>
      <div className="frame-4">
        <Frame className="frame-378" elementYearsClassName="frame-instance" text="within the past year" />
        <Frame className="frame-378" elementYearsClassName="frame-378-instance" text="1-2 years ago" />
        <Frame className="frame-378" elementYearsClassName="design-component-instance-node" text="2-5 years ago" />
        <Frame className="frame-378" elementYearsClassName="frame-378-instance" text="5+ years ago" />
        <Frame className="frame-378" elementYearsClassName="design-component-instance-node" text="Never" />
        <Frame className="frame-378" elementYearsClassName="frame-5" text="Prefer not to say" />
      </div>
      <div className="frame-6">
        <div className="frame-7" />
        <div className="frame-8" />
        <div className="frame-8" />
        <div className="frame-8" />
        <div className="frame-8" />
        <div className="frame-8" />
        <div className="frame-8" />
        <div className="frame-9" />
      </div>
    </div>
  );
};
export default dqsHearingTest; 