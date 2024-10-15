import { FaRegEdit } from "react-icons/fa";
import ChatItems from "../ChatItems/ChatItems";
import Modal from "../Modal/Modal";
import { useState } from "react";

const Sidebar = () => {
  const [opened, setOpened] = useState(false);

  const controlModal = () => {
    setOpened((prevState) => !prevState);
  };

  return (
    <div className="w-[100px] border-r border-t-0 border-gray-300 lg:col-span-1 md:w-full">
      <div className="h-[65px] hover:text-blue-600 cursor-pointer text-center text-grey-500 p-4 border-b border-gray-300 flex md:justify-end justify-center">
        <FaRegEdit onClick={controlModal} className="text-xl" />
      </div>
      <ChatItems />
      {/* <Blank /> */}
      <Modal open={opened} control={controlModal} />
    </div>
  );
};

export default Sidebar;
