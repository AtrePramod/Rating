import React, { useEffect } from 'react';
import Productlist from './Productlist';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../actions/productActions';

const Products = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.getProductReducer); // Corrected useSelector
    useEffect(() => {
        dispatch(getAllProduct());
    }, [dispatch]);
    // console.log(products)
    return (
        <div className="container">
            <div className="row">
                {products && products.map(product => (
                    <div className="col-md-4" key={product._id}>
                        <Productlist product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
