import { ADDED, DELETED, LOADED, SEARCH_TERM, SET_SELECTED_BOOK, CLEAR_SELECTED_BOOK, UPDATED } from "./actionTypes"

export const loaded = (books) => {
    return {
        type: LOADED,
        payload: books
    }
}

export const setSearchTerm = (term) => {
    return {
      type: SEARCH_TERM,
      payload: term,
    };
  };

export const added = (book) => {
    return {
        type: ADDED,
        payload: book
    }
};

export const setSelectedBook = (book) => {
    return {
        type: SET_SELECTED_BOOK,
        payload: book
    }
};

export const clearSelectedBook = () => {
    return {
        type: CLEAR_SELECTED_BOOK,
      }
}


export const updated = (book) => {
  return {
    type: UPDATED,
    payload: book,
  };
};


export const deleted = (bookId) => {
    return {
        type: DELETED,
        payload: bookId
    }
}




