import React, { useState, useEffect } from "react";
import axios from "axios";
const Welcome = ({
  nickname,
  onNicknameChange,
  avatar,
  onAvatarChange,
  onClick
}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchDogs = async () => {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random/3");
      return res.data.message;
    };

    fetchDogs().then(dogs => setImages(dogs));
  }, []);

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
      <h3>Pick your avatar!</h3>
      <div className="dog-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="dog"
            onClick={() => onAvatarChange(image)}
            className={avatar === image ? "dog-img selected" : "dog-img"}
          />
        ))}
      </div>
      <br />

      <button onClick={onClick}>Join</button>
    </div>
  );
};

export default Welcome;
