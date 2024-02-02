import React, { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Productlist = ({ product }) => {
    const { _id, name, price, description, category, url } = product;
    const [avg, setAvg] = useState(0)
    const { Ratings } = useSelector(state => state.getAllRating);
    const navigate = useNavigate()
    const handleOnclick = (id) => {
        navigate(`/${id}/productdetails`)
    }
    useEffect(() => {
        if (Ratings && Ratings.length > 0) {
            const productRatings = Ratings.filter(item => item.productId === _id);
            const totalScore = productRatings.reduce((sum, item) => sum + item.score, 0);
            const average = totalScore / productRatings.length || 0; // Avoid division by zero
            setAvg(average);
        } else {
            setAvg(0);
        }

    }, [Ratings, _id]);

    // console.log(Ratings)
    return (
        <>
            <div className='col-md-3 m-5' onClick={() => handleOnclick(_id)}>
                <div className="card " style={{ width: "18rem" }}>
                    <img src={url} className="card-img-top" alt={name} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">{description}</p>
                        <p>Price: ${price}</p>
                        <p>Category: {category}</p>

                        <p> Rating :
                            <span className={`fa fa-star ${avg >= 1 ? 'checked' : ''}`}></span>
                            <span className={`fa fa-star ${avg >= 2 ? 'checked' : ''}`}></span>
                            <span className={`fa fa-star ${avg >= 3 ? 'checked' : ''}`}></span>
                            <span className={`fa fa-star ${avg >= 4 ? 'checked' : ''}`}></span>
                            <span className={`fa fa-star ${avg >= 5 ? 'checked' : ''}`}></span>
                        </p>
                    </div>
                </div >
            </div>
        </>
    );

}

export default Productlist
