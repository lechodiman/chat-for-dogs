import React, { useState, useEffect, Fragment } from "react";
import { db } from "../firebase";
import Welcome from "./Welcome";
import Messages from "./Messages/Messages";
import MessageForm from "./Messages/MessageForm";

const ChatRoom = () => {
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [joined, setJoined] = useState(false);
  const [avatar, setAvatar] = useState("");

  const chatRoom = db
    .ref()
    .child("chatrooms")
    .child("global");

  useEffect(() => {
    const handleNewMessages = snap => {
      if (snap.val()) {
        setMessages(Object.values(snap.val()));
      }
    };

    chatRoom.on("value", handleNewMessages);

    return () => {
      chatRoom.off("value", handleNewMessages);
    };
  }, []);

  const handleNameChange = e => setNickname(e.target.value);
  const handleAvatarChange = avatar => setAvatar(avatar);

  const handleClick = e => {
    db.ref()
      .child("nicknames")
      .push({
        nickname
      });
    setJoined(true);
  };

  const handleMessageChange = e => setMessage(e.target.value);

  // Not sure why this is here
  const handleKeyDown = e => {
    const date = new Date();
    if (e.key === "Enter") {
      chatRoom.push({
        sender: nickname,
        avatar,
        message,
        date: date.toString()
      });
      setMessage("");
    }
  };

  return (
    <div className="App">
      {!joined ? (
        <Welcome
          nickname={nickname}
          onNicknameChange={handleNameChange}
          avatar={avatar}
          onAvatarChange={handleAvatarChange}
          onClick={handleClick}
        ></Welcome>
      ) : (
        <Fragment>
          <Messages messages={messages}></Messages>
          <MessageForm
            avatar={avatar}
            message={message}
            onMessageChange={handleMessageChange}
            onMessageSubmit={handleKeyDown}
          ></MessageForm>
        </Fragment>
      )}
    </div>
  );
};

export default ChatRoom;
