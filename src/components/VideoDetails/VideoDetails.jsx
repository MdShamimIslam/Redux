import RelatedVideos from "./RelatedVideos/RelatedVideos";
import Player from "./Player";
import VideoDescription from "./VideoDescription";
import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../features/api/apiSlice";

const VideoDetails = () => {
  const { id } = useParams();
  const { data: video, isLoading, isError } = useGetVideoQuery(id);

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  if (!isLoading && isError) {
    content = <p>There was an error</p>;
  }

  if (!isLoading && !isError && video?.id) {
    content = (
      <>
        <Player video={video} />
        <VideoDescription video={video} />
      </>
    );
  }

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {content}
          </div>
          {
            video?.id ? <RelatedVideos id={video?.id} title={video?.title} /> : isLoading ? <p>Related Videos Loading...</p>
            : <p>There was an error in Related Videos</p> 
          }
          
        </div>
      </div>
    </section>
  );
};

export default VideoDetails;
