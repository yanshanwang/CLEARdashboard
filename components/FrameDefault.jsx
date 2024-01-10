/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const FrameDefault = ({ className }) => {
  return (
    <div className={`frame-default ${className}`}>
      <div className="text-wrapper">US State or Territory</div>
      <div className="image-wrapper">
        <img className="image" alt="Image" />
      </div>
    </div>
  );
};
