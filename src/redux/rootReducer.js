import { combineReducers } from "redux";
import booksReducer from "./books/bookReducer";



 const rootReducer = combineReducers({
    books: booksReducer
});

export default rootReducer;