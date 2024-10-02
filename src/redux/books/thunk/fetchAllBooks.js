import { loaded } from "../actions";

 const fetchAllBooks = async (dispatch) => {
  const res = await fetch("http://localhost:9000/books");
  const books = await res.json();

  dispatch(loaded(books));

};

export default fetchAllBooks;
