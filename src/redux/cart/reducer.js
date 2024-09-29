import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, DELETE_CART } from "./actions";
import { initialState } from "./initialState";

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const productInCart = state.find(
        (item) => item?.id === action.payload.product.id
      );

      if (productInCart) {
        return state.map((item) =>
          item.id === action.payload.product.id
            ? {
                ...item,
                price: item.price + action.payload.product.price,
                quantity: item.quantity + 1,
              }
            : item
        );
      } else {
        return [
          ...state,
          {
            ...action.payload.product,
            initialPrice: action.payload.product.price,
            quantity: 1,
          },
        ];
      }
    }

    case INCREMENT_QUANTITY: {
        return state.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1, price: item.price + item.initialPrice }
            : item
        );
      }
  
      case DECREMENT_QUANTITY: {
        return state.map(item =>
          item.id === action.payload 
            ? { ...item, quantity: item.quantity - 1, price: item.price - item.initialPrice }
            : item
        );
      }

      case DELETE_CART: {
        const productInCart = state.find(item => item.id === action.payload.id);
        if (productInCart) {
          return state.filter(item => item.id !== action.payload.id);
        }
        return state;
      }

  

    default:
      return state;
  }
};
