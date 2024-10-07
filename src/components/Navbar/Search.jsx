import { useDispatch, useSelector } from "react-redux";
import { searched } from "../../features/filters/filterSlice";
import { useState } from "react";
import { useMatch, useNavigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const {search} = useSelector( state => state.filter);
  const [input,setInput] = useState(search);
  const match = useMatch('/');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));

    // if user is not home page, then redirect to home page
    if (!match) {
      navigate('/');
    }

  }

  return (
    <form onSubmit={handleSubmit}>
    <input
        className="outline-none border-none mr-2"
        type="search"
        name="search"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
    />
</form>
  )
}

export default Search
