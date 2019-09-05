import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const Welcome = ({
  nickname,
  onNicknameChange,
  avatar,
  onAvatarChange,
  onClick
}) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogs = async () => {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random/3");
      return res.data.message;
    };

    setLoading(true);
    fetchDogs().then(dogs => {
      setImages(dogs);
      setLoading(false);
    });
  }, []);

  return (
    <div className="welcome-form">
      <h1>Hey there.</h1>
      <h3>What's your name?</h3>
      <TextField
        id="outlined-name"
        label="Name"
        value={nickname}
        onChange={onNicknameChange}
        margin="normal"
        variant="outlined"
        required
      />
      <br />
      <h3>Pick your avatar!</h3>
      {loading ? (
        <CircularProgress />
      ) : (
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
      )}

      <br />
      <Button variant="contained" color="primary" onClick={onClick}>
        Join
      </Button>
    </div>
  );
};

export default Welcome;
