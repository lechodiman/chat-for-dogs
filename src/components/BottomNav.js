import React, { useState } from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import ChatIcon from "@material-ui/icons/Chat";
import { withRouter } from "react-router-dom";

const BottomNav = ({ history }) => {
  const [value, setValue] = useState("/");
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(newValue);
      }}
    >
      <BottomNavigationAction label="ChatRoom" value="/" icon={<ChatIcon />} />
      <BottomNavigationAction
        label="Recents"
        value="/history"
        icon={<RestoreIcon />}
      />
    </BottomNavigation>
  );
};

export default withRouter(BottomNav);
