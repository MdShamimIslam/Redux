import { ADDED, DELETED, LOADED, UPDATED } from "./actionTypes";
import { initialState } from "./initialState";

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;

    case ADDED:
      return [
        ...state,
        {
          ...action.payload,
        },
      ];

    case UPDATED:
      return state.map((book) =>
        book.id === action.payload.id ? { ...action.payload } : book
      );

    case DELETED:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default booksReducer;
