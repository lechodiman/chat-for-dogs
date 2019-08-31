import React, { useState, useEffect } from "react";
import db from "../firebase";
import Pagination from "./Pagination";
import Messages from "./Messages/Messages";
const History = () => {
  // TODO:
  // - Load latest 100 messages
  // - Display messages with MessageItem
  // - Paginate those messages
  const [messages, setMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(2);

  useEffect(() => {
    const chatRoom = db
      .ref()
      .child("chatrooms")
      .child("global");

    const handleNewMessages = snap => {
      if (snap.val()) {
        setMessages(Object.values(snap.val()));
        console.log(Object.values(snap.val()));
      }
    };

    chatRoom.limitToLast(100).on("value", handleNewMessages);

    return () => {
      chatRoom.off("value", handleNewMessages);
    };
  }, []);

  const indexOfLastMessage = currentPage * postsPerPage;
  const indexOfFirstMessage = indexOfLastMessage - postsPerPage;
  const currentMessages = messages.slice(
    indexOfFirstMessage,
    indexOfLastMessage
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Here are the 100 latest messages</h1>
      <Messages messages={currentMessages}></Messages>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={messages.length}
        paginate={paginate}
      ></Pagination>
    </div>
  );
};

export default History;
