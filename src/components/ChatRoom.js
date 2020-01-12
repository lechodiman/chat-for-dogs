import React, { useState, Fragment } from 'react';
import Welcome from './Welcome';
import Messages from './Messages/Messages';
import MessageForm from './Messages/MessageForm';
import Container from '@material-ui/core/Container';
import useNickname from '../hooks/useNickname';
import useMessages from '../hooks/useMessages';
import useMessage from '../hooks/useMessage';

const ChatRoom = () => {
  const [avatar, setAvatar] = useState('');
  const { nickname, setNickname, uploadNickname, joined } = useNickname();
  const { messages } = useMessages();
  const { message, setMessage, saveMessage } = useMessage();

  const handleNameChange = e => setNickname(e.target.value);
  const handleAvatarChange = avatar => setAvatar(avatar);
  const handleMessageChange = e => setMessage(e.target.value);

  const handleKeyDown = e => {
    const date = new Date();
    const messageDoc = {
      sender: nickname,
      avatar,
      message,
      date: date.toString()
    };

    if (e.key === 'Enter') {
      saveMessage(messageDoc);
      setMessage('');
    }
  };

  return (
    <Container maxWidth="sm">
      {!joined ? (
        <Welcome
          nickname={nickname}
          onNicknameChange={handleNameChange}
          avatar={avatar}
          onAvatarChange={handleAvatarChange}
          onClick={uploadNickname}
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
    </Container>
  );
};

export default ChatRoom;
