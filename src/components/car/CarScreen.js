import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from './CartItem';

export const CarScreen = () => {
    
    const { cart } = useSelector( state => state.shoppingCar );
    console.log(cart);

    return (
        <>
            <h3>Cart</h3>
            <button className="btn btn-success mt-3 mb-2">Clean cart</button>
            <table class="table">
                <thead class="table-light">
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
                    cart.map((product) => (
                        <CartItem key={product.id} data={product} />
                    ))
                }
                </tbody>
            </table>
        </>
    )
}
