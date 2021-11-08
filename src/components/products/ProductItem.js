import React from 'react';
import { useDispatch } from 'react-redux';

import { addToCart } from "../../actions/cart";

export const ProductItem = ({data}) => {

    const dispatch = useDispatch();

    const { id, name, price } = data;

    const addToCart_ = (id) => {
        dispatch( addToCart(id) );
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Id: {id}</h5>
                <p className="card-text">{name}</p>
                <span className="card-text">${price}.00</span>
                <button onClick={ () => addToCart_(id) } className="btn btn-danger mt-2">Añadir</button>
            </div>
        </div>
    )
}
