const Product = require('../Model/product');

// Controller function to create a new product
exports.createProduct = async (req, res) => {
    try {
        const { name, url, description, price, category } = req.body;

        // Create a new product instance
        const product = new Product({
            name, url,
            description,
            price,
            category
        });

        // Save the product to the database
        const newProduct = await product.save();

        res.status(201).send({
            success: true,
            message: "create new successfully",
            newProduct
        });
    } catch (error) {
        res.status(500).send(
            {
                success: false,
                message: error.message
            });
    }
}

exports.getAllProducts = async (req, res) => {
    try {

        const products = await Product.find();

        res.status(200).send({
            success: true,
            count: products.length,
            products
        });
    } catch (error) {
        res.status(500).send(
            {
                message: error.message,
                success: false
            });
    }
}