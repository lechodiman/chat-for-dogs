import React from "react";
import MessageItem from "./MessageItem";

import List from "@material-ui/core/List";

const Messages = ({ messages }) => {
  return (
    <List>
      {messages.map((message, index) => (
        <MessageItem key={index} message={message}></MessageItem>
      ))}
    </List>
  );
};

export default Messages;
