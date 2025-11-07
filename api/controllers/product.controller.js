import { Product } from "../models/Product.schema.js";


export const createProduct = async (req , res) =>{
    try {
        const {name,price,description,category,stock} = req.body;
        if(!name || !price){
            return res.status(400).json({
                message : "All field are requireddddd"
            });
        }
        const product = new Product({
            name,
            price,
            description,
            category,
            stock,
            image : req.file?.path || "",
        });
        await product.save();

        return res.status(201).json({
            message : "Product created successfully",
            product : product._id
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message,
        })
    }
}

export const getAllProducts = async (req , res) =>{
    try {
        const products = await Product.find({});
        if(!products && products.length == 0){
            return res.message(400).json({
                message: "No Product found"
            })
        }
        return res.status(200).json({
            products
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })

    }
}

export const deleteProduct = async (req,res) =>{
    try {
      
    } catch (error) {
        return res.status(500).json({
            message : error.message,
        })
    }
}