import React from "react";
import Moment from "react-moment";

const MessageItem = ({ message: { date, sender, text }, key }) => {
  return (
    <div className="message" key={key}>
      <span id="sender">{sender} :</span>
      <br />
      {text}
      <p className="message-date">
        Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
      </p>
    </div>
  );
};

export default MessageItem;
