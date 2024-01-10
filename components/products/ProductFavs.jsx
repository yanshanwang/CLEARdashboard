import React from "react";
import { Frame3 } from "@/components/Frame3";
import { HeartPlus } from "@/components/HeartPlus";
import Link from "next/link"; 
import LayoutSearch from '@/components/layouts/LayoutSearch';
  

const ProductFavs = ({ product }) => {
    return (
    <div className="favs">
      <div className="group">
       <div class="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5"> 
        <div className="overlap-group">
          <div className="div">

            <img
              className="image"
              alt="Image"
              src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6596d8af0ec7d983061ae077/img/image-36@2x.png"
            />
            <div className="frame-2">
              <p className="p">
                <span className="text-wrapper">{product.model}</span>
                <span className="span"> {product.company}</span>
              </p>
              <div className="text-wrapper-2">Self-fitting OTC Hearing Aids</div>
              <div className="frame-3">
                <div className="ellipse" />
                <div className="ellipse-2" />
                <div className="ellipse-3" />
                <div className="ellipse-4" />
              </div>
              <div className="frame-3">
                <img
                  className="img"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-181.png"
                />
                <img
                  className="img"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-129.png"
                />
                <img
                  className="img"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-130.png"
                />
                <img
                  className="img"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-131.png"
                />
                <img
                  className="img"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-157.png"
                />
              </div>
              <div className="frame-4">
                <img
                  className="image-2"
                  alt="Image"
                  src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6580c242df787d479f4db344/img/image-126.png"
                />
                <div className="text-wrapper-3">3.8 (234 reviews)</div>
              </div>
            </div>
         
          <div className="div-wrapper">
            <div className="text-wrapper-4">Learn more</div>
          </div>
          <HeartPlus className="heart-plus-instance" property1="variant-2" />

          <div className="text-wrapper-5">$849</div>
          <Frame3 className="frame-465" property1="default" />
         
       
      </div> 
      </div>
      </div>
      </div>
      
      <div className="text-wrapper-9">Saved Devices</div>
      <p className="to-save-these">
        <span className="text-wrapper-10">To save these devices for next time, make sure to </span>
        <span className="text-wrapper-11">sign in</span>
        <span className="text-wrapper-10"> or </span>
        <span className="text-wrapper-11">create an account</span>
        <span className="text-wrapper-10">.</span>
      </p>
      <div className="group-wrapper">
        <div className="group-2">
          <div className="overlap-group-3">
            <div className="frame-9" />
            <div className="group-3">
              <div className="group-4">
                <img
                  className="check-all"
                  alt="Check all"
                  src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6596d8af0ec7d983061ae077/img/check-all@2x.png"
                />
                <div className="text-wrapper-12">Compare</div>
                <p className="text-wrapper-13">Select up to 3 products to compare and then click</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group-5">
        <div className="text-wrapper-14">Back</div>
        <img
          className="image-5"
          alt="Image"
          src="https://cdn.animaapp.com/projects/653fd83724d590a7aa0e69a7/releases/6595a01010c9d9fe8a24fa7e/img/image-158@2x.png"
        />
      </div>
      
    </div>

  );
};
 
export default ProductFavs; 
