import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
const Productlist = ({ product }) => {
    const { id, title, price, description, category, image, rating } = product;
    const navigate = useNavigate()
    const handleOnclick = (id) => {
        navigate(`/${id}/productdetails`)
    }

    return (
        <>
            <div className='col-md-3 m-5' onClick={() => handleOnclick(id)}>
                <div className="card " style={{ width: "18rem" }}>
                    <img src={image} className="card-img-top" alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p>Price: ${price}</p>
                        <p>Category: {category}</p>
                        <p>Rating: {rating.rate} (Count: {rating.count})</p>
                    </div>
                </div >
            </div>
        </>
    );

}

export default Productlist
