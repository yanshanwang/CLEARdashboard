/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
'use client'

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Frame } from "@/components/Frame";


export const PropertyDefaultWrapper = ({ property1 }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`property-default-wrapper ${state.property1}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <Frame
        className={`${state.property1 === "default" ? "class" : "class-2"}`}
        elementYearsClassName={`${state.property1 === "default" ? "class-3" : "class-4"}`}
        text="&gt;18 years"
      />
      {state.property1 === "variant-2" && (
        <div className="div-wrapper">
          <p className="text-wrapper">*Anyone under 18 should see a hearing care professional*</p>
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}

PropertyDefaultWrapper.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
