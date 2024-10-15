import { PiEmpty } from "react-icons/pi";

const Blank = () => {
  return (
    <div className="relative w-full overflow-y-hiddeen h-[calc(100vh_-_64px)] flex flex-col items-center justify-center text-gray-700 p-5 space-y-5">
      <div>
        <PiEmpty className="text-3xl text-red-700" />
      </div>
      <div className="text-center">
        No messages selected! Select an user from left sidebar to view all
        messages
      </div>
    </div>
  );
};

export default Blank;
