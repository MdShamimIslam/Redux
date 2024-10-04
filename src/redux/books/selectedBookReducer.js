import { CLEAR_SELECTED_BOOK, SET_SELECTED_BOOK } from "./actionTypes";


const selectedBookReducer = (state = null, action) => {
    switch (action.type) {
      case SET_SELECTED_BOOK:
        return action.payload;

      case CLEAR_SELECTED_BOOK:
        return null;

      default:
        return state;
    }
  };
  
  export default selectedBookReducer;