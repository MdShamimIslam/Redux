import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const LinkeUnlike = ({likes,unlikes}) => {
  return (
    <div className="flex gap-10 w-48">
    <div className="flex gap-1">
        <div className="shrink-0">
            <BiLike className="text-2xl" />
        </div>
        <div
            className="text-sm leading-[1.7142857] text-slate-600"
        >
            {likes}
        </div>
    </div>
    <div className="flex gap-1">
        <div className="shrink-0">
        <BiDislike className="text-2xl"  />
        </div>
        <div
            className="text-sm leading-[1.7142857] text-slate-600"
        >
           {unlikes}
        </div>
    </div>
</div>
  )
}

export default LinkeUnlike
