import React from "react";
import Link from 'next/link'; 


export const fdaGL = () => {
  return (
    
    <div className="fdagl">
     
      <img
        className="image"
        alt="Image"
        src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/655e24b3473d840adddd3c96/img/image-125.png"
      />
    

      <div className="frame1">
        
        <div className="div-wrapper">
          <p className="text-wrapper">Advice on when to seek health care services (FDA guidelines)</p>
        </div>
        <div className="div">
          <div className="flexcontainer">
            <p className="text">
              <span className="span">
                Some people with hearing loss may need help from a hearing healthcare professional. How do you know if
                you need to see one?
                
                <br />
              </span>
             
            </p>
            <p className="text">
              <span className="span">
              <ul>
                <li>You can’t hear speech even if the room is quiet</li>
               
        
                <li>You don’t hear loud sounds well, for example, you don’t hear loud music, power tools, engines, or other
                very noisy things.</li>
              
                <li>You have tried an Over-the-Counter (OTC) hearing aid and it hasn’t helped you.</li>
                
             
                <li>Even people with perceived mild-to-moderate hearing loss can benefit from the individualized care
                provided by a hearing care professional.</li>
                </ul>
                <br />
                
              </span>
            </p>
            <p className="text">
              <span className="span">
                If your hearing loss makes it hard to hear loud noises, this hearing aid may not be your best choice
                without help from a professional. If this hearing aid does not help you enough, ask for help from a
                hearing healthcare professional.
              </span>
            </p>
          </div>
        </div>
        <div className="div">
          <img
            className="img"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65823bcff5c3cce0844518b6/img/image-183.png"
          />
          <p className="p">WARNING: When to See a Doctor</p>
        </div>
        <div className="flexcontainer-wrapper">
          <div className="flexcontainer">
            <p className="text">
              <span className="span">
                
                If you have any of the problems listed below, please consult a physician.
                <br />
              </span>
            </p>
            <p className="text">
              <span className="span"> <ul>
               <li> Your ear has a birth defect or an unusual shape. Your ear was injured or deformed in an accident.</li>
               
               <li>You saw blood, pus, or fluid coming out of your ear in the past 6 months.</li>
               
               <li>  Your ear feels painful or uncomfortable.</li>
               
               <li> You have a lot of ear wax, or you think something could be in your ear.</li>
               
               <li> You get really dizzy or have a feeling of spinning or swaying (called vertigo).</li>
               
               <li> Your hearing changed suddenly in the past 6 months.</li> 
               
                <li> Your hearing changes: it gets worse then gets better again.</li>
              
               <li>  You have worse hearing in one ear.</li>
                
               <li>  You hear ringing or buzzing in only one ear.</li> 
             </ul>
                </span>
            </p>
          </div>
        </div>
      </div>
      <div className="frame-2">
      <a href="/">
        <img
          className="image-2"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-166.png"
        />
        </a>
        <div className="frame-wrapper">
          <div className="frame-3">
            <div className="text-wrapper-2"><Link href="/signIn">Get started</Link></div>
          </div>
        </div>
      </div>
    </div>
    
  );
};
export default fdaGL; 