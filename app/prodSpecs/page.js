
'use client'
import React from "react";

import ListProductsSpecs from "@/components/products/ListProductsSpecs";
import axios from "axios";
// import { promises as fs } from 'fs';
//import supportscolor from 'node_modules/supports-color'; 
//import supportscolor1 from 'node_modules/supports-preserve-symlinks-flag'; 
import queryString from "query-string";
import LayoutSearch from '@/components/layouts/LayoutSearch';
import { useSearchParams } from "next/navigation";


const getProducts = async (searchParams) => {
  const urlParams = {
    id: searchParams.id, 
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    "price[gte]": searchParams.min,
    "price[lte]": searchParams.max,
    "ratings[gte]": searchParams.ratings,
  };

  const searchQuery = queryString.stringify(urlParams);

  const { data } = await axios.get(`/products.json`);
  // const { data } = await axios.get(`${process.env.API_URL}/api/products`);
  // const file = await fs.readFile('./data/products.json', 'utf8'); // reading from JSON file
  // const data = JSON.parse(file); 
  return data;
}
function findArrayElementById(products, id) {
  for (let i=0; i<products.length; i++) {
    let p = products[i];

    if (p.id == id) {
      console.log('* found it', p);
      return p;
    }
  }
  return null;

  const arr = []; 
  //Object.entries(array).forEach(entry => arr.push({name: entry.value, value: array[key]})); 
  // foreach (entry in Object.entries(array))
  //   {
  //     arr.push({name:entry.key, value: entry.value})
  //   }

  //key value pair? not array
    Object.entries(array).forEach(entry => {
      arr.push(
        {id:entry.key, value: entry.value}
    )
  }
  ); 
  console.log("array " + arr[1].model); 
  

 // console.log("array" + arr[0].id); 
  return arr.find((element)=> {
  return element.id === id;
  })}
  //console.log("JSONarray " + Object.entries(jsonArray)[0][1].model); 

const prodSpecs = async (searchParams) => {
  const params = useSearchParams();
  console.log('* params', params);
  const productsData = await getProducts(searchParams);
  // const productId = searchParams.id; 
  console.log("* productsData", productsData); 
  const productId = 1; 
  const selectedProduct = findArrayElementById(productsData?.products, productId); 
   console.log("selectedProduct"+selectedProduct); 
  return (
    <LayoutSearch>
    <>
    <ListProductsSpecs data={{ selectedProduct }} />
</>
</LayoutSearch>
  )
  };

export default prodSpecs;
