import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import Pagination from "./Pagination";
import Messages from "./Messages/Messages";

const History = () => {
  const [messages, setMessages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  useEffect(() => {
    const chatRoom = db
      .ref()
      .child("chatrooms")
      .child("global");

    const handleMessage = snap => {
      if (snap.val()) {
        setMessages(Object.values(snap.val()));
      }
    };

    chatRoom.limitToLast(100).on("value", handleMessage);

    return () => {
      chatRoom.off("value", handleMessage);
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
