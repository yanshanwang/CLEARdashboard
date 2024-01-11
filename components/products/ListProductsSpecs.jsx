"use client"; 
import React from "react";
import ProductSpecs from './ProductSpecs';
const ListProductsSpecs = ({ data }) => {
    // console.log(data);

    return (
    <section className="py-12">
        <div className="container max-w-screen-xl mx-auto px-4">
            <div className="flex flex-col md:flex-row -mx-4">
            

                <main className="md:w-2/3 lg:w-3/4 px-3">
                
               <ProductSpecs product = {data}  />
  
                </main>
            </div>
        </div>
    </section>
    )
};

export default ListProductsSpecs;