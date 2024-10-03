import { ADDED, DELETED, LOADED, SEARCH_TERM } from "./actionTypes"

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
}

export const deleted = (bookId) => {
    return {
        type: DELETED,
        payload: bookId
    }
}




