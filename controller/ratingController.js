const Rating = require('../Model/rating')

exports.createRating = async (req, res) => {
    try {
        const { productId, score, comment } = req.body;

        const newRating = new Rating({
            productId,
            score,
            comment,
            timestamp: new Date()
        });

        const savedRating = await newRating.save();

        res.status(201).send({
            success: true,
            message: "successfully add rating on this products",
            savedRating
        });
    } catch (error) {
        res.status(500).send(
            {
                success: false,
                message: error.message,
                error
            });
    }
}

exports.getAllRating = async (req, res) => {
    try {

        const Ratings = await Rating.find();

        res.status(200).send({
            success: true,
            Ratings
        });
    } catch (error) {
        res.status(500).send(
            {
                message: error.message,
                success: false
            });
    }
}

