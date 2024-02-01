import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
const Productlist = ({ product }) => {
    const { _id, name, price, description, category, url } = product;
    const navigate = useNavigate()
    const handleOnclick = (id) => {
        navigate(`/${id}/productdetails`)
    }

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
                        {/* <p>Rating: {rating.rate} (Count: {rating.count})</p> */}
                    </div>
                </div >
            </div>
        </>
    );

}

export default Productlist
