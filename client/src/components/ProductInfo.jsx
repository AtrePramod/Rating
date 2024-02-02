import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { registerRating } from '../actions/ratingAction';
import '../App.css'
const ProductInfo = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');
    const [allreviews, setAllreviews] = useState([]);
    const [avg, setAvg] = useState(0)
    const { Ratings } = useSelector(state => state.getAllRating);
    const navigate = useNavigate()
    useEffect(() => {
        const product = JSON.parse(localStorage.getItem("products"));
        if (product && product.length > 0) {
            const foundItem = product.find(productItem => productItem._id === id);
            if (foundItem) {
                setItem(foundItem);
            }
        }
        if (Ratings && Ratings.length > 0) {
            const productRatings = Ratings.filter(item => item.productId === id);
            setAllreviews(productRatings)
            const totalScore = productRatings.reduce((sum, item) => sum + item.score, 0);
            const average = totalScore / productRatings.length || 0;
            setAvg(average);
        }
    }, [id, Ratings]);

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
        dispatch(registerRating(sendData))
        setRating('');
        setReview('');
        navigate('/')
    };


    return (
        <div className="container m-5 p-2">
            <div className="row">
                <div className="col-md-6 border">
                    <div className="product-card">
                        <img src={item.url} style={{ width: "200px", height: "300px" }} alt="" />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>Price: {item.price}</p>
                        <p> Rating :
                            <span className={`fa fa-star ${avg >= 1 ? 'checked' : ''}`}></span>
                            <span className={`fa fa-star ${avg >= 2 ? 'checked' : ''}`}></span>
                            <span className={`fa fa-star ${avg >= 3 ? 'checked' : ''}`}></span>
                            <span className={`fa fa-star ${avg >= 4 ? 'checked' : ''}`}></span>
                            <span className={`fa fa-star ${avg >= 5 ? 'checked' : ''}`}></span>
                        </p>
                        <h3>Revies: </h3>
                        {allreviews && allreviews.length > 0 && allreviews.map((item, i = 0) =>
                            <p key={i}>{i + 1}: {item.comment}</p>
                        )}
                    </div>
                </div>
                <div className="col-md-6 border ">
                    <div>
                        <h2>Add Review</h2>
                        <form onSubmit={handleSubmit} className='d-flex justify-content-center flex-column'>
                            <div className="form-group m-3">
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
                            <div className="form-group m-3">
                                <label>Review:</label>
                                <textarea className="form-control" value={review} onChange={handleReviewChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mt-2">Submit Review</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ProductInfo;
