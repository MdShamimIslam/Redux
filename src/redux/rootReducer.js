import { combineReducers } from "redux";
import booksReducer from "./books/bookReducer";
import searchReducer from "./books/searchReducer";

 const rootReducer = combineReducers({
    books: booksReducer,
    searchTerm: searchReducer,
});

export default rootReducer;