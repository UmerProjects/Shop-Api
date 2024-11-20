import express from "express";
import createServices, { getServices } from "../controller/serviceController.js";

const services = express.Router();

services.post('/service', createServices)
services.get('/service', getServices)


export default services;