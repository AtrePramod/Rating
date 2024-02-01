import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { registerRating } from '../actions/ratingAction';

const ProductInfo = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');

    useEffect(() => {
        const product = JSON.parse(localStorage.getItem("products"));
        if (product && product.length > 0) {
            const foundItem = product.find(productItem => productItem._id === id);
            if (foundItem) {
                setItem(foundItem);
            }
        }
    }, [id]);

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const sendData = {
            productId: id,
            score: rating,
            comment: review
        }
        console.log(sendData)
        dispatch(registerRating(sendData))
        setRating('');
        setReview('');
    };

    return (
        <div className="container m-5 p-2">
            <div className="row">
                <div className="col-md-6">
                    <div className="product-card">
                        <img src={item.url} style={{ width: "200px", height: "300px" }} alt="" />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>Price: {item.price}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <h2>Add Review</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Rating:</label>
                                <select className="form-control" value={rating} onChange={handleRatingChange}>
                                    <option value="">Select Rating</option>
                                    <option value="1">1 Star</option>
                                    <option value="2">2 Stars</option>
                                    <option value="3">3 Stars</option>
                                    <option value="4">4 Stars</option>
                                    <option value="5">5 Stars</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Review:</label>
                                <textarea className="form-control" value={review} onChange={handleReviewChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary m-2">Submit Review</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
