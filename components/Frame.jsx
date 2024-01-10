/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Frame = ({ className, elementYearsClassName, text = "&gt;18 years" }) => {
  return (
    <div className={`frame2 ${className}`}>
      <div className={`element-years ${elementYearsClassName}`}>{text}</div>
    </div>
  );
};

Frame.propTypes = {
  text: PropTypes.string,
};

export default Frame; 