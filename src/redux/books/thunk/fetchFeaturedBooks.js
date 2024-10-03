
import { loaded } from "../actions";

const fetchFeaturedBooks = async (dispatch) => {
  const res = await fetch("http://localhost:9000/books?featured=true");
  const featuredBooks = await res.json();

  dispatch(loaded(featuredBooks));
};

export default fetchFeaturedBooks;