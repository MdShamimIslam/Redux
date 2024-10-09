import { useDispatch } from "react-redux";
import { setSortOrder } from "../../features/posts/postsSlice";


const Short = () => {
  const dispatch = useDispatch();

  const handleSortChange = (e) => {
    dispatch(setSortOrder(e.target.value));
  };

  return (
    <div className="sidebar-content">
    <h4>Sort</h4>
    <select
      name="sort"
      id="lws-sort"
      className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
      onChange={handleSortChange} 
    >
      <option value="">Default</option>
      <option value="newest">Newest</option>
      <option value="most_liked">Most Liked</option>
    </select>
  </div>
  )
}

export default Short;
