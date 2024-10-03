
import { added } from "../actions";

const addBook = (bookInfo) => {
  return async (dispatch,getState) => {

    const currentBooks = getState().books;
    const highestId = currentBooks.reduce((max, book) => (book.id > max ? book.id : max), 0) ;
    const newBook = {
      ...bookInfo,
      id: String(parseInt(highestId) + 1),
    };

    const res = await fetch("http://localhost:9000/books", {
      method: "POST",
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(newBook),
    });

    const book = await res.json();

    dispatch(added(book));

  };
};

export default addBook;
