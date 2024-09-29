import { ADD_PRODUCT } from "./actions"


export const addProduct = (productInfo)=> {
    
    return {
        type: ADD_PRODUCT,
        payload: productInfo
    }
}