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
            <div className="card-columns mt-4">
                {
                    products.map((product) => (
                        <ProductItem key={product.id} data={product} />
                    ))
                }
            </div>

            <ProductModal />

            <AddNewFab />

        </>
    )
}
