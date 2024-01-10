
import React from "react";

import ListProductsSpecs from "@/components/products/ListProductsSpecs";
import { promises as fs } from 'fs';
//import supportscolor from 'node_modules/supports-color'; 
//import supportscolor1 from 'node_modules/supports-preserve-symlinks-flag'; 
import queryString from "query-string";
import LayoutSearch from '@/components/layouts/LayoutSearch';


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

  //const { data } = await axios.get(`${process.env.API_URL}/api/products`);
  const file = await fs.readFile('./data/products.json', 'utf8'); // reading from JSON file
  const data = JSON.parse(file); 
  return data;
}

const prodSpecs = async (searchParams) => {
  const productsData = await getProducts(searchParams);
  const productId = searchParams.id; 
  const selectedProduct = productsData.products.find((product) => product.id === productId);

  return (
    <LayoutSearch>
    <>
    <ListProductsSpecs data={{ products: [selectedProduct] }} />
</>
</LayoutSearch>
  )
  };

export default prodSpecs;
