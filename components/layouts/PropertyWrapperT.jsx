/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

'use client'
import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";


export const PropertyWrapperT = ({ property1, className }) => {
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
        {state.property1 === "default" && (
        <>
          <div className="frame-5">
          <img
            className="image-20"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/659dd38be2e68383c9bff76a/img/telecoil-1@2x.png"
            style={{ width: '20px', height: '20px', marginRight: '10px', marginLeft: '10px' }}
          />
          </div>
          <div className="text-wrapper-14">Telecoil (T-coil)</div>
          <img
            className="image-20"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-180@2x.png"
            style={{ width: '20px', height: '20px', marginRight: '10px', marginLeft: '10px' }}

          />
        </>
      )}

      {state.property1 === "variant-2" && (
        <div className="overlap-4">
          <div className="overlap-group-4">
          <div className="frame-7">
          <img
            className="image-20"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/659dd38be2e68383c9bff76a/img/telecoil-1@2x.png"
            style={{ width: '20px', height: '20px', marginRight: '10px', marginLeft: '10px' }}

          />
          </div>
            <div className="frame-6">
            
              <div className="text-wrapper-16">Telecoil (T-coil)</div>
            </div>
          </div>
          
          <img
            className="image-21"
            alt="Image"
            src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-180-1@2x.png"
            style={{ width: '20px', height: '20px', marginRight: '10px', marginLeft: '10px' }}

          />
           <div className="smartphone-5">
              <p className="text-wrapper-15">
                A telecoil (t-coil) is a feature of the hearing aid that allows the hearing aid to pick up a sound that
                is produced in a room that is set up to be telephone compatible. These rooms are identified by a sign
                that says the room is telecoil compatible. You may find these listening systems in places of worship and
                theaters. This may help you hear the sound of interest better in a large room.
              </p>
            </div>
        </div>
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

PropertyWrapperT.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
