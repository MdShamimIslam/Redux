import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const PostCard = ({post}) => {
const {id,title,image,createdAt,likes,tags} = post;
const savedPosts = useSelector(state => state.posts.savedPosts);

const isSaved = savedPosts?.some(post => post.id === id);


  return (
    <div className="lws-card">
      <Link to={`/blogs/${id}`}>
        <img
          src={image}
          className="lws-card-image"
          alt="Top Github Alternatives"
        />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up"></i>{likes}
          </p>
        </div>
        <Link to={`/blogs/${id}`} className="lws-postTitle">
         {title}
        </Link>
        <div className="lws-tags">
          {
            tags?.map(tag => <span key={tag}>#{tag},</span> )
          }
        </div>
        <div className="flex gap-2 mt-4">
          <span className={isSaved ? 'active' : ''}> { isSaved ? "Saved" : "Save"} </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
