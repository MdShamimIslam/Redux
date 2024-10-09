import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedPosts } from "../../features/relatedPosts/relatedPostsSlice";
import RelatedPostsCard from "./RelatedPostsCard";

const RelatedPosts = ({ currentId, tags }) => {
  const dispatch = useDispatch();
  const {relatedPosts,isLoading,isError,error} = useSelector(state => state.relatedPosts);
 
  useEffect(() => {
    dispatch(fetchRelatedPosts({ id:currentId, tags }));
  }, [dispatch, currentId, tags]);

  // Decide what to render
let content;

if (isLoading) {
  content = <p>Loading...</p>;
}
if (isError && !isLoading) {
  content = <div className="text-red-800">{error}</div>;
}
if (!isError && !isLoading && relatedPosts?.length === 0) {
  content = <div>No Related Posts found</div>;
}
if (!isError && !isLoading && relatedPosts?.length > 0) {
  content = relatedPosts?.map((post) => <RelatedPostsCard key={post.id} post={post} /> )
}

  return (
    <aside>
      <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      <div className="space-y-4 related-post-container">
        {content}
      </div>
    </aside>
  );
};

export default RelatedPosts;
