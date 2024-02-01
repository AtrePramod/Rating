const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    score: {
        type: Number,
        required: true
    },
    comment: {
        type: String
    },
    timestamp: {
        type: Date, default: Date.now
    }
});


const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
