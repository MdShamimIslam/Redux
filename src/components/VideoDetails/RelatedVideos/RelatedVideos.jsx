import {  useGetRelatedVideosQuery } from "../../../features/api/apiSlice";
import RelatedVideoItem from "./RelatedVideoItem";

const RelatedVideos = ({id,title}) => {
  const { data:relatedVideos, isLoading, isError } = useGetRelatedVideosQuery({id,title});


  // const { data:allVideos, isLoading, isError } = useGetVideosQuery();
  // let relatedVideos = [];
  // if (!isLoading && allVideos) {
  //   const tags = title.split(" ");
  //   relatedVideos = allVideos.filter((video) =>
  //     tags.some((tag) => video.title.toLowerCase().includes(tag.toLowerCase())) &&
  //     video.id !== id
  //   ).slice(0, 4);
  // }


// decide what to render
let content = null;

if (isLoading) {
    content = <p>Loading...</p>
}

if (!isLoading && isError) {
    content = <p>There was an error</p>
}

if (!isLoading && !isError && relatedVideos?.length === 0) {
    content = <p>No Related Videos found!</p>
}

if (!isLoading && !isError && relatedVideos?.length > 0) {
    content = relatedVideos?.map((video) => <RelatedVideoItem key={video.id} video={video} />);
}

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
     {content}
    </div>
  );
};

export default RelatedVideos;
