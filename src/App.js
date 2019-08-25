import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./App.css";
import firebase from "./firebase";

const db = firebase.database();

const chatRoom = db
  .ref()
  .child("chatrooms")
  .child("global");

const App = props => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState({});
  const [joined, setJoined] = useState(false);

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
  }, [chatRoom]);

  const handleNameChange = e => setNickname(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);

  const handleClick = e => {
    db.ref()
      .child("nicknames")
      .push({
        nickname,
        email
      });
    setJoined(true);
  };

  const handleMessageChange = e => setMessage(e.target.value);

  // Not sure why this is here
  const handleKeyDown = e => {
    if (e.key === "Enter") {
      chatRoom.push({
        sender: nickname,
        message
      });
      setMessage("");
    }
  };

  return (
    <div className="App">
      {!joined ? (
        <div className="joinForm">
          <input
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={handleNameChange}
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <br />
          <button onClick={handleClick}>Join</button>
        </div>
      ) : (
        <div className="chat">
          <div className="messages">
            {Object.keys(messages).map(key => {
              if (messages[key]["sender"] === nickname) {
                return (
                  <div className="message" key={key}>
                    <span id="me">{messages[key]["sender"]} :</span>
                    <br />
                    {messages[key]["message"]}
                  </div>
                );
              }

              return (
                <div className="message" key={key}>
                  <span id="sender">{messages[key]["sender"]} :</span>
                  <br />
                  {messages[key]["message"]}
                </div>
              );
            })}
          </div>
          <input
            type="text"
            placeholder="msg"
            onChange={handleMessageChange}
            value={message}
            onKeyDown={handleKeyDown}
          />
        </div>
      )}
    </div>
  );
};

App.propTypes = {};

export default App;
