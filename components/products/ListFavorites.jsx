"use client"; 
import React from "react";
import Filters from "../layouts/Filters";
import ProductFavs from './ProductFavs';

const ListFavorites = ({ data, favoritedIds }) => {
    console.log('data:', data);
    console.log('favoritedIds:', favoritedIds);
  
    // Ensure that data and products are available
    const filteredProducts = data?.products?.filter(product =>
      Array.isArray(favoritedIds) && product?.id && favoritedIds.includes(product.id)
    );
  
    console.log('filteredProducts:', filteredProducts);
  
    return (
      <section className="py-12">
        <div className="flex flex-col md:flex-row -mx-4">
          <main className="md:w-2/3 lg:w-3/4 px-3">
            {filteredProducts?.map((product) => (
              <ProductFavs key={product?._id} product={product} />
            ))}
          </main>
        </div>
      </section>
    );
  };
  
  export default ListFavorites;