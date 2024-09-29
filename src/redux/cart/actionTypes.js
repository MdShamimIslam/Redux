import { ADD_TO_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, DELETE_CART } from "./actions"


export const addToCart = (productId,product)=> {
    return {
        type: ADD_TO_CART,
        payload: { productId, product }
    }
}


export const deleteCart = (id,originalQuantity)=> {
    return {
        type: DELETE_CART,
        payload: {
            id,
            originalQuantity
        }
    }
}

export const incrementQuantity = (id) => ({
    type: INCREMENT_QUANTITY,
    payload: id,
  });
  
  export const decrementQuantity = (id) => ({
    type: DECREMENT_QUANTITY,
    payload: id,
  });