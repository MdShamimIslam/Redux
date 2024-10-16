import { useSelector } from "react-redux";
import ChatItem from "./ChatItem";
import { useGetConversationsQuery } from "../../../features/conversations/conversationsApi";
import Error from "../../ui/Error";
import { Link } from "react-router-dom";
import gravatarUrl from "gravatar-url";
import moment from "moment";
import getPartnerInfo from "../../../utils/getPartnerInfo";

const ChatItems = () => {
  const { user } = useSelector((state) => state.auth);
  const {email} = user || {};
  const {
    data: conversations,
    isLoading,
    isError,
    error,
  } = useGetConversationsQuery(email);
  console.log(conversations)

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <li className="m-2 text-center">Loading...</li>;
  }
   else if (!isLoading && isError) {
    content = (
      <li className="m-2 text-center">
        <Error message={error?.data} />
      </li>
    );
  } 
  else if (!isLoading && !isError && conversations?.length === 0) {
    content = <li className="m-2 text-center">No conversations found!</li>;
  } 
  else if (!isLoading && !isError && conversations?.length > 0) {

    content = conversations?.map((conversation) => {
      const { id, message, timestamp } = conversation;
      const { name, email: partnerEmail } = getPartnerInfo(
        conversation.users,
        email
      );

      return (
        <li key={id}>
          <Link to={`/inbox/${id}`}>
            <ChatItem
              avatar={gravatarUrl(partnerEmail, {
                size: 80,
              })}
              name={name}
              lastMessage={message}
              lastTime={moment(timestamp).fromNow()}
            />
          </Link>
        </li>
      );
    });
  }

  return <ul className="overflow-auto">{content}</ul>;
};

export default ChatItems;
