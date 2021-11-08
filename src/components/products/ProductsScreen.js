import React from 'react';
import { ProductItem } from './ProductItem';

export const ProductsScreen = () => {

    const products = [{
        name:"leche",
        id:123
    },{name:"gaseosa",id:1256}]

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
