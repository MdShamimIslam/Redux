import { PiEmpty } from "react-icons/pi";

const ChatBlank = () => {
  return (
    <div className="h-[calc(100vh_-_129px)] flex md:flex-col md:space-y-4 items-center justify-center text-gray-700">
      <PiEmpty className="text-3xl text-red-700" />
      <div className="-rotate-90 md:rotate-0 min-w-[130px] md:min-w-0">
        No messages yet
      </div>
    </div>
  );
};

export default ChatBlank;
