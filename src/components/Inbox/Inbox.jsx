import Navbar from "../Navbar/Navbar";
import ChatBody from "./ChatBody/ChatBody";
import Sidebar from "./Sidebar/Sidebar";

const Inbox = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto -mt-1">
        <div className="min-w-full border rounded flex lg:grid lg:grid-cols-3">
          <Sidebar />
          <ChatBody />
        </div>
      </div>
    </>
  );
};

export default Inbox;
