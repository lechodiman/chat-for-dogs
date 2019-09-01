import React from "react";
import Moment from "react-moment";

const MessageItem = ({ message: { date, sender, message, avatar }, key }) => {
  return (
    <div className="message" key={key}>
      <img src={avatar} alt="dog" className="message-avatar" />
      <div className="message-info">
        <p className="message-sender">{sender}</p>
        <p className="message-text">{message}</p>
        <p className="message-date">
          <Moment format="DD/MM/YYYY, h:mm:ss a">{date}</Moment>
        </p>
      </div>
    </div>
  );
};

export default MessageItem;
