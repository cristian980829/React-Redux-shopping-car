import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { addToCart, deleteOneProduct, productSetActive } from "../../actions/cart";
import { uiOpenModal } from '../../actions/ui';

export const ProductItem = ({data}) => {

    const dispatch = useDispatch();

    const { id, name, price } = data;

    const addToCart_ = (id) => {
        dispatch( addToCart(id) );
    }

    const editProduct= (data) => {
        dispatch( productSetActive(data) );
        dispatch( uiOpenModal() );
    }

    const deleteProduct= (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch( deleteOneProduct(id) );
                    Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                    )
                }
            })
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <span className="card-text">${price}.00</span>
                <hr/>

                <button onClick={ () => addToCart_(id) } className="btn btn-success btn-block mt-2 ">
                    <i className="fas fa-cart-plus"></i> Add to car
                </button>
                <button onClick={() => editProduct(data)} className="btn btn-info btn-block mt-2 ">
                    <i className="fas fa-edit"></i> Edit
                </button>
                <button onClick={() => deleteProduct(id)} className="btn btn-danger btn-block mt-2 ">
                    <i className="fas fa-trash-alt"></i> Remove
                </button>
            </div>
        </div>
    )
}
