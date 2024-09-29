import { ADD_TO_CART, DECREMENT_QUANTITY, DELETE_CART, INCREMENT_QUANTITY } from "../cart/actions";
import { ADD_PRODUCT } from "./actions";
import { initialState } from "./initialState";

export const reducer = (state = initialState, action) => {
  const nextProductsId = (products) => {
    const maxId = products.reduce(
      (acc, product) => Math.max(product.id, acc),
      -1
    );
    return maxId + 1;
  };

  switch (action.type) {
    case ADD_PRODUCT: {
      const { name, category, price, quantity } = action.payload;
      return [
        ...state,
        {
          id: nextProductsId(state),
          name,
          category,
          price,
          quantity,
          initialQuantity: quantity
        },
      ];
    }

    case ADD_TO_CART:
      return state.map((product) =>
        product.id === action.payload.productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

    case INCREMENT_QUANTITY:
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

    case DECREMENT_QUANTITY:
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
     
    case DELETE_CART: 
        return state.map((product) =>
            product.id === action.payload.id
                ? {
                    ...product,
                    quantity: product.initialQuantity 
                }
                : product
        );
    

    default:
      return state;
  }
};
