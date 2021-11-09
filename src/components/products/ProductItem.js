import React from 'react';
import { useDispatch } from 'react-redux';

import { addToCart, deleteOneProduct } from "../../actions/cart";

export const ProductItem = ({data}) => {

    const dispatch = useDispatch();

    const { id, name, price } = data;

    const addToCart_ = (id) => {
        dispatch( addToCart(id) );
    }

    const deleteProduct= (id) => {
        dispatch( deleteOneProduct(id) );
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Id: {id}</h5>
                <p className="card-text">{name}</p>
                <span className="card-text">${price}.00</span>
                <hr/>

                <button onClick={ () => addToCart_(id) } className="btn btn-success btn-block mt-2 ">
                    <i className="fas fa-cart-plus"></i> Add to car
                </button>
                <button onClick={() => deleteProduct(id)} className="btn btn-danger btn-block mt-2 ">
                    <i className="fas fa-trash-alt"></i> Remove
                </button>
            </div>
        </div>
    )
}
