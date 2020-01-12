import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import useDogs from '../hooks/useDogs';

const Welcome = ({
  nickname,
  onNicknameChange,
  avatar,
  onAvatarChange,
  onClick
}) => {
  const { images, loading } = useDogs();
  return (
    <div className="welcome-form">
      <Typography component="h1">Hey there.</Typography>

      <Typography component="h1">What's your doggo name?</Typography>
      <TextField
        id="outlined-name"
        label="Doggo Name"
        value={nickname}
        onChange={onNicknameChange}
        margin="normal"
        variant="outlined"
        required
      />
      <br />
      <h3>Pick your doggo!</h3>
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
              className={avatar === image ? 'dog-img selected' : 'dog-img'}
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
