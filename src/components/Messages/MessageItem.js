import React from "react";
import Moment from "react-moment";

const MessageItem = ({ message: { date, sender, message }, key }) => {
  return (
    <div className="message" key={key}>
      <span id="sender">{sender} :</span>
      <br />
      {message}
      <p className="message-date">
        Posted on <Moment format="DD/MM/YYYY, h:mm:ss a, ">{date}</Moment>
      </p>
    </div>
  );
};

export default MessageItem;
