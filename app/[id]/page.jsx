// import ProductDetails from "@/components/products/ProductDetails";
// const fs = require('fs/promises');

// const getProductDetails = async (id) => {
//   // Load products from the JSON file
//   const productsData = await fs.readFile('path/to/products.json', 'utf-8');
//   const products = JSON.parse(productsData);

//   // Find the product with the specified id
//   const product = products.find((product) => product.id === id);

//   return product;
// };


// const ProductDetailsPage = async (product) => {

//   const idToRetrieve = product.id; 

//   const product = await getProductDetails(idToRetrieve);

//   return <ProductDetails product={product} />;
// };

// export default ProductDetailsPage;