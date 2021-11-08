import { types } from "../types/types";

export const addToCart = (id) =>{
    return {
        type: types.ADD_TO_CART,
        payload: id
    }
}

export const deleteOneFromCart = (id) => (
    { type: types.REMOVE_ONE_FROM_CART, payload: id}
)

export const deleteAllFromCart = (id) => (
    { type: types.REMOVE_ALL_FROM_CART, payload: id}
)

export const clearCart = () => (
    { type: types.CLEAR_CART}
)