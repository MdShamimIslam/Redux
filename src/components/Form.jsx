import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import updateBook from "../redux/books/thunk/updateBook";
import { useEffect } from "react";
import addBook from "../redux/books/thunk/addBook";
import { clearSelectedBook } from "../redux/books/actions";


const Form = () => {
  const { register, handleSubmit,reset } = useForm();
  const dispatch = useDispatch();
  const selectedBook = useSelector((state) => state.selectedBook);

  useEffect(() => {
    if (selectedBook) {
      reset(selectedBook);
    }
  }, [selectedBook, reset]);

  const onSubmit = ({name,author,thumbnail,price,rating,featured}) => {
    const bookInfo = {
      name,
      author,
      thumbnail,
      price: parseFloat(price),
      featured,
      rating:parseInt(rating)

    }

    if (selectedBook) {
      dispatch(updateBook(selectedBook.id, bookInfo));
      dispatch(clearSelectedBook());
      reset({
        name: "",
        author: "",
        thumbnail: "",
        price: "",
        rating: "",
        featured: false,
      })
    } else {
      dispatch(addBook(bookInfo));
      reset()
    }

  };

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center"> {selectedBook ? "Update Book" : "Add New Book"}</h4>
      <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <label htmlFor="name">Book Name</label>
          <input
            {...register("name")}
            required
            className="text-input"
            type="text"
            id="input-Bookname"
            name="name"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="category">Author</label>
          <input
            {...register("author")}
            required
            className="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image">Image Url</label>
          <input
            {...register("thumbnail")}
            required
            className="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label htmlFor="price">Price</label>
            <input
              {...register("price")}
              required
              className="text-input"
              type="text"
              id="input-Bookprice"
              name="price"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity">Rating</label>
            <input
              {...register("rating")}
              required
              className="text-input"
              type="number"
              id="input-Bookrating"
              name="rating"
              min="1"
              max="5"
            />
          </div>
        </div>

        <div className="flex items-center">
          <input
            {...register("featured")}
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            className="w-4 h-4"
          />
          <label htmlFor="featured" className="ml-2 text-sm">
            This is a featured book
          </label>
        </div>

        <button type="submit" className="submit" id="submit">
        {selectedBook ? "Update Book" : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default Form;
