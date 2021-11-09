import { types } from "../types/types";

export const shoppingInitialState = {
  products: [
    { id: 1, name: "Producto 1", price: 100 },
    { id: 2, name: "Producto 2", price: 200 },
    { id: 3, name: "Producto 3", price: 300 },
    { id: 4, name: "Producto 4", price: 400 },
    { id: 5, name: "Producto 5", price: 500 },
    { id: 6, name: "Producto 6", price: 600 },
  ],
  cart: {
    list: [],
    totalQuantity: 0
  },
};

export const shoppingCarReducer = ( state = shoppingInitialState, action ) => {

    switch (action.type) {

    case types.ADD_PRODUCT: 
      return {
        ...state,
        products: [...state.products, action.payload,]
      }


    case types.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.id === action.payload
      );

      let itemInCart = state.cart.list.find((item) => item.id === newItem.id);
      
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
      let itemToDelete = state.cart.list.find((item) => item.id === action.payload);

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
      return shoppingInitialState;

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