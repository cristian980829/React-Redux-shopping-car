import { types } from "../types/types";

export const addToCart = (id) =>{
    return {
        type: types.ADD_TO_CART,
        payload: id
    }
}