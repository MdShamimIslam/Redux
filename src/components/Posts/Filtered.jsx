import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../features/posts/postsSlice";

const Filtered = () => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.posts.selectedFilter);

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="sidebar-content">
      <h4>Filter</h4>
      <div className="radio-group ">
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-all"
            className="radio"
            checked={selectedFilter === "all"}
            value="all"
            onChange={handleFilterChange}
          />
          <label htmlFor="lws-all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            id="lws-saved"
            className="radio"
            checked={selectedFilter === "saved"}
            value="saved"
            onChange={handleFilterChange}
          />
          <label htmlFor="lws-saved">Saved</label>
        </div>
      </div>
    </div>
  );
};

export default Filtered;
