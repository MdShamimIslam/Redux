import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import { useEffect } from "react";
import fetchAllBooks from "../redux/books/thunk/fetchAllBooks";

const BookList = () => {
  const books = useSelector((state) => state.books);
  const searchTerm = useSelector((state) => state.searchTerm);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks);
  }, [dispatch]);

  const filteredBooks = searchTerm
    ? books.filter((book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : books;

  return (
    <div className="lws-bookContainer">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => <Book key={book.id} book={book} />)
      ) : (
        <p className="text-lg text-purple-700">No Books Found Here...Please Add One</p>
      )}
    </div>
  );
};

export default BookList;
