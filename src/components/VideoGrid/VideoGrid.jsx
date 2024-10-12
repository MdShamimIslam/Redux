import SingleVideo from "./SingleVideo";
import { useGetVideosQuery } from "../../features/api/apiSlice";
import VideoLoader from "../ui/loader/VideoLoader";
import Error from "../ui/loader/Error";

const VideoGrid = () => {
  const { data:videos, isError, isLoading } = useGetVideosQuery();

 // decide what to render
 let content = null;

 if (isLoading) {
     content = (
         <>
             <VideoLoader />
             <VideoLoader />
             <VideoLoader />
             <VideoLoader />
         </>
     );
 }

 if (!isLoading && isError) {
     content = <Error message="There was an error" />;
 }

 if (!isLoading && !isError && videos?.length === 0) {
     content = <Error message="No videos found!" />;
 }

 if (!isLoading && !isError && videos?.length > 0) {
     content = videos?.map((video) => <SingleVideo key={video.id} video={video} />);
 }

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
    </section>
  )
}

export default VideoGrid;