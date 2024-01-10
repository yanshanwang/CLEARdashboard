import React from "react";
import { Frame } from "@/components/Frame";
import { FrameDefault } from "@/components/FrameDefault";
import Link from "next/link"; 

export const dqmLocation = () => {
  return (
    <div className="dqlocation property-default-wrapper">
      <div className="div">Place of residence</div>
      <div className="frame-2">
        <img
          className="img"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65836c2a44d595eb7d3c2a67/img/image-139@2x.png"
        />
        <div className="text-wrapper-2"><Link href="/demoquestions/dqmEthnicity">Back</Link></div>
      </div>
      <a href="/demoquestions/dqmHearingLoss"> 
      <Frame className="frame-378" elementYearsClassName="frame-instance" text="Outside the US" />
      </a>
      <a href="/demoquestions/dqmHearingLoss">
      <Frame
        className="frame-378-instance"
        elementYearsClassName="design-component-instance-node"
        text="Prefer not to say"
      />
      </a>
      <FrameDefault className="frame-386-default" />
      <div className="frame-3">
        <img
          className="image-2"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-166.png"
        />
        <div className="frame-4">
          <div className="text-wrapper-3"><Link href="/selectionquestions/q1">Skip To Filter Devices</Link></div>
          <img
            className="image-3"
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
        <div className="frame-8" />
        <div className="frame-8" />
        <div className="frame-9" />
      </div>
    </div>
  );
};
export default dqmLocation; 