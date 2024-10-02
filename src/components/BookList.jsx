import { useDispatch, useSelector } from "react-redux";
import Book from "./Book";
import { useEffect } from "react";
import fetchAllBooks from '../redux/books/thunk/fetchAllBooks';

const BookList = () => {
    const books = useSelector((state)=> state.books);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchAllBooks)
    },[dispatch])

   
  return (
    <div className="lws-bookContainer">
        
        {
            books.length > 0 ? books?.map((book)=><Book key={book.id} book={book} />)
            
            : <p>No Books Found.Please Add One</p>
        }
        
    </div>
  );
};

export default BookList;
