import React from "react";
import Link from "next/link"; 

export const signUp = () => {
  return (
    <div className="signup">
      <div className="overlap1">
        <div className="overlap-group">
          <div className="ellipse" />
          <img
            className="image"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/655e24b3473d840adddd3c96/img/image-125.png"
          />
          <div className="frame1">
            <div className="div-wrapper">
              <div className="text-wrapper">Sign up</div>
            </div>
            <p className="div">
              Sign up as a User so that you will be able to store your results to review later. Please record your
              Username and Password to revisit your account.​
            </p>
            <div className="frame-2">
              <p className="p">Username (must be a valid email)</p>
              <div className="rectangle" />
            </div>
            <div className="frame-2">
              <div className="text-wrapper-2">Password</div>
              <div className="rectangle" />
            </div>
            <div className="frame-3">
              <div className="text-wrapper-2">Confirm password</div>
              <div className="rectangle" />
            </div>
            <div className="frame-4">
              <div className="text-wrapper-3">Create account</div>
            </div>
          </div>
          <p className="already-have-an">
            <span className="span">Already have an account? Sign in </span>
            <span className="text-wrapper-4"><Link href="/signIn">here</Link></span>
          </p>
          <div className="frame-5">
            <div className="group">
              <div className="overlap-group-2">
                <p className="text-wrapper-5">Consumer Led Evidence - Amplification Resources Dashboard</p>
                <img
                  className="img"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/655e24b3473d840adddd3c96/img/image-135.png"
                />
              </div>
            </div>
            <img
              className="image-2"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/658356a740a9809420cc9f55/img/image-261.png"
            />
          </div>
        </div>
        <div className="frame-6">
          <a href = "/">
          <img
            className="image-3"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-166.png"
          />
          </a>
          <div className="frame-7">
            <div className="text-wrapper-6" ><Link href="/demoquestions/demoqintro">Continue as guest</Link></div>
            <img
              className="image-4"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65835895ed443e6187713963/img/image-138.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default signUp; 