import { updated } from "../actions";


const updateBook = (id, updatedBookInfo) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/books/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBookInfo),
    });

    if (res.ok) {
        const book = await res.json();
        dispatch(updated(book));
      } else {
        console.error("Failed to update book");
      }

  };
};

export default updateBook;