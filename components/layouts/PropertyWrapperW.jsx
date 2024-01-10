/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

'use client'
import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";


export const PropertyWrapperW = ({ property1, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`property-wrapper property-1-1-${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      {state.property1 === "variant-2" && (
        <>
          <div className="smartphone-3">
            
          </div>
          
          <img
            className="image-9"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-130.png"
            style={{ width: '20px', height: '20px', marginRight: '10px', marginLeft: '10px' }}

          />
          <div className="frame-2">
            <div className="text-wrapper-6">Warranty</div>
          </div>
          <img
            className="image-8"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-180-1@2x.png"
            style={{ width: '20px', height: '20px', marginRight: '10px', marginLeft: '10px' }}

          />
          <p className="text-wrapper-5">
              A promise to repair a product during a limited time. Sometimes the product may be replaced. This is done
              because of a defect in the product with normal usage of the product. Check with the manufacturer for their
              policies.
            </p>
            
        </>
      )}

      {state.property1 === "default" && (
        <>
          <img
            className="image-10"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-130.png"
            style={{ width: '20px', height: '20px', marginRight: '10px', marginLeft: '10px' }}

          />
          <div className="text-wrapper-7">Warranty</div>
          <img
            className="image-11"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-180@2x.png"
            style={{ width: '20px', height: '20px', marginRight: '10px', marginLeft: '10px' }}

          />
        </>
      )}
      
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "variant-2") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "variant-2",
        };
    }
  }

  return state;
}

PropertyWrapperW.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
