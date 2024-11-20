import Service from "../model/servicesModel.js";

export default async function createServices (req, res) {
    try {       
        const {title, description, image} = req.body;

        let createProduct = new Service({
            title,
            description,
            image
        })

        let saveProduct = await createProduct.save();

        res.status(201).json({
            status: "Succeeded",
            code: 201,
            data: {saveProduct},
            message: "The services are created successfully"
        })

    } catch (error) {
        res.status(501).json({
            status: "Failed",
            code: 500,
            message: `The error is ${error}`
        })
    }
}

export async function getServices(req, res) {
    try {
        const getService = await Service.find();

        res.status(200).json({
            status: "Successful",
            code: 200,
            data: {getService},
            message: "The data is fetched successfully"
        })

    } catch (error) {
        res.status(501).json({
            status: "Failed",
            code: 501,
            message: `The error is ${error}`
        })
    }
}