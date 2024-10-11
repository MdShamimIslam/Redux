import { Link } from "react-router-dom";
import RelatedVideos from "./RelatedVideos/RelatedVideos";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const VideoDetails = () => {
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {/* <!-- video player --> */}
            <iframe
              width="100%"
              className="aspect-video"
              src="https://www.youtube-nocookie.com/embed/6O4s7v28nlw"
              title="Some video title"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>

            {/* <!-- video description --> */}
            <div>
              <h1 className="text-lg font-semibold tracking-tight text-slate-800">
                Some video title
              </h1>
              <div className="pb-4 flex items-center space-between border-b">
                <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                  Uploaded on 23 Nov 2022
                </h2>

                {/* <!-- delete/edit --> */}
                <div className="flex gap-10 w-48">
                    <Link  to="/edit-video/1"
                      className="text-xl leading-[1.7142857] text-slate-600"
                    >
                    <FaEdit />
                    </Link>
                
                  <div className="flex gap-1">
                    
                    <div className="text-xl text-red-600 leading-[1.7142857] cursor-pointer">
                    
                    <RiDeleteBin6Line/>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
                Some video description here
              </div>
            </div>
          </div>
          <RelatedVideos />
        </div>
      </div>
    </section>
  );
};

export default VideoDetails;
