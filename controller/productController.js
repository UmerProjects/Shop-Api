import Products from "../model/productModel.js";

export default async function CreateProduct(req, res) {
  try {
    const {category, title, description, image, price } = req.body;

    const newProduct = new Products({
        category,
      title,
      description,
      image,
      price,
    });

    let productSave = await newProduct.save();

    res.status(200).json({
      status: "Succeeded",
      code: 200,
      data: { productSave },
      message: "Thanks for registering the products",
    });
  } catch (err) {
    res.status(401).json({
      status: "error",
      code: 500,
      message: `The error is ${err}`,
    });
  }
}

export async function getProduct(req, res) {
    
    try {
        let getProducts = await Products.find()

        res.status(200).json({
            status: "Succeeded",
            code: 200,
            data: {getProducts},
            message: "All the data of get product is succeeded"
        })
    } catch (error) {
        res.status(501).json({
            status: "failed",
            code: 501,
            message: "The data is not fetching correctly"
            
        })
    }
}
