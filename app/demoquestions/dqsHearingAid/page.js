import React from "react";
import { Frame } from "@/components/Frame";


export const dqsHearingAid = () => {
  return (
    <div className="dqhearingaid">
      <p className="text-wrapper">They currently own a hearing aid.</p>
      <div className="div">
        <img
          className="image"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65836c2a44d595eb7d3c2a67/img/image-139@2x.png"
        />
        <div className="text-wrapper-2">Back</div>
      </div>
      <div className="frame-2">
        <Frame className="frame-378" elementYearsClassName="frame-instance" text="Yes" />
        <Frame className="frame-378" elementYearsClassName="frame-instance" text="No" />
        <Frame className="frame-378" elementYearsClassName="frame-378-instance" text="Prefer not to say" />
      </div>
      <div className="frame-3">
        <img
          className="img"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-166.png"
        />
        <div className="frame-4">
          <div className="text-wrapper-3">Skip To Filter Devices</div>
          <img
            className="image-2"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65835895ed443e6187713963/img/image-138.png"
          />
        </div>
      </div>
      <div className="frame-5">
        <div className="frame-6" />
        <div className="frame-7" />
        <div className="frame-7" />
        <div className="frame-7" />
        <div className="frame-7" />
        <div className="frame-7" />
        <div className="frame-7" />
        <div className="frame-8" />
      </div>
    </div>
  );
};

export default dqsHearingAid; 