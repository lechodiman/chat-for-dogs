import React, { Fragment } from "react";
import MessageItem from "./MessageItem";

const Messages = ({ messages }) => {
  return (
    <div className="chat">
      <div className="messages">
        {messages.map((message, index) => (
          <Fragment key={index}>
            <MessageItem message={message}></MessageItem>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Messages;
