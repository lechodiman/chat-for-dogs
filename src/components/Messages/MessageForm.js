import React from "react";

const MessageForm = ({ message, onMessageChange, onMessageSubmit }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="msg"
        onChange={onMessageChange}
        value={message}
        onKeyDown={onMessageSubmit}
      />
    </div>
  );
};

export default MessageForm;
