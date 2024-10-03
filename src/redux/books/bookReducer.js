
import { ADDED, DELETED, LOADED } from "./actionTypes";
import { initialState } from "./initialState";


 const booksReducer = ( state = initialState, action )=> {
    switch (action.type) {
        case LOADED:
            return action.payload;

        case ADDED:
            return [
                ...state,
               {   
                ...action.payload
               }
            ]   

        case DELETED:
            return state.filter((book)=> book.id !== action.payload)  
    
        default:
            return state;
    }
}

export default booksReducer;