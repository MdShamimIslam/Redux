import { combineReducers } from "redux";
import { reducer } from "./product/reducer";
import { cartReducer } from "./cart/reducer";


export const rootReducer = combineReducers({
    products: reducer,
    carts: cartReducer
})