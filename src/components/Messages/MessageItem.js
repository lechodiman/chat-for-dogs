import React, { Fragment } from "react";
import Moment from "react-moment";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";

const MessageItem = ({ message: { date, sender, message, avatar } }) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={sender} src={avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={sender}
        secondary={
          <Fragment>
            <Typography component="span" variant="body2" color="textPrimary">
              {<Moment format="DD/MM/YYYY, h:mm:ss a">{date}</Moment>} -{" "}
            </Typography>
            {message}
          </Fragment>
        }
      />
    </ListItem>
  );
};

export default MessageItem;
