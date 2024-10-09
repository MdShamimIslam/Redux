import { Link, useParams } from "react-router-dom";
import PostDetails from "../components/Posts/PostDetails";
import RelatedPosts from "../components/Posts/RelatedPosts";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../features/post/postSlice";

const BlogPosts = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {post} = useSelector(state => state.post);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="container mt-8">
        <Link
          to="/"
          className="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i className="mr-2 fa-solid fa-house"></i>Go Home
        </Link>
      </div>
      <section className="post-page-container">
        <PostDetails post={post}/>
        <RelatedPosts currentId={post?.id} tags={post?.tags} />
      </section>
    </>
  );
};

export default BlogPosts;
