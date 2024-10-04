import { combineReducers } from "redux";
import booksReducer from "./books/bookReducer";
import searchReducer from "./books/searchReducer";
import selectedBookReducer from "./books/selectedBookReducer";

 const rootReducer = combineReducers({
    books: booksReducer,
    searchTerm: searchReducer,
    selectedBook: selectedBookReducer,
});

export default rootReducer;