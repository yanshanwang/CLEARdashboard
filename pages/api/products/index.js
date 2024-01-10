// import nc from "next-connect";
// import dbConnect from "@/backend/config/dbConnect";
// import { getProducts, newProduct } from "@/backend/controllers/productControllers";

// const handler = nc();

// dbConnect();

// handler.post(newProduct);
// handler.get(getProducts);

// export default handler;

import nc from "next-connect";
import fs from "fs/promises";
import path from "path";

const handler = nc();

const filePath = path.resolve("/toJSON/DeviceInfo.json");

handler.post(async (req, res) => {
  try {
    const jsonData = await fs.readFile(filePath, "utf-8");
    const products = JSON.parse(jsonData);

    // Add logic to handle the new product data 

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

handler.get(async (req, res) => {
  try {
    // Read the existing data from the JSON file
    const jsonData = await fs.readFile(filePath, "utf-8");
    const products = JSON.parse(jsonData);

    // Send the product data as a response
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
});

export default handler;
