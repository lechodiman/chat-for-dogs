import { useState } from 'react';

import { db } from '../firebase';
const useMessage = () => {
  const [message, setMessage] = useState('');

  const saveMessage = message => {
    return db
      .ref('/chatrooms/global/')
      .push(message)
      .catch(e => console.log('Error saving message to DB: ', e));
  };

  return { message, setMessage, saveMessage };
};

export default useMessage;
