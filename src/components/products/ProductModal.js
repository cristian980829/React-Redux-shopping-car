import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Modal from 'react-modal';
import { uiCloseModal } from '../../actions/ui';
// import Swal from 'sweetalert2';

// import { eventAddNew, eventClearActiveEvent, eventUpdated } from '../../actions/events';


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

const initProduct = {
    name: '',
    price: 0,
    quantity: 0
}


export const ProductModal = () => {

    const { modalOpen } = useSelector( state => state.ui );
    // const { activeEvent } = useSelector( state => state.calendar );
    const dispatch = useDispatch();

    const [ nameValid, setNameValid ] = useState(true);
    
    const [formValues, setFormValues] = useState( initProduct );

    const { name, price, quantity } = formValues;

    // useEffect(() => {
    //     if ( activeEvent ) {
    //         setFormValues( activeEvent );
    //     } else {
    //         setFormValues( initEvent );
    //     }
    // }, [activeEvent, setFormValues])



    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }


    const closeModal = () => {
        // TODO: cerrar el modal
        dispatch( uiCloseModal() );
        // dispatch( eventClearActiveEvent() );
        setFormValues( initProduct );
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        
        if ( name.trim().length < 2 ) {
            return setNameValid(false);
        }

        // if ( activeEvent ) {
        //     dispatch( eventUpdated( formValues ) )
        // } else {
        //     dispatch( eventAddNew({
        //         ...formValues,
        //         id: new Date().getTime(),
        //         user: {
        //             _id: '123',
        //             name: 'Fernando'
        //         }
        //     }) );
        // }


        setNameValid(true);
        closeModal();
        
    }


    return (
        <Modal
          isOpen={ modalOpen }
          onRequestClose={ closeModal }
          style={ customStyles }
          closeTimeoutMS={ 200 }
          className="modal"
          overlayClassName="modal-fondo"
        >
            <h4>Add product</h4>
            {/* <h1> { (activeProduct)? 'Editar producto': 'Nuevo producto' } </h1> */}
            <hr />
            <form 
                className="container"
                onSubmit={ handleSubmitForm }
            >
                <div className="form-group">
                    <input 
                        type="text" 
                        className={ `form-control ${ !nameValid && 'is-invalid' } `}
                        placeholder="Product name"
                        name="name"
                        autoComplete="off"
                        value={ name }
                        onChange={ handleInputChange }
                    />
                </div>

                <div className="form-group">
                    <input 
                        type="number" 
                        className={ `form-control ${ !nameValid && 'is-invalid' } `}
                        placeholder="Price"
                        name="price"
                        autoComplete="off"
                        value={ name }
                        onChange={ handleInputChange }
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Save</span>
                </button>

            </form>

        </Modal>
    )
}
