import { FaLocationArrow } from "react-icons/fa6";
import { MdOutlineEmojiEmotions } from "react-icons/md";

const Options = () => {
  return (
    <div className="flex items-center justify-between w-full p-3 border-t border-gray-300">
      <button>
        <MdOutlineEmojiEmotions className="text-xl" />
      </button>

      <input
        type="text"
        placeholder="Message"
        className="block w-full py-2 pl-4 mx-3 bg-gray-100 focus:ring focus:ring-violet-500 rounded-full outline-none focus:text-gray-700"
        name="message"
        required
      />
      <button type="submit">
        <FaLocationArrow className="w-7 h-7 text-gray-500 " />
      </button>
    </div>
  );
};

export default Options;
