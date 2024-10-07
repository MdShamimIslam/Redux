import Player from "../components/Description/Player";
import VideoDescription from "../components/Description/VideoDescription";
import RelatedVideoList from "../components/List/RelatedVideoList";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchVideo } from "../features/video/videoSlice";
import Loading from "../components/Loading";

const Video = () => {
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );
  const dispatch = useDispatch();
  const { videoId } = useParams();

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  const { id, link, title, tags} = video || {} ;

  let content;

  if (isLoading) {
    content = <Loading />;
  }

  if (isError && !isLoading) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isError && !isLoading && !video?.id) {
    content = <div className="col-span-12">No Videos found</div>;
  }

  if (!isError && !isLoading && video?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          <Player link={link} title={title} />
          <VideoDescription video={video} />
        </div>
        <RelatedVideoList id={id} tags={tags} />
      </div>
    );
  }

  return (
    <section className="pt-6 pb-20">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        {content}
      </div>
    </section>
  );
};

export default Video;
