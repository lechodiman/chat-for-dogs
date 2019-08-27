import React from "react";

const Welcome = ({ nickname, onNicknameChange, onClick }) => {
  return (
    <div className="joinForm">
      <h1>Hey there.</h1>
      <h3>What's your name?</h3>
      <input
        type="text"
        placeholder="Nickname"
        value={nickname}
        onChange={onNicknameChange}
      />
      <br />
      <button onClick={onClick}>Join</button>
    </div>
  );
};

export default Welcome;
