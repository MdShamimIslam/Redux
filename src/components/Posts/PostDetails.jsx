import { useDispatch, useSelector } from "react-redux";
import { likePost, toggleSavedPost } from "../../features/posts/postsSlice";

const PostDetails = ({ post, postId }) => {
  const dispatch = useDispatch();
  const savedPosts = useSelector((state) => state.posts.savedPosts);

  const post2 = useSelector((state) => state.posts.posts.find((p) => p.id === postId));


  const { id, image, title, tags, likes, description } = post;

  const handleLike = () => {
    dispatch(likePost(id));
  };

  // Check if the post is saved
  const isSaved = savedPosts.some((savedPost) => savedPost.id === id);

  const handleSaved = () => {
    dispatch(toggleSavedPost(id));
  };

  return (
    <main className="post">
      <img
        src={image}
        alt="githum"
        className="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          {tags?.map((tag) => (
            <span key={tag}>#{tag},</span>
          ))}
        </div>
        <div className="btn-group">
          <button
            onClick={handleLike}
            className="like-btn"
            id="lws-singleLinks"
          >
            <i className="fa-regular fa-thumbs-up"></i>
            { post2 ? post2?.likes : likes }
          </button>
          <button
            onClick={handleSaved}
            className={`${isSaved && "active"} save-btn`}
            id="lws-singleSavedBtn"
          >
            <i className="fa-regular fa-bookmark"></i>
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>
        <div className="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};

export default PostDetails;
