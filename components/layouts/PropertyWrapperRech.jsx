/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

'use client'
import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";


export const PropertyWrapperRech = ({ property1, className }) => {
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
        <div className="overlap-2">
          <div className="overlap-group-2">
            <div className="the-rechargeable-wrapper">
              <p className="the-rechargeable">
                
              </p>
            </div>
           
          </div>
          <img
            className="image-12"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-131.png"
            style={{ width: '20px', height: '20px', marginRight: '10px', marginLeft: '10px' }}

         />
          <div className="frame-3">
              <div className="text-wrapper-8">Rechargeable</div>
            </div>
          <img
            className="image-13"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-180-1@2x.png"
            style={{ width: '20px', height: '20px', marginRight: '10px', marginLeft: '10px' }}

          />
          <span className="span">
                  The rechargeable battery, or power source, is built inside the hearing aid and does not require
                  removing. It does require placing the hearing aid in the provided charger.
                  <br />
                </span>
                <span className="span">
                  Replaceable batteries provide the power source to the hearing aid and need to be replaced in the
                  hearing aid for the device to work. The size of the battery may vary based on the style of the hearing
                  aid. How long the battery lasts depends on the size of the battery and how many hours a day the
                  hearing aid is worn. It may be difficult to replace the battery in the hearing aid if you do not see
                  well or have difficulty with hand movement.
                </span>
        </div>
      )}

      {state.property1 === "default" && (
        <>
          <img
            className="image-14"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-131.png"
            style={{ width: '20px', height: '20px', marginRight: '10px', marginLeft: '10px' }}

          />
           <div className="text-wrapper-9">Rechargeable</div> 
          <img
            className=""
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

PropertyWrapperRech.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
