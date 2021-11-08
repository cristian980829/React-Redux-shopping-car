import React from 'react';
import { useSelector } from 'react-redux';
import { ProductItem } from './ProductItem';

export const ProductsScreen = () => {

    const { products } = useSelector( state => state.shoppingCar );

    console.log(products);

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
        </>
    )
}
