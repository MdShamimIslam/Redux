
import Blank from "../../Inbox/Blank/Blank";
import Navbar from "../../Inbox/Navbar/Navbar";
import Sidebar from "../../Inbox/Sidebar/Sidebar";

const Conversation = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto -mt-1">
        <div className="min-w-full border rounded flex lg:grid lg:grid-cols-3">
          <Sidebar />
          <div className="w-full lg:col-span-2 lg:block">
            <div className="w-full grid conversation-row-grid">
              <Blank />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
