import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAllFromCart, deleteOneFromCart } from '../../actions/cart';

export const CartItem = ({data}) => {

    const dispatch = useDispatch();

    const { id, name, price, quantity } = data;

    const delFromCart = (id, all = false) => {
        all 
            ? dispatch( deleteAllFromCart(id) )
            : dispatch( deleteOneFromCart(id) )
    }

    return (
        <tr className="text-center">
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>${price}.00</td>
            <td>{quantity}</td>
            <td>${quantity*price}.00</td>
            <td><button onClick={() => delFromCart(id)} className="btn btn-warning">Remove one</button></td>
            <td><button onClick={() => delFromCart(id, true)} className="btn btn-danger">Remove all</button></td>
        </tr>

    )
}

