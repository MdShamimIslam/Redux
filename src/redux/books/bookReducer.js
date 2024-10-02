import { LOADED } from "./actionTypes";
import { initialState } from "./initialState";


 const booksReducer = ( state = initialState, action )=> {
    switch (action.type) {
        case LOADED:
            return action.payload;
            
    
        default:
            return state;
    }
}

export default booksReducer;