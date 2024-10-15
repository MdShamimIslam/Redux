import Message from "./Message";

const Messages = () => {
  return (
    <div className="relative w-full p-6 overflow-y-auto">
      <ul className="space-y-2">
        <Message justify="start" message="How are you?" />
        <Message justify="end" message="I am fine what about you?" />
        <Message justify="start" message="Hi" />
        <Message justify="start" message="How are you?" />
        <Message justify="end" message="I am fine what about you?" />
        <Message justify="start" message="Hi" />
        <Message justify="start" message="How are you?" />
        <Message justify="end" message="I am fine what about you?" />
        <Message justify="start" message="Hi" />
        <Message justify="start" message="How are you?" />
        <Message justify="end" message="I am fine what about you?" />
        <Message justify="start" message="Hi" />
        <Message justify="start" message="How are you?" />
        <Message justify="end" message="I am fine what about you?" />
        <Message justify="start" message="Hi" />
        <Message justify="start" message="How are you?" />
        <Message justify="end" message="I am fine what about you?" />
      </ul>
    </div>
  );
};

export default Messages;
