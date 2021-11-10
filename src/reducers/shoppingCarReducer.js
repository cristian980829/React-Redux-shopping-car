import { types } from "../types/types";

const init = { 
  products: [],
  activeProduct: null,
  cart: {
    list: [],
    totalQuantity: 0
  } 
}

export const shoppingInitialState = () => {
  return JSON.parse(localStorage.getItem('shoppingCar')) || init
};

export const shoppingCarReducer = ( state = shoppingInitialState(), action ) => {

    switch (action.type) {

    case types.ADD_PRODUCT: 
      return {
        ...state,
        products: [...state.products, action.payload,]
      }

    case types.EDIT_PRODUCT:
      const itemInCart = state.cart.list.find(
        (product) => product.id === action.payload.id
      );

      return itemInCart 
        ?
          {
            ...state,
            products: state.products.map(
                e => ( e.id === action.payload.id ) ? action.payload : e
            ),
            cart: {
              list: state.cart.list.map((item) =>
                item.id === itemInCart.id
                  ? {...action.payload, quantity: itemInCart.quantity}
                  : item
              ),
              totalQuantity: state.cart.totalQuantity
            }
          }
        :
          {
            ...state,
            products: state.products.map(
                e => ( e.id === action.payload.id ) ? action.payload : e
            )
          }

    case types.PRODUCT_SET_ACTIVE:
      return {
          ...state,
          activeProduct: action.payload
      }

    case types.CLEAR_ACTIVE_PRODUCT:
      return {
          ...state,
          activeProduct: null
      }

    case types.ADD_TO_CART: {
      const newItem = state.products.find(
        (product) => product.id === action.payload
      );

      const itemInCart = state.cart.list.find((item) => item.id === newItem.id);
      
      return itemInCart
        ? {
            ...state,
            cart: {
              list: state.cart.list.map((item) =>
                item.id === newItem.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
              totalQuantity: state.cart.totalQuantity + 1
            },
          }
        : {
            ...state,
            cart: {
              list: [...state.cart.list, { ...newItem, quantity: 1 }],
              totalQuantity: state.cart.totalQuantity + 1
            }
          };
    }

    case types.REMOVE_ONE_FROM_CART: {
      const itemToDelete = state.cart.list.find((item) => item.id === action.payload);

      return itemToDelete.quantity > 1
        ? {
            ...state,
            cart: {
              list: state.cart.list.map((item) =>
                item.id === action.payload
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
            ),
            totalQuantity: state.cart.totalQuantity - 1
            },
          }
        : {
            ...state,
            cart: {
              list: state.cart.list.filter((item) => item.id !== action.payload),
              totalQuantity: state.cart.totalQuantity - 1
            },
          };
    }

    case types.ADD_ONE_FROM_CART: {
      return {
            ...state,
            cart: {
              list: state.cart.list.map((item) =>
                item.id === action.payload
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
            ),
            totalQuantity: state.cart.totalQuantity + 1
            },
          }
    }

    case types.REMOVE_ALL_FROM_CART: {
      const item = state.cart.list.find((item) => item.id === action.payload);
      return {
        ...state,
        cart: {
          list: state.cart.list.filter((item) => item.id !== action.payload),
          totalQuantity: state.cart.totalQuantity - item.quantity
        },
      };
    }

    case types.CLEAR_CART:
      return {
          ...state,
          cart: {
            list: [],
            totalQuantity: 0
          } 
      };

    case types.REMOVE_ONE_PRODUCT: {
      const itemInCart = state.cart.list.find((item) => item.id === action.payload);
      return itemInCart
        ? {
          ...state,
          products: state.products.filter((item) => item.id !== action.payload),
          cart: {
            list: state.cart.list.filter((item) => item.id !== action.payload),
            totalQuantity: state.cart.totalQuantity - itemInCart.quantity
          }
        }
        : {
          ...state,
          products: state.products.filter((item) => item.id !== action.payload),
        }
    }


    default:
        return state;
    }
}