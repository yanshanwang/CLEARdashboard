/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
'use client'

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";


export const Frame3 = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`2${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    />
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "checked-checkbox",
        };
    }
  }

  if (state.property1 === "checked-checkbox") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

Frame3.propTypes = {
  property1: PropTypes.oneOf(["checked-checkbox", "default"]),
};
