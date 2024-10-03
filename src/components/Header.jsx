import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import fetchAllBooks from "../redux/books/thunk/fetchAllBooks";
import fetchFeaturedBooks from "../redux/books/thunk/fetchFeaturedBooks";

const Header = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllBooks);
  }, [dispatch]);

  const handleAllClick = () => {
    setActiveFilter('all');
    dispatch(fetchAllBooks); 
  };

  const handleFeaturedClick = () => {
    setActiveFilter('featured'); 
    dispatch(fetchFeaturedBooks); 
  };

  return (
    <div className="flex items-center justify-between mb-12">
      <h4 className="mt-2 text-xl font-bold">Book List</h4>
      <div className="flex items-center space-x-4">
      <button
          className={`filter-btn ${activeFilter === 'all' ? 'active-filter' : ''}`}
          id="lws-filterAll"
          onClick={handleAllClick}
        >
          All
        </button>
        <button
          className={`filter-btn ${activeFilter === 'featured' ? 'active-filter' : ''}`}
          id="lws-filterFeatured"
          onClick={handleFeaturedClick}
        >
          Featured
        </button>
      </div>
    </div>
  );
};

export default Header;
