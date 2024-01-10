import React from "react";
import { Group } from "@/components/Group";
import { Group88 } from "@/components/Group88";
import { Group89 } from "@/components/Group89";
import { Group90 } from "@/components/Group90";
import { Group91} from "@/components/Group91";
import Link from 'next/link';
import LayoutNosearch from "@/components/layouts/LayoutNosearch";


export const q1 = () => {
  return (
   
    <div className="q1 group group88 group89 group90 group91">
      
      <a href = "/">
        <img
          className = "q1 home"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-166.png"
          style={{ width: "40px", height: "40px", marginRight: "0px", left:"1380px", top:"10px" }}
        />
        </a>
        
        <div className="frame-2">
          <div className="frame-3" />
          <div className="frame-4" />
          <div className="frame-4" />
          <div className="frame-5" />
        </div>
    
      <div className="div-wrapper">
        <p className="text-wrapper">Please click on as many of the styles of hearing aids you would like to browse</p>
      </div>
     
      <a href = "/selectionquestions/q2">
      <div className="frame-7">
        <div className="text-wrapper-3"><Link href = "/selectionquestions/q2"></Link>Continue</div>
      </div>
      </a>

      <p className="p">
        The next three questions will help you select hearing aids that meet your style choices and communication needs.
      </p>
<a href = "/productsview">
      <div className="frame-8">
        <div className="text-wrapper-4">Skip to view devices</div>
        <img
          className="image-8"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65835895ed443e6187713963/img/image-138.png"
        />
      </div>
      </a> 
      <div className="frame-9">
        <div className="frame-10">
          <img
            className="image-9"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/658a0bc379a36e6414abeca7/img/image-162.png"
          />
          <div className="text-wrapper-5">Back</div>
        </div>
      </div>
      <div className="text-wrapper-6">Selection Questions</div>
      <div className="frame-11">
        <Group property1="default" />
        <Group91 property1="default" />
        <Group88 property1="default" />
        <Group89 property1="default" />
        <Group90 property1="default" />
      </div>
    </div>


  );
};

export default q1; 