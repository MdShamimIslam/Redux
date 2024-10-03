import { deleted } from "../actions";


const deleteBook = (bookId) => {
    return async(dispatch) => {
           const res = await fetch(`http://localhost:9000/books/${bookId}`,{
                method: "DELETE",
            });
          
            if (res.ok) {
                dispatch(deleted(bookId));
            } else {
                console.error("Failed to delete the book.");
            }
       
    }
}

export default deleteBook;