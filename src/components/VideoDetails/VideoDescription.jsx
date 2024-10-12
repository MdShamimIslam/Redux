import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const VideoDescription = ({ video }) => {
  const { title, date, id, description } = video;
  return (
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {title}
      </h1>
      <div className="pb-4 flex items-center space-between border-b">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Uploaded on {date}
        </h2>
        <div className="flex gap-10 w-48">
          <Link
            to={`/edit-video/${id}`}
            className="text-xl leading-[1.7142857] text-slate-600"
          >
            <FaEdit />
          </Link>

          <div className="flex gap-1">
            <div className="text-xl text-red-600 leading-[1.7142857] cursor-pointer">
              <RiDeleteBin6Line />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        {description}
      </div>
    </div>
  );
};

export default VideoDescription;
