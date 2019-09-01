import React from "react";

const MessageForm = ({ avatar, message, onMessageChange, onMessageSubmit }) => {
  return (
    <div className="form">
      <img src={avatar} alt="dog" className="avatar" />

      <input
        className="message-input"
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
