import React from "react";
import Link from "next/link"; 

export const signIn = () => {
  return (
    <div className="signin">
      <div className="overlap1">
        <div className="overlap-group1">
          <div className="ellipse" />
          <div className="frame1">
            <div className="div">
              <div className="frame-wrapper">
                <div className="div-wrapper">
                  <div className="text-wrapper">Login</div>
                </div>
              </div>
              <div className="frame-2">
                <div className="frame-3">
                  <p className="text-wrapper-2">Username (must be a valid email)</p>
                  <div className="rectangle" />
                </div>
                <div className="frame-3">
                  <div className="text-wrapper-2">Password</div>
                  <div className="rectangle" />
                </div>
              </div>
              <div className="text-wrapper-3">Forgot password?</div>
              <div className="frame-4">
                <div className="frame-5">
                  <div className="text-wrapper-4">Login</div>
                </div>
              </div>
            </div>
            <div className="frame-6">
              <div className="frame-wrapper">
                <div className="div-wrapper">
                  <div className="text-wrapper">Create an account</div>
                </div>
              </div>
              <div className="frame-7">
                <p className="p">Sign Up as a User so that you will be able to store your results to review later.</p>
              </div>
              <div className="frame-wrapper">
                <div className="frame-8">
                  <div className="text-wrapper-5">Create an account</div>
                </div>
              </div>
            </div>
            <div className="frame-9">
              <div className="frame-wrapper">
                <div className="div-wrapper">
                  <div className="text-wrapper">Continue as guest</div>
                </div>
              </div>
              <div className="frame-10">
                <p className="text-wrapper-6">
                  When you Continue as Guest, please note that your results will not be saved, and you will not be able
                  to review them later. ​
                </p>
              </div>
              <div className="frame-wrapper">
                <div className="frame-11">
                  <div className="text-wrapper-4"><Link href="/demoquestions/demoqintro">Continue as guest</Link></div> 
                </div>
              </div>
            </div>
          </div>
          <div className="frame-12">
            <div className="group-1">
              <div className="overlap-group-2">
                <p className="text-wrapper-7">Consumer Led Evidence - Amplification Resources Dashboard</p>
                <img
                  className="image"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/655e24b3473d840adddd3c96/img/image-135.png"
                />
              </div>
            </div>
            <img
              className="img"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/658356a740a9809420cc9f55/img/image-261.png"
            />
          </div>
        </div>
        <img
          className="image-2"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/655e24b3473d840adddd3c96/img/image-125.png"
        />
      </div>
      <a href = "/">
      <img
        className="image-3"
        alt="Image"
        src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-166.png"
      />
      </a>
    </div>

  );
};
export default signIn; 