import React from "react";
import { Frame2 } from "@/components/Frame2";

export const q3 = () => {
  return (
    <div className="q3">
      <div className="group">
        <img
          className="image"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6591b52b096c828bb1a90b3b/img/image-160@2x.png"
        />
        <img
          className="img"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580f3be617a2a8254fa4a2d/img/image-166.png"
        />
      </div>
      <div className="div">
        <div className="text-wrapper">Skip to view devices</div>
        <img
          className="image-2"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/65835895ed443e6187713963/img/image-138.png"
        />
      </div>
      <div className="frame-2">
        <img
          className="image-3"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/658a0bc379a36e6414abeca7/img/image-162.png"
        />
        <div className="text-wrapper-2">Back</div>
      </div>
      <div className="frame-3">
        <div className="frame-4" />
        <div className="frame-5" />
        <div className="frame-6" />
        <div className="frame-7" />
      </div>
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <p className="p">Would you like sound to be streamed to your hearing aids?</p>
          <img
            className="image-4"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/659061273c41bd3aa2997b5d/img/image-176.png"
          />
        </div>
      </div>
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="frame-wrapper">
            <div className="frame-8">
              <Frame2 className="frame-482" />
              <Frame2 className="frame-482" />
              <Frame2 className="frame-482" />
            </div>
          </div>
          <div className="group-2">
            <p className="yes-i-would-like">
              <span className="span">Yes, I would like</span>
              <span className="text-wrapper-3">
                {" "}
                phone calls, music, etc. streamed or delivered wirelessly to my hearing aids.
              </span>
            </p>
            <p className="currently-not-sure">
              <span className="text-wrapper-4">Currently</span>
              <span className="text-wrapper-5"> not sure</span>
              <span className="text-wrapper-4">. </span>
            </p>
            <img
              className="image-5"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6591b52b096c828bb1a90b3b/img/image-217@2x.png"
            />
            <img
              className="image-6"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6591b52b096c828bb1a90b3b/img/image-220.png"
            />
            <img
              className="image-7"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/659061273c41bd3aa2997b5d/img/image-219.png"
            />
            <p className="no-i-do-not-want-any">
              <span className="span">No, I do not want</span>
              <span className="text-wrapper-3">
                {" "}
                any phone calls, music, etc. streamed or delivered wirelessly to my hearing aids.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default q3; 