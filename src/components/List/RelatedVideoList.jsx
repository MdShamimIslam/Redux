import { useDispatch, useSelector } from "react-redux";
import VideoListItem from "./VideoListItem";
import { useEffect } from "react";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../Loading";

const RelatedVideoList = ({id,tags}) => {
const dispatch = useDispatch();
const {relatedVideos,isLoading,isError,error} = useSelector(state => state.relatedVideos)

useEffect(()=>{
  dispatch(fetchRelatedVideos({id,tags}))
},[dispatch,id,tags]);

// Decide what to render
let content;

if (isLoading) {
  content = <Loading/>;
}
if (isError && !isLoading) {
  content = <div className="col-span-12">{error}</div>;
}
if (!isError && !isLoading && relatedVideos?.length === 0) {
  content = <div className="col-span-12">No Related Videos found</div>;
}
if (!isError && !isLoading && relatedVideos?.length > 0) {
  content = relatedVideos?.map((video) => <VideoListItem key={video.id} video={video} /> )
}

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
};

export default RelatedVideoList;
