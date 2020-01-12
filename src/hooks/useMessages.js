import { useEffect, useState } from 'react';

import { db } from '../firebase';
const useMessages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const numberOfLastMessages = 2;

    const handleAddMessage = snap => {
      const message = snap.val();
      setMessages(messages => [...messages, message]);
    };

    const chatRoom = db
      .ref('/chatrooms/global/')
      .limitToLast(numberOfLastMessages);

    chatRoom.on('child_added', handleAddMessage);

    return () => {
      chatRoom.off('child_added', handleAddMessage);
    };
  }, []);

  return { messages };
};

export default useMessages;
