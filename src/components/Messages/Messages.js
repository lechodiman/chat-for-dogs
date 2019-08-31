import React from "react";
import MessageItem from "./MessageItem";

const Messages = ({ messages }) => {
  return (
    <div className="chat">
      <div className="messages">
        {messages.map((message, index) => (
          <li key={index}>
            <MessageItem message={message}></MessageItem>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Messages;
