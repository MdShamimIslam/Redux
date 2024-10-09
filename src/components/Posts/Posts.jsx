import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts } from "../../features/posts/postsSlice";
import Filtered from "./Filtered";
import PostCard from "./PostCard";
import Short from "./Short";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, savedPosts, selectedFilter, isLoading, isError, error,sortOrder  } =
    useSelector((state) => state.posts);

  // fetching all posts
  useEffect(() => {
    dispatch(fetchAllPosts());
  }, [dispatch,sortOrder ]);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }

  if (!isLoading && !isError & (posts?.length === 0)) {
    content = <p>No Posts Found</p>;
  }

  // Determine which posts to show based on the selected filter
  const filteredPosts = selectedFilter === "saved" ? savedPosts : posts;

  if (!isLoading && !isError & (posts?.length > 0)) {
    content = filteredPosts.length ? (
      filteredPosts?.map((post) => <PostCard key={post.id} post={post} />)
    ) : (
      <p className="flex justify-center items-center text-xl">
        Not Yet To Saved Post
      </p>
    );
  }

  return (
    <section className="wrapper">
      <aside>
        <div className="sidebar-items">
          <Short />
          <Filtered />
        </div>
      </aside>
      <main className="post-container" id="lws-postContainer">
        {content}
      </main>
    </section>
  );
};

export default Posts;
