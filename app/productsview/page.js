
import React from "react";
import axios from "axios";
import ListProducts from "@/components/products/ListProducts";
import { promises as fs } from 'fs';
//import supportscolor from 'node_modules/supports-color'; 
//import supportscolor1 from 'node_modules/supports-preserve-symlinks-flag'; 
import queryString from "query-string";


const getProducts = async (searchParams) => {
  const urlParams = {
    keyword: searchParams.keyword,
    page: searchParams.page,
    category: searchParams.category,
    "price[gte]": searchParams.min,
    "price[lte]": searchParams.max,
    "ratings[gte]": searchParams.ratings,
  };

  const searchQuery = queryString.stringify(urlParams);

  //const { data } = await axios.get(`${process.env.API_URL}/api/products`);
  const file = await fs.readFile('data/products.json', 'utf8'); // reading from JSON file
  const data = JSON.parse(file); 
  return data;
}

const ProductsView = async (searchParams) => {
  const productsData = await getProducts(searchParams);
  return (
    <>
  <ListProducts data={productsData} />
</>

  )
  };

export default ProductsView;
