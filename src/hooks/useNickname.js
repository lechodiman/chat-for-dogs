import { useState } from 'react';
import { db } from '../firebase';

const useNickname = () => {
  const [nickname, setNickname] = useState('');
  const [joined, setJoined] = useState(false);

  const uploadNickname = e => {
    db.ref()
      .child('nicknames')
      .push({
        nickname
      });
    setJoined(true);
  };

  return { nickname, setNickname, uploadNickname, joined };
};

export default useNickname;
