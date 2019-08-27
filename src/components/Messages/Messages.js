import React from "react";
import MessageItem from "./MessageItem";

const Messages = ({ messages }) => {
  return (
    <div className="chat">
      <div className="messages">
        {Object.keys(messages).map(key => {
          return <MessageItem message={messages[key]} key={key}></MessageItem>;
        })}
      </div>
    </div>
  );
};

export default Messages;
