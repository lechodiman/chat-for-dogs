import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const MessageForm = ({ avatar, message, onMessageChange, onMessageSubmit }) => {
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="my-photo" src={avatar} />
      <TextField
        label="Message"
        value={message}
        onChange={onMessageChange}
        onKeyDown={onMessageSubmit}
        margin="normal"
      />
    </Grid>
  );
};

export default MessageForm;
