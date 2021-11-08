import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from './CartItem';

import { clearCart } from '../../actions/cart';


export const CartScreen = () => {

    const dispatch = useDispatch();
    
    const { list } = useSelector( state => state.shoppingCar.cart );

    const clearCart_ = () => {
        dispatch( clearCart() );
    }

    let total = 0;

    list.forEach(el => {
        total += (el.price * el.quantity);
    });

    return (
        <>
            <h3>Cart</h3>
            <button onClick={clearCart_} className="btn btn-success mt-3 mb-2">Clean cart</button>
            <table className="table">
                <thead className="table-light">
                    <tr className="text-center">
                        <th scope="col">Id</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    list.map((product) => (
                        <CartItem key={product.id} data={product} />
                    ))
                }
                </tbody>
            </table>

            <hr/>

            <div className="row">
                <div className="col-md-1">
                    <h5>Total: </h5> 
                </div>
                <div className="col"> 
                    <span>${total}.00</span>
                </div>
            </div>
        </>
    )
}
