/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/
'use client'
import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";


export const Frame413 = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`frame-413 property-1-4-${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.property1 === "default" && (
        <>
          <img
            className="image-16"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-157.png"
          />
          <div className="text-wrapper-10">Customer support</div>
          <img
            className="image-17"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-180@2x.png"
          />
        </>
      )}

      {state.property1 === "variant-2" && (
        <div className="overlap-3">
          <div className="overlap-group-3">
            <div className="smartphone-4">
              <p className="text-wrapper-11">
                A person from the company is on hand to help answer any of your questions. Questions can be about the
                hearing aid and how it works or company policies. You may have questions before or after you purchase
                the hearing aids. Ways to contact the company may include phone, email, video chat or texting.
              </p>
            </div>
            <div className="frame-4">
              <div className="text-wrapper-12">Customer support</div>
            </div>
          </div>
          <img
            className="image-18"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-180-1@2x.png"
          />
          <img
            className="image-19"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-157.png"
          />
        </div>
      )}
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };
    }
  }

  if (state.property1 === "variant-2") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}

Frame413.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
