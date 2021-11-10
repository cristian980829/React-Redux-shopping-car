import React from 'react';
import { useSelector } from 'react-redux';
import { ProductItem } from './ProductItem';


export const ProductsListScreen = () => {

    const { products } = useSelector( state => state.shoppingCar );
    return (
        <>
            <h3>Products</h3>
            <div className="card-columns mt-4">
                {
                    products.map((product) => (
                        <ProductItem key={product.id} data={product} list={true}/>
                    ))
                }
            </div>

        </>
    )
}
