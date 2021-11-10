import React from 'react';
import { useDispatch } from 'react-redux';
import { addOneFromCart, deleteAllFromCart, deleteOneFromCart } from '../../actions/cart';

export const CartItem = ({data}) => {

    const dispatch = useDispatch();

    const { id, name, price, quantity } = data;

    const removeOneFromCart = (id, all = false) => {
        all 
            ? dispatch( deleteAllFromCart(id) )
            : dispatch( deleteOneFromCart(id) )
    }

    const addOneFromCart_ = (id) => {
        dispatch( addOneFromCart(id) );
    }

    return (
        <tr className="text-center">
            <td>{name}</td>
            <td>${price}.00</td>
            <td>
                <button onClick={() => removeOneFromCart(id)} className="btn btn-info btn-sm">
                    <i className="fas fa-minus"></i>
                </button> {quantity} <button onClick={() => addOneFromCart_(id)} className="btn btn-info btn-sm">
                    <i className="fas fa-plus"></i>
                </button>
            </td>
            <td>${quantity*price}.00</td>
            <td><button onClick={() => removeOneFromCart(id, true)} className="btn btn-danger">Remove all</button></td>
        </tr>

    )
}

