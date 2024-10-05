
import VideoGrid from "../components/Grid/VideoGrid";
import Pagination from "../components/Pagination";
import Tags from "../components/tags/Tags";

const Home = () => {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
};

export default Home;
