import React from 'react';
import { useSelector } from 'react-redux';
import { AddNewFab } from '../ui/AddNewFab';
import { ProductItem } from './ProductItem';
import { ProductModal } from './ProductModal';

export const ProductsScreen = () => {

    const { products } = useSelector( state => state.shoppingCar );

    return (
        <>
            <h3>Products</h3>
            <table className="table">
                <thead className="table-light">
                    <tr className="text-center">
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map((product) => (
                        <ProductItem key={product.id} data={product} />
                    ))
                }
                </tbody>
            </table>

            <ProductModal />

            <AddNewFab />

        </>
    )
}
