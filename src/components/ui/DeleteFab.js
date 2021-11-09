import React from 'react';
// import { useDispatch } from 'react-redux';
// import { uiOpenModal } from '../../actions/ui';

export const DeleteFab = () => {

    // const dispatch = useDispatch();

    const handleClickNew = () => {
        // dispatch( uiOpenModal() );
        console.log('funcionando!')
    }


    return (
        <button
            className="btn btn-danger fab-remove"
            onClick={ handleClickNew }
        >
            <i className="fas fa-trash-alt"></i>
        </button>
    )
}
