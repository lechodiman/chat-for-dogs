import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import firebase from "./firebase";
import Welcome from "./components/Welcome";
import Messages from "./components/Messages/Messages";
import MessageForm from "./components/Messages/MessageForm";
const db = firebase.database();

const App = props => {
  const [nickname, setNickname] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState({});
  const [joined, setJoined] = useState(false);

  const chatRoom = db
    .ref()
    .child("chatrooms")
    .child("global");

  useEffect(() => {
    const handleNewMessages = snap => {
      console.log(snap.val());
      if (snap.val()) {
        setMessages(snap.val());
      }
    };

    chatRoom.on("value", handleNewMessages);

    return () => {
      chatRoom.off("value", handleNewMessages);
    };
  }, []);

  const handleNameChange = e => setNickname(e.target.value);

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
    if (e.key === "Enter") {
      chatRoom.push({
        sender: nickname,
        message,
        date: new Date()
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
          onClick={handleClick}
        ></Welcome>
      ) : (
        <Fragment>
          <Messages messages={messages}></Messages>
          <MessageForm
            message={message}
            onMessageChange={handleMessageChange}
            onMessageSubmit={handleKeyDown}
          ></MessageForm>
        </Fragment>
      )}
    </div>
  );
};

export default App;
