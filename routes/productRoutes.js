import express from "express";
import CreateProduct, { getProduct } from "../controller/productController.js";


const product = express.Router();   


product.post('/product', CreateProduct)
product.get('/product', getProduct)

export default product