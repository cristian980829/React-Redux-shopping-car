import React from 'react';
// import { useDispatch } from 'react-redux';

export const CartItem = ({data}) => {

    // const dispatch = useDispatch();
    console.log(data);

    const { id, name, price, quantity } = data;

    return (
        <tr className="text-center">
            <th scope="row">{id}</th>
            <td>{name}</td>
            <td>${price}.00</td>
            <td>{quantity}</td>
            <td>${quantity*price}.00</td>
            <td><button className="btn btn-warning">Remove one</button></td>
            <td><button className="btn btn-danger">Remove all</button></td>
        </tr>

    )
}

