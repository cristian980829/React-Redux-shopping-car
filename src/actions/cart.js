import { types } from "../types/types";

export const addToCart = (id) =>{
    return {
        type: types.ADD_TO_CART,
        payload: id
    }
}

export const addOneFromCart = (id) => (
    { type: types.ADD_ONE_FROM_CART, payload: id}
)

export const deleteOneFromCart = (id) => (
    { type: types.REMOVE_ONE_FROM_CART, payload: id}
)

export const deleteAllFromCart = (id) => (
    { type: types.REMOVE_ALL_FROM_CART, payload: id}
)

export const clearCart = () => (
    { type: types.CLEAR_CART}
)

export const deleteOneProduct = (id) => (
    { type: types.REMOVE_ONE_PRODUCT, payload: id}
)

export const addProduct = (product) =>{
    return {
        type: types.ADD_PRODUCT,
        payload: product
    }
}

export const editProduct = (product) =>{
    return {
        type: types.EDIT_PRODUCT,
        payload: product
    }
}

export const productSetActive = (product) =>{
    return {
        type: types.PRODUCT_SET_ACTIVE,
        payload: product
    }
}

export const clearActiveProduct = () => ({ type: types.CLEAR_ACTIVE_PRODUCT });
