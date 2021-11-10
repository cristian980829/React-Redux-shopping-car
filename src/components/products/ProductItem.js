import React from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { addToCart, deleteOneProduct, productSetActive } from "../../actions/cart";
import { uiOpenModal } from '../../actions/ui';

export const ProductItem = ({data, list=false}) => {

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
        <>
        {list 
            ? <div className="card">
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <span className="card-text">${price}.00</span>
                    <hr/>

                    <button onClick={ () => addToCart_(id) } className="btn btn-success btn-block mt-2 ">
                        <i className="fas fa-cart-plus"></i> Add to car
                    </button>
                </div>
            </div>
            : <tr className="text-center">
                <td>{name}</td>
                <td>${price}.00</td>
                <td>
                    <button onClick={() => editProduct(data)} className="btn btn-info btn-sm mr-2">
                        <i className="fas fa-edit"></i>
                    </button>
                    <button onClick={() => deleteProduct(id)} className="btn btn-danger btn-sm">
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        }
        </>
    )
}
