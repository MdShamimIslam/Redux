import { Link } from "react-router-dom";


const RelatedPostsCard = ({post}) => {
  const {id,image,title,tags,createdAt} = post;
  return (
    <div className="card">
          <Link to={`/blogs/${id}`}>
            <img src={image} alt={title} />
          </Link>
          <div className="p-4">
            <Link to={`/blogs/${id}`}
              className="text-lg post-title lws-RelatedPostTitle"
            >
              {title}
            </Link>
            <div className="mb-0 tags">
            {
            tags?.map(tag => <span key={tag}>#{tag},</span> )
          }
            </div>
            <p>{createdAt}</p>
          </div>
        </div>
  )
}

export default RelatedPostsCard
